#!/usr/bin/env node

/**
 * Glide publishing helper for the start.ng platform.
 *
 * Pipeline:
 * 1. Verifies local dist/ build assets (index.html, cover.png, startng.json).
 * 2. Pre-flight check: POST https://api.start.ng/games/check
 * 3. Publish request: POST https://api.start.ng/games/publish
 * 4. Outputs approve_url for final release confirmation.
 */

import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

// Helper to determine git repository URL
function getRepoUrl() {
  // 1. Explicit CLI argument: --repo <URL> or first positional argument
  const args = process.argv.slice(2);
  const repoFlagIdx = args.indexOf('--repo');
  if (repoFlagIdx !== -1 && args[repoFlagIdx + 1]) {
    return args[repoFlagIdx + 1].trim();
  }
  for (const arg of args) {
    if (!arg.startsWith('--')) {
      return arg.trim();
    }
  }

  // 2. Environment variable
  if (process.env.REPO_URL) {
    return process.env.REPO_URL.trim();
  }

  // 3. Auto-detect from git remote
  try {
    const gitRemote = execSync('git config --get remote.origin.url', { cwd: rootDir, encoding: 'utf-8' }).trim();
    if (gitRemote) {
      return gitRemote;
    }
  } catch {
    // Git remote not configured yet
  }

  return null;
}

// Local pre-flight check verifying required dist assets
function verifyDistAssets() {
  const distDir = resolve(rootDir, 'dist');
  const requiredFiles = [
    { path: resolve(distDir, 'index.html'), name: 'dist/index.html' },
    { path: resolve(distDir, 'cover.png'), name: 'dist/cover.png (16:10 banner)' },
    { path: resolve(distDir, 'startng.json'), name: 'dist/startng.json (leaderboard spec)' },
  ];

  console.log('🔍 Verifying compiled release assets in dist/...');
  const missing = [];
  for (const file of requiredFiles) {
    if (!existsSync(file.path)) {
      missing.push(file.name);
    } else {
      console.log(`  ✓ Found ${file.name}`);
    }
  }

  if (missing.length > 0) {
    console.error('\n❌ Pre-flight check failed! Missing required distribution assets:');
    for (const m of missing) {
      console.error(`  - ${m}`);
    }
    console.error('\nPlease run "npm run build" before publishing.\n');
    process.exit(1);
  }

  console.log('  ✓ All mandatory start.ng distribution files present!\n');
}

async function main() {
  console.log('====================================================');
  console.log('          START.NG RELEASE PIPELINE: GLIDE          ');
  console.log('====================================================\n');

  verifyDistAssets();

  const repoUrl = getRepoUrl();
  if (!repoUrl) {
    console.error('❌ Error: Could not determine git repository URL.');
    console.error('Please provide your repository URL:');
    console.error('  node scripts/publish.js <REPO_URL>');
    console.error('  or set REPO_URL environment variable');
    console.error('  or run "git remote add origin <REPO_URL>"\n');
    process.exit(1);
  }

  const payload = {
    repo_url: repoUrl,
    name: 'glide',
  };

  console.log(`📦 Game Name: ${payload.name}`);
  console.log(`🔗 Repo URL:  ${payload.repo_url}\n`);

  // Step 1: Pre-flight validation request
  console.log('📡 Step 1/2: Sending pre-flight validation check to https://api.start.ng/games/check ...');
  try {
    const checkRes = await fetch('https://api.start.ng/games/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const checkText = await checkRes.text();
    let checkData;
    try {
      checkData = JSON.parse(checkText);
    } catch {
      checkData = { raw: checkText };
    }

    if (!checkRes.ok) {
      console.error(`❌ Pre-flight check failed with HTTP ${checkRes.status}:`, checkData);
      process.exit(1);
    }

    console.log('✅ Pre-flight check passed successfully!');
    if (checkData.message) {
      console.log(`   Message: ${checkData.message}`);
    }
    console.log('');
  } catch (err) {
    console.error('❌ Network error during pre-flight check:', err.message);
    process.exit(1);
  }

  // Step 2: Trigger publish
  console.log('🚀 Step 2/2: Publishing to https://api.start.ng/games/publish ...');
  try {
    const pubRes = await fetch('https://api.start.ng/games/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const pubText = await pubRes.text();
    let pubData;
    try {
      pubData = JSON.parse(pubText);
    } catch {
      pubData = { raw: pubText };
    }

    if (!pubRes.ok) {
      console.error(`❌ Publish failed with HTTP ${pubRes.status}:`, pubData);
      process.exit(1);
    }

    console.log('\n====================================================');
    console.log('🎉 PUBLISH TRIGGERED SUCCESSFULLY!');
    console.log('====================================================');

    const approveUrl = pubData.approve_url || pubData.url || pubData.approval_url;
    if (approveUrl) {
      console.log('\n👉 Final Release Approval URL:');
      console.log(`   ${approveUrl}\n`);
      console.log('Open this link in your browser to approve and finalize the release.');
    } else {
      console.log('\nPublish Response:', JSON.stringify(pubData, null, 2));
    }
  } catch (err) {
    console.error('❌ Network error during publish request:', err.message);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});

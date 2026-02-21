# PR: Fix Rollup module error in GitHub Actions deploy workflow

## 🐛 Bug Fix: Rollup Module Error in GitHub Actions

### Problem
The GitHub Actions workflow was failing during the build step with the following error:
```
Error: Cannot find module @rollup/rollup-linux-x64-gnu. 
npm has a bug related to optional dependencies.
```

**Failing Job:** https://github.com/Rishimistry11/rishimistry11.github.io/actions/runs/22256033818/job/64387013577

### Root Cause
This is a known npm bug related to optional dependencies where cached `node_modules` can get out of sync, particularly affecting native modules like Rollup's platform-specific binaries.

### Solution
This PR fixes the issue by:

1. ✨ **Added npm caching** - Added `cache: 'npm'` to the Node.js setup step for better performance and reliability
2. 🔧 **Changed to `npm ci`** - Replaced `npm install` with `npm ci` for clean, deterministic installs

### Why `npm ci` fixes this:
- Performs a **clean install** from `package-lock.json`
- Removes existing `node_modules` before installation
- Specifically designed for **CI/CD environments**
- Works around the npm optional dependencies bug
- More reliable and faster in CI pipelines

### Changes Made
**File:** `.github/workflows/deploy.yml`
- Line 27-28: Added `cache: 'npm'` to Setup Node step
- Line 30: Changed `npm install` to `npm ci`

### Testing
After merging this PR, the GitHub Pages deployment workflow should run successfully without the Rollup module error.
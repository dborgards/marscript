# VS Code Marketplace Publishing Guide

This document describes how to set up automated publishing to the VS Code Marketplace.

## Initial Setup (One-Time)

### 1. Create Azure DevOps Account

1. Go to https://dev.azure.com
2. Sign in with your Microsoft account (or create one)
3. Create an organization (e.g., "dborgards")

### 2. Create Personal Access Token (PAT)

1. In Azure DevOps, click on your profile picture (top right)
2. Go to **User Settings** → **Personal Access Tokens**
3. Click **"+ New Token"**
4. Configure:
   - **Name**: `vscode-marketplace-marscript`
   - **Organization**: Select your organization
   - **Expiration**: Choose duration (90 days, 1 year, or custom)
   - **Scopes**: Click **"Show all scopes"**
     - Scroll to **Marketplace**
     - Check: ✅ **Marketplace (Manage)**
5. Click **"Create"**
6. **IMPORTANT**: Copy the token immediately and save it securely!

### 3. Create Publisher Account

**Option A: Using vsce CLI**

```bash
# Install vsce globally
npm install -g @vscode/vsce

# Create or login to publisher account
vsce login dborgards
# You will be prompted for the PAT - paste it
```

**Option B: Via Web Interface**

1. Go to https://marketplace.visualstudio.com/manage
2. Sign in with the same Microsoft account
3. Click **"Create publisher"**
4. Fill in:
   - **Publisher ID**: `dborgards` (must match package.json)
   - **Display Name**: Your full name
   - **Description**: Brief description

### 4. Add GitHub Secret

1. Go to your GitHub repository: https://github.com/dborgards/marscript
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add:
   - **Name**: `VSCE_PAT`
   - **Secret**: Paste your Personal Access Token from step 2
5. Click **"Add secret"**

## Automated Publishing

After the initial setup, publishing is fully automated:

1. **Merge to main** → semantic-release creates a new GitHub release
2. **GitHub release created** → triggers `publish-marketplace.yml` workflow
3. **Workflow runs**:
   - Builds the VSIX package
   - Publishes to VS Code Marketplace using `VSCE_PAT` secret

The extension will be available at:
**https://marketplace.visualstudio.com/items?itemName=dborgards.marscript**

## Manual Publishing (Fallback)

If automated publishing fails, you can publish manually:

```bash
# Download the VSIX from GitHub release
# https://github.com/dborgards/marscript/releases

# Login to publisher account
vsce login dborgards

# Publish the package
vsce publish --packagePath marscript-x.y.z.vsix
```

## Updating the PAT

When your PAT expires:

1. Create a new PAT in Azure DevOps (same steps as above)
2. Update the GitHub secret `VSCE_PAT` with the new token
3. That's it! The next release will use the new token

## Troubleshooting

### "Error: Failed to publish extension"

- Check if the PAT is still valid
- Verify the publisher ID in package.json matches your publisher account
- Ensure the VSCE_PAT secret is correctly set in GitHub

### "Error: Extension already published with this version"

- You cannot publish the same version twice
- Create a new release with a higher version number

### "Error: Publisher not found"

- Make sure the publisher account exists: https://marketplace.visualstudio.com/manage
- Verify the publisher ID in package.json matches exactly

## Security Notes

- **Never** commit the PAT to the repository
- **Always** use GitHub Secrets for the PAT
- Set an expiration date for your PAT
- Rotate the PAT regularly for security
- The PAT should only have **Marketplace (Manage)** scope, nothing more

## Resources

- [VS Code Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vsce CLI Documentation](https://github.com/microsoft/vscode-vsce)
- [Marketplace Management Portal](https://marketplace.visualstudio.com/manage)

// semantic-release 25 depends on @semantic-release/npm, which installs a full npm CLI with its
// own bundled dependencies (undici, minimatch, ...). Overrides can't reach those.
// .releaserc.json lists its plugins explicitly and npm is not one of them, because this repo
// ships a VS Code extension and never publishes to npm. The version bump in package.json is done
// by @semantic-release/exec with the npm that CI already has. package.json points the dependency
// at this directory so the npm CLI stays out of the tree.
//
// Loading it is always a mistake: fail loudly instead of releasing without the npm step.
throw new Error(
  '@semantic-release/npm is disabled in this repository: marscript does not publish to npm. ' +
    'See eng/semantic-release-npm-disabled/index.js.',
);

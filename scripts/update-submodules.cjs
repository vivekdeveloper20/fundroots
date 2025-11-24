const { execSync } = require('child_process');
try {
  console.log('Attempting to update git submodules...');
  execSync('git submodule update --init --recursive', { stdio: 'inherit' });
  console.log('Submodule update finished.');
} catch (err) {
  console.warn('Submodule update failed or no submodules configured:', err.message || err);
  // swallow error so postinstall doesn't fail builds
}

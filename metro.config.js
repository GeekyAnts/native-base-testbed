/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    extraNodeModules: {
      '@native-base': path.resolve(__dirname, 'NativeBase/src/index')
    },
    blacklistRE: blacklist([
      new RegExp(`NativeBase/node_modules/react-native/.*`)
    ])
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true
      }
    })
  }
};

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-redux|@react-navigation|some-other-module)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

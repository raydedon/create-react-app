const paths = require('path');

module.exports = {
  // Source files
  src: paths.resolve(__dirname, '../src'),
	
  // Production build files
  build: paths.resolve(__dirname, '../dist'),
	
  // Static files that get copied to build folder
  public: paths.resolve(__dirname, '../public'),
};

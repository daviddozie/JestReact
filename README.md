# React + Vite + Jest
# #INSTALLATION PROCESS:👇

# Make sure you have the necessary packages installed. Run the following command in your project directory:
npm install --save-dev jest @types/jest ts-jest babel-jest.
# Create a jest.config.cjs file in your project root with the following content:
module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ["@testing-library/react"],
};
# Update your package.json to include test scripts:
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
}
# Create a .babelrc file in your project root with the following content:
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
# Install jest-environment-jsdom as a development dependency:
npm install --save-dev jest-environment-jsdom
# Update your Jest configuration to use the jest-environment-jsdom. You can do this by adding or updating the testEnvironment field in your jest.config.js:
module.exports = {
  // other Jest configurations
  testEnvironment: 'jest-environment-jsdom',
};
# Install the required Babel packages for handling JSX:
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-jest
# Make sure you have the required testing library dependencies installed. Run the following command in your project directory:
npm install --save-dev @testing-library/react @testing-library/jest-dom
# Make sure to import the React module:
import React from 'react';
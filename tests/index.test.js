'use strict';
const index = require('../index.js');

describe("Testing | Index", () => {
  test('should fail if the ppu not have lenght 6 when triying to verify type', (done) => {
    try {
      let invalidLenghtPPU = 'XX111';
      index.verifyPpuType(invalidLenghtPPU);
      console.error(JSON.stringify(verifyPpuType));
    } catch (e) {
      done();
    }
  });
  test('should fail if the ppu not have lenght 6 when triying to verify type', (done) => {
    try {
      let invalidLenghtPPU = 'XX111';
      index.verifyPpuType(invalidLenghtPPU);
      console.error(JSON.stringify(verifyPpuType));
    } catch (e) {
      done();
    }
  });
});

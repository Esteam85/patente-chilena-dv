'use strict';
const index = require('../index.js');
const _variables = require('../variables.json');

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
  test('should fail if the ppu not has length 6 when triying to verify type', (done) => {
    try {
      let invalidLenghtPPU = 'XX111';
      index.verifyPpuType(invalidLenghtPPU);
      console.error(JSON.stringify(verifyPpuType));
    } catch (e) {
      done();
    }
  });
  // New Moto Format
  test('should not return "motoNew" if ppu not contains 0, 3 letters and has length 6', (done) => {
    let inValidPpuMoto = 'XX0111';
    let typePpu = index.verifyPpuType(inValidPpuMoto);
    expect(typePpu).not.toBe( _variables.motoNewFormat);
    done();
  })
  test('should not return "motoNew" if ppu not contains 0, 3 letters and has length 6 but 0 is not at index 3', (done) => {
    let inValidPpuMoto = 'XXX111';
    let typePpu = index.verifyPpuType(inValidPpuMoto);
    expect(typePpu).not.toBe( _variables.motoNewFormat);
    done();
  })
  test('should not return "motoNew" if ppu contains 0, 3 letters and has length 6 but 0 is not at index 3', (done) => {
    let inValidPpuMoto = 'XXX110';
    let typePpu = index.verifyPpuType(inValidPpuMoto);
    expect(typePpu).not.toBe( _variables.motoNewFormat);
    done();
  })
  test('should not return "motoNew" if ppu contains 0, 3 letters and has length 6 but 0 is at index 3', (done) => {
    let validPpuMotoNew = 'XXX011';
    let typePpu = index.verifyPpuType(validPpuMotoNew);
    expect(typePpu).toBe( _variables.motoNewFormat);
    done();
  })
  // Old Moto Format
  test('should not return "motoOld" if ppu not contains 0, 2 letters, 4 numbers and has length 6', (done) => {
    let invalidPpuMotoOld = 'XX1111';
    let typePpu = index.verifyPpuType(invalidPpuMotoOld);
    expect(typePpu).not.toBe( _variables.motoOldFormat);
    done();
  })
  test('should not return "motoOld" if ppu contains 0, 2 letters, 4 numbers and has length 6 but 0 is at index 2', (done) => {
    let invalidPpuMotoOld = 'XX1110';
    let typePpu = index.verifyPpuType(invalidPpuMotoOld);
    expect(typePpu).not.toBe( _variables.motoOldFormat);
    done();
  })
  test('should not return "motoOld" if ppu contains 0, 2 letters, 4 numbers and has length 6 but 0 is not at index 2', (done) => {
    let invalidPpuMotoOld = 'X0X111';
    let typePpu = index.verifyPpuType(invalidPpuMotoOld);
    expect(typePpu).not.toBe( _variables.motoOldFormat);
    done();
  })
  test('should return "motoOld" if ppu contains 0, 2 letters, 4 numbers and has length 6 but 0 is at index 2', (done) => {
    let validPpuMotoOld = 'XX0111';
    let typePpu = index.verifyPpuType(validPpuMotoOld);
    expect(typePpu).toBe( _variables.motoOldFormat);
    done();
  })
  //New Format Auto
  test('should not return "autoNew" if ppu contains 0, 2 letters, 4 numbers and has length 6', (done) => {
    let validPpuAutoNew = 'XX0111';
    let typePpu = index.verifyPpuType(validPpuAutoNew);
    expect(typePpu).not.toBe( _variables.autoNewFormat);
    done();
  })
  test('should not return "autoNew" if ppu contains 0, 3 letters, 4 numbers and has length 6', (done) => {
    let validPpuAutoNew = 'XX1011';
    let typePpu = index.verifyPpuType(validPpuAutoNew);
    expect(typePpu).not.toBe( _variables.autoNewFormat);
    done();
  })
  test('should not return "autoNew" if ppu contains 0, 3 letters, 4 numbers and has length 6', (done) => {
    let validPpuAutoNew = 'XX1011';
    let typePpu = index.verifyPpuType(validPpuAutoNew);
    expect(typePpu).not.toBe( _variables.autoNewFormat);
    done();
  })
  test('should not return "autoNew" if ppu contains 0, 3 letters, 4 numbers and has length 6', (done) => {
    let validPpuAutoNew = 'XX1011';
    let typePpu = index.verifyPpuType(validPpuAutoNew);
    expect(typePpu).not.toBe(_variables.autoNewFormat);
    done();
  });
  test('should not return "autoNew" if ppu contains 0, 3 letters, 4 numbers and has length 6', (done) => {
    let validPpuAutoNew = 'XX1011';
    let typePpu = index.verifyPpuType(validPpuAutoNew);
    expect(typePpu).not.toBe(_variables.autoNewFormat);
    done();
  });
  test('should not return "autoNew" if ppu contains 0, 3 letters, 4 numbers and has length 6', (done) => {
    let validPpuAutoNew = 'XX1011';
    let typePpu = index.verifyPpuType(validPpuAutoNew);
    expect(typePpu).not.toBe(_variables.autoNewFormat);
    done();
  });
});

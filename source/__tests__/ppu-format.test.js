'use strict';
const Ppu = require('../ppu');
const _variables = require('../variables.json');

describe("Testing | Ppu", () => {
  test('should fail if the ppu not have length 6 when trying to verify type', (done) => {
    try {
      let invalidLenghtPPU = 'XX111';
      Ppu.prototype.verifyPpuType(invalidLenghtPPU);
    } catch (e) {
      done();
    }
  });
  // New Moto Format
  test('should not return "motoNew" if ppu not contains 0, 3 letters and has length 6', (done) => {
    let inValidPpuMoto = 'XX0111';
    let ppu = Ppu.prototype.verifyPpuType(inValidPpuMoto);
    expect(ppu.name).not.toBe(_variables.motoNewFormat.name);
    expect(ppu.type).not.toBe(_variables.motoNewFormat.type);
    done();
  })

  test('should not return "motoNew" if ppu contains 0, 3 letters and has length 6 but 0 is at index 3', (done) => {
    let validPpuMotoNew = 'XXX011';
    let ppu = Ppu.prototype.verifyPpuType(validPpuMotoNew);
    expect(ppu.name).toBe(_variables.motoNewFormat.name);
    expect(ppu.type).toBe(_variables.motoNewFormat.type);
    done();
  })
  // Old Moto Format
  test('should not return "motoOld" if ppu not contains 0, 2 letters, 4 numbers and has length 6', (done) => {
    let invalidPpuMotoOld = 'XX1111';
    let ppu = Ppu.prototype.verifyPpuType(invalidPpuMotoOld);
    expect(ppu.name).not.toBe(_variables.motoOldFormat.name);
    done();
  })
  test('should not return "motoOld" if ppu contains 0, 2 letters, 4 numbers and has length 6 but 0 is at index 2', (done) => {
    let invalidPpuMotoOld = 'XX1110';
    let ppu = Ppu.prototype.verifyPpuType(invalidPpuMotoOld);
    expect(ppu.name).not.toBe(_variables.motoOldFormat.name);
    done();
  })
  test('should not return "motoOld" if ppu contains 0, 2 letters, 4 numbers and has length 6 but 0 is not at index 2', (done) => {
    let invalidPpuMotoOld = 'XX1101';
    let ppu = Ppu.prototype.verifyPpuType(invalidPpuMotoOld);
    expect(ppu.name).not.toBe(_variables.motoOldFormat.name);
    done();
  })
  test('should return "motoOld" if ppu contains 0, 2 letters, 4 numbers and has length 6 but 0 is at index 2', (done) => {
    let validPpuMotoOld = 'XX0111';
    let ppu = Ppu.prototype.verifyPpuType(validPpuMotoOld);
    expect(ppu.name).toBe(_variables.motoOldFormat.name);
    expect(ppu.type).toBe(_variables.motoOldFormat.type);
    done();
  })
  //New Format Auto
  test('should not return "autoNew" if ppu contains 2 letters, 4 numbers and has length 6', (done) => {
    let inValidPpuAutoNew = 'XX1111';
    let ppu = Ppu.prototype.verifyPpuType(inValidPpuAutoNew);
    expect(ppu.name).not.toBe(_variables.autoNewFormat.name);
    expect(ppu.type).not.toBe(_variables.autoNewFormat.type);
    done();
  })
  test('should not return "autoNew" if ppu contains 3 letters, 3 numbers and has length 6', (done) => {
    let inValidPpuAutoNew = 'XXX011';
    let ppu = Ppu.prototype.verifyPpuType(inValidPpuAutoNew);
    expect(ppu.name).not.toBe(_variables.autoNewFormat.name);
    expect(ppu.type).not.toBe(_variables.autoNewFormat.type);
    done();
  });
  test('should not return "autoNew" if ppu contains 0, 3 letters, 3 numbers, and has length 6 but start with a number', (done) => {
    try {
      let inValidPpuAutoNew = '1XX111';
      Ppu.prototype.verifyPpuType(inValidPpuAutoNew);
    } catch (e) {
      done();
    }
  });
  test('should return "autoNew" if ppu not contains 0, 2 letters, 4 numbers and has length 6', (done) => {
    let validPpuAutoNew = 'XXXX11';
    let ppu = Ppu.prototype.verifyPpuType(validPpuAutoNew);
    expect(ppu.name).toBe(_variables.autoNewFormat.name);
    expect(ppu.type).toBe(_variables.autoNewFormat.type);
    done();
  });
  //Carro Arrastre Format
  test('should not return "carroArrastre" if ppu contains 2 letters, 4 numbers and has length 6', (done) => {
    let inValidPpuCarroArrastre = 'XXXX11';
    let ppu = Ppu.prototype.verifyPpuType(inValidPpuCarroArrastre);
    expect(ppu.name).not.toBe(_variables.carroArrastreFormat.name);
    expect(ppu.type).not.toBe(_variables.carroArrastreFormat.type);
    done();
  })
  test('should not return "carroArrastre" if ppu contains 3 letters, 3 numbers and has length 6', (done) => {
    let inValidPpuCarroArrastre = 'XXX011';
    let ppu = Ppu.prototype.verifyPpuType(inValidPpuCarroArrastre);
    expect(ppu.name).not.toBe(_variables.carroArrastreFormat.name);
    done();
  });
  test('should not return "carroArrastre" if ppu contains 0, 3 letters, 3 numbers, and has length 6 but start with a number', (done) => {
    try {
      let inValidPpuCarroArrastre = '1XX111';
      Ppu.prototype.verifyPpuType(inValidPpuCarroArrastre);
    } catch (e) {
      done();
    }
  });

  test('should return erro if no has any valid format and has length 6', (done) => {
    try {
      let invalidPPU = '*^·"·$&';
      Ppu.prototype.verifyPpuType(invalidPPU);
    } catch (e) {
      done();
    }
  });

  test('should throw an error if ppu not contains 0, 3 letters and has length 6 but 0 is not at index 3 (Carro de Arrastre)', (done) => {
    let validCarroDeArrastre = 'XXX111';
    expect(()=>Ppu.prototype.verifyPpuType(validCarroDeArrastre)).toThrowError("CARRO DE ARRASTRE no es un formato válido.");
    done();
  })

  test('should throw an error  if ppu contains 0, 3 letters and has length 6 but 0 is not at index 3 (Carro de Arrastre)', (done) => {
    let validCarroDeArrastre = 'XXX110';
    expect(()=>Ppu.prototype.verifyPpuType(validCarroDeArrastre)).toThrowError("CARRO DE ARRASTRE no es un formato válido.");
    done();
  })
});

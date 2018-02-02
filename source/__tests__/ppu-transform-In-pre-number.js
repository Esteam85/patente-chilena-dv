'use strict';
const Ppu = require('../ppu');

describe("transformInPreNumber | Test", () => {

  test('should return a number that represent the ppu when format is LLL.NNN', (done) => {
    let validPpu = { ppu: 'GKZ444', format: { type: 'LLL.NNN' } }
    let ppuArray = Ppu.prototype.transformInPreNumber(validPpu);
    expect(typeof ppuArray).toBe('object');
    expect(ppuArray.length).toBe(6);
    done();
  });

  test('should return a number that represent the ppu when format is LLLL.NN', (done) => {
    let validPpu = { ppu: 'GKZT44', format: { type: 'LLLL.NN' } }
    let ppuArray = Ppu.prototype.transformInPreNumber(validPpu);
    expect(typeof ppuArray).toBe('object');
    expect(ppuArray.length).toBe(6);
    done();
  });

  test('should return a number that represent the ppu when format is LL.NNNN', (done) => {
    let validPpu = { ppu: 'XX1111', format: { type: 'LL.NNNN' } }
    let ppuArray = Ppu.prototype.transformInPreNumber(validPpu);
    expect(typeof ppuArray).toBe('object');
    expect(ppuArray.length).toBe(7);
    done();
  });

  test('should throw an error if is an "autoOld" and letters are not found in letterDb', (done) => {
    let invalidPpuAutoOld = { ppu: 'XI1234', format: { type: 'LL.NNNN' } }
    expect(() => {
      Ppu.prototype.transformInPreNumber(invalidPpuAutoOld);
    }).toThrow("Letras de Ppu de Auto Antiguo inválidas");
    done();
  });
});

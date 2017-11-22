'use strict';
const Ppu = require('../ppu');
describe('Calculate Dv | Ppu', () => {

  test('should return dv when format is LL.NNNN', () => {
    let validPpu = { ppu: 'XX1111', numbers: [ 3, 7, 0, 1, 1, 1, 1 ], format: { type: 'LL.NNNN' } };
    let calculateDvFn = Ppu.prototype.calculateDv;
    let dv = calculateDvFn(validPpu);
    expect(typeof dv).toBe('string');
    expect(dv).toBe("8");
  });
  test('should return dv when format is LLL.NNN', () => {
    let validPpu = { ppu: 'XXX111', numbers: [ 7, 7, 7, 1, 1, 1 ], format: { type: 'LLL.NNN' } };
    let calculateDvFn = Ppu.prototype.calculateDv;
    let dv = calculateDvFn(validPpu);
    expect(typeof dv).toBe('string');
    expect(dv).toBe("8");
  });
  test('should return dv when format is LLLL.NN', () => {
    let validPpu = { ppu: 'validPatente', numbers: [ 1, 2, 3, 4, 5, 6 ], format: { type: 'LLLL.NN' } };
    let calculateDvFn = Ppu.prototype.calculateDv;
    let dv = calculateDvFn(validPpu);
    expect(typeof dv).toBe('string');
    expect(dv).toBe("0");
  });
});
'use strict';
const Ppu = require('../ppu');
describe('Calculate Dv | Ppu',()=>{

  test('should return dv when format is LL.NNNN',()=>{
      let ppu = new Ppu('XX1111');
      expect(typeof ppu.dv).toBe('string');
      expect(ppu.dv).toBe("8");
  });

});
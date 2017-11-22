'use strict';
const Index = require('../Index');
const Ppu = require('../Ppu');
const _variables = require('../variables.json');

describe("transformInPreNumber | Test", ()=>{

  test('should return a number that represent the ppu when format is LLL.NNN', (done)=>{
    let ppu = new Ppu('GKZ444');
    expect(typeof ppu.numbers).toBe('object');
    expect(ppu.numbers.length).toBe(6);
    done();
  });

  test('should return a number that represent the ppu when format is LLLL.NNN', (done)=>{
    let ppu = new Ppu('GKZT44');
    expect(typeof ppu.numbers).toBe('object');
    expect(ppu.numbers.length).toBe(6);
    done();
  });

  test('should return a number that represent the ppu when format is LL.NNNN', (done)=>{
    let ppu = new Ppu('XX1111');
    expect(typeof ppu.numbers).toBe('object');
    expect(ppu.numbers.length).toBe(7);
    done();
  });

});

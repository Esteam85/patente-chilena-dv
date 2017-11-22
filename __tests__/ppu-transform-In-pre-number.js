'use strict';
const Index = require('../Index');
const Ppu = require('../Ppu');
const _variables = require('../variables.json');

describe("transformInPreNumber | Test", ()=>{

  test('should return a number that represent the ppu when format is LLL.NNN', (done)=>{
    let ppu = new Ppu('GKZ444');
    expect(typeof ppu.numbers).toBe('object');
    expect(ppu.numbers.length).toBe(_variables.MAX_LENGTH);
    console.log(ppu.numbers);
    done();
  });

  test('should return a number that represent the ppu when format is LLL.NNN', (done)=>{
    let ppu = new Ppu('GKZT44');
    expect(typeof ppu.numbers).toBe('object');
    expect(ppu.numbers.length).toBe(_variables.MAX_LENGTH);
    console.log(ppu.numbers);
    done();
  });

  test('should return a number that represent the ppu when format is LL.NNNN', (done)=>{
    let ppu = new Ppu('UT2938');
    expect(typeof ppu.numbers).toBe('object');
    expect(ppu.numbers.length).toBe(_variables.MAX_LENGTH);
    console.log(ppu.numbers);
    done();
  });

});

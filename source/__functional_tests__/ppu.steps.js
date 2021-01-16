const expect = require('expect')
const { Given, When, Then } = require('@cucumber/cucumber');
const Ppu = require('../ppu')


Given(/^a valid (.+)$/, function (ppu, callback) {
  this.ppu = ppu;
  callback();
});

When(/^generate the DV$/, function (callback) {
  this.generatedPpu = new Ppu(this.ppu);
  callback();
});

Then(/^should have the respective (.+) - DV$/, function (dv, callback) {
  expect(this.generatedPpu.dv).toBe(dv);
  callback();
});

Then(/^should have the respective (.+) - Format$/, function (format, callback) {
  expect(this.generatedPpu.format.type).toBe(format);
  callback();
});
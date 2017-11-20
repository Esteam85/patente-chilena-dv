'use strict';
const _ = require('lodash');
const _variables = require('./variables.json');

let index = {
  verifyPpuType: (ppu) => {
    if (ppu.length !== 6) {
      throw new Error("La patente(ppu) ingresada es de largo inválido")
    }
    // New Moto Format
    if (_.includes(ppu, '0',3) && isMoto(ppu)) {
      return _variables.motoNewFormat;
    }

    // Old Moto Format
    if (_.includes(ppu, '0',2) && isMoto(ppu)) {
      return _variables.motoOldFormat;
    }

    // New Auto Format
    if (isAutoMovilNew(ppu)) {
      return _variables.autoNewFormat;
    }
    // Old Auto Format
    if (isAutoMovilOld(ppu)) {
      return _variables.autoOldFormat;
    }
    // Carro Arrastre Format
    if (isCarroArrastre(ppu)) {
      return _variables.carroArrastreFormat;
    }
    throw new Error("Ppu no corresponde a ningun formato válido")
  },
  transformInPreNumer: () => {
  },
  calculateDV: (prePpu) => {
  }
}

function isAutoMovilNew(ppu) {
  // Validate format XXXX11
  const regexAutomovil = new RegExp(/^[b-d,f-h,j-l,p,r-t,v-z]{2}[\-\. ]?[b-d,f-h,j-l,p,r-t,v-z]{2}[\.\- ]?[0-9]{2}$/, 'i');
  return regexAutomovil.test(ppu);
}
function isAutoMovilOld(ppu) {
  // Validate format XX1111
  const regexAutomovil = new RegExp(/^[a-z]{2}[\.\- ]?[0-9]{2}[\.\- ]?[0-9]{2}$/, 'i');
  return regexAutomovil.test(ppu);
}

function isMoto(ppu) {
  // Validate format XX0111 / XX111 / XXX011 / XXX11
  const regexMoto = new RegExp(/^[a-z]{2}0[0-9]{3}$|^[a-z]{2}[0-9]{3}$|^[b-d,f-h,j-l,p,r-t,v-z]{3}[0-9]{2}$|^[b-d,f-h,j-l,p,r-t,v-z]{3}0[0-9]{2}$/, 'i');
  return regexMoto.test(ppu);
}
function isCarroArrastre(ppu) {
  // Validate format XXX111
  const regexCarroArrastre = new RegExp(/^[a-zA-Z]{3}[1-9]{1}[0-9]{2}$/, 'i');
  return regexCarroArrastre.test(ppu);
}
module.exports = index;

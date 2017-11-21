'use strict';
const _ = require('lodash');
const _variables = require('./variables.json');


class Index{

  constructor(){

  }

  static verifyPpuType(ppu){
    if (ppu.length !== 6) {
      throw new Error("La patente(ppu) ingresada es de largo inválido")
    }
    // New Moto Format
    if (_.includes(ppu, '0',3) && this.isMoto(ppu)) {
      return _variables.motoNewFormat;
    }

    // Old Moto Format
    if (_.includes(ppu, '0',2) && this.isMoto(ppu)) {
      return _variables.motoOldFormat;
    }

    // New Auto Format
    if (this.isAutoMovilNew(ppu)) {
      return _variables.autoNewFormat;
    }
    // Old Auto Format
    if (this.isAutoMovilOld(ppu)) {
      return _variables.autoOldFormat;
    }
    // Carro Arrastre Format
    if (this.isCarroArrastre(ppu)) {
      return _variables.carroArrastreFormat;
    }
    throw new Error("Ppu no corresponde a ningun formato válido")
  }

  static transformInPreNumer(ppu) {
    // Reconocer Typo de transformación por tipo de ppu

    // Cambiar letras por números (transformación) dependiendo tipo de ppu

    // retornar numeros.

  }

  static calculateDV (prePpu) {
  }

  static isAutoMovilNew(ppu) {
    // Validate format XXXX11
    const regexAutomovil = new RegExp(/^[b-d,f-h,j-l,p,r-t,v-z]{2}[\-\. ]?[b-d,f-h,j-l,p,r-t,v-z]{2}[\.\- ]?[0-9]{2}$/, 'i');
    return regexAutomovil.test(ppu);
  }
  static isAutoMovilOld(ppu) {
    // Validate format XX1111
    const regexAutomovil = new RegExp(/^[a-z]{2}[\.\- ]?[0-9]{2}[\.\- ]?[0-9]{2}$/, 'i');
    return regexAutomovil.test(ppu);
  }

  static isMoto(ppu) {
    // Validate format XX0111 / XX111 / XXX011 / XXX11
    const regexMoto = new RegExp(/^[a-z]{2}0[0-9]{3}$|^[a-z]{2}[0-9]{3}$|^[b-d,f-h,j-l,p,r-t,v-z]{3}[0-9]{2}$|^[b-d,f-h,j-l,p,r-t,v-z]{3}0[0-9]{2}$/, 'i');
    return regexMoto.test(ppu);
  }
  static isCarroArrastre(ppu) {
    // Validate format XXX111
    const regexCarroArrastre = new RegExp(/^[a-zA-Z]{3}[1-9]{1}[0-9]{2}$/, 'i');
    return regexCarroArrastre.test(ppu);
  }
}

module.exports = Index;

const _ = require('lodash');
const _variables = require('./variables.json');
const _letterDvDb = require('./letterDvDB.json');

class Ppu{
  constructor (ppu){
    this.ppu = ppu;
    this.format = this.verifyPpuType(ppu);
    this.numbers = this.transformInPreNumber(this);
  }
  verifyPpuType(ppu){
    if (ppu.length !== _variables.MAX_LENGTH) {
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
  isAutoMovilNew(ppu) {
    // Validate format XXXX11
    const regexAutomovil = new RegExp(/^[b-d,f-h,j-l,p,r-t,v-z]{2}[\-\. ]?[b-d,f-h,j-l,p,r-t,v-z]{2}[\.\- ]?[0-9]{2}$/, 'i');
    return regexAutomovil.test(ppu);
  }
  isAutoMovilOld(ppu) {
    // Validate format XX1111
    const regexAutomovil = new RegExp(/^[a-z]{2}[\.\- ]?[0-9]{2}[\.\- ]?[0-9]{2}$/, 'i');
    return regexAutomovil.test(ppu);
  }
  isMoto(ppu) {
    // Validate format XX0111 / XX111 / XXX011 / XXX11
    const regexMoto = new RegExp(/^[a-z]{2}0[0-9]{3}$|^[a-z]{2}[0-9]{3}$|^[b-d,f-h,j-l,p,r-t,v-z]{3}[0-9]{2}$|^[b-d,f-h,j-l,p,r-t,v-z]{3}0[0-9]{2}$/, 'i');
    return regexMoto.test(ppu);
  }
  isCarroArrastre(ppu) {
    // Validate format XXX111
    const regexCarroArrastre = new RegExp(/^[a-zA-Z]{3}[1-9]{1}[0-9]{2}$/, 'i');
    return regexCarroArrastre.test(ppu);
  }
  transformInPreNumber (ppu) {
    // Reconocer Typo de transformación por tipo de ppu
    let type = ppu.format.type;
    // Convertir dependiendo el formato
    if ('LLL.NNN' === type) {
      let ppuToArray = Array.from(ppu.ppu);
      _.each(ppuToArray, (letter, key) => {
        if (!Number.isInteger(parseInt(letter))) {
          ppuToArray[ key ] = parseInt(_letterDvDb[ letter.toUpperCase() ]);
        } else {
          ppuToArray[ key ] = parseInt(letter);
        }
      });
      return ppuToArray
    }

    if ('LLLL.NN' === type) {
      let ppuToArray = Array.from(ppu.ppu);
      _.each(ppuToArray, (letter, key) => {
        if (!Number.isInteger(parseInt(letter))) {
          ppuToArray[ key ] = parseInt(_letterDvDb[ letter.toUpperCase() ]);
        } else {
          ppuToArray[ key ] = parseInt(letter);
        }
      });
      return ppuToArray
    }

    if ('LL.NNNN' === type) {
      let ppuToArray = Array.from(ppu.ppu);
      let letters ="";
      _.each(ppuToArray, (letter,index) =>{
        if(!Number.isInteger(parseInt(letter))){
          letters += letter;
        } else {
          ppuToArray[index] = parseInt(letter);
        }
      });

      let numberAsString = _letterDvDb[letters];
      _.each(numberAsString,(numberString,index)=>{
        ppuToArray[index] = parseInt(numberString);
      });

      return ppuToArray
    }

  }
}

module.exports = Ppu;
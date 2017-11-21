'use strict';
const _ = require('lodash');
const _variables = require('./variables.json');

class Index{

  constructor(){

  }

  static transformInPreNumber(ppu) {
    // Reconocer Typo de transformación por tipo de ppu
      let type = ppu.format.type;
        if('LLL.NNN' === type){
          // _variables.carroArrastreFormat
        }
    // Cambiar letras por números (transformación) dependiendo tipo de ppu

    // retornar numeros.

  }

  static calculateDV (prePpu) {
  }

}

module.exports = Index;

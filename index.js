'use strict';
const _ = require('lodash');
const _variables = require('./variables.json');
const _letterDvDb = require('./letterDvDB.json');

class Index {

  constructor () {

  }

  static transformInPreNumber (ppu) {
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
      _.each(ppuToArray, (letter, key) => {
        if (!Number.isInteger(parseInt(letter))) {
          ppuToArray[ key ] = _letterDvDb[ letter.toUpperCase() ];
        } else {
          ppuToArray[ key ] = parseInt(letter);
        }
      });
      return ppuToArray
    }

  }

  static calculateDV (prePpu) {
  }

}

module.exports = Index;

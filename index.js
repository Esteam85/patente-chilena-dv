'use strict';

let index = {
  verifyPpuType: (ppu)=>{
    if (ppu.length !== 6 ) {
      throw new Error("La patente(ppu) ingresada es de largo inválido")
    }
    // Ver que tipo de formato PPU, formato nuevo auto, formato viejo auto, viejo moto
  },
  transformInPreNumer:()=>{
  },
  calculateDV: (prePpu)=>{
  }
}
module.exports = index;
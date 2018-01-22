## Patente Chilena Dv
Simple Ppu DV calculator based on Servicio De Registro Civil E Identificación  guide [Instructivo para validación de patentes v 2.0](http://www.srcei.cl/Manuales/ValidacionPatentes.pdf).

Supports 3 Ppu Formats

 - LLLL.NN: 4 letters and 2 numbers like BBBB01 or BBCB01. 
 - LLL.NNN: 3 letters and 3 numbers like BBB010 or BBC099.
 - LL.NNNN: 2 letters and 4 numbers like VF5302 of AA1112.

### Installation

```
$npm install patente-chilena-dv --save
```
### Usage
```
const Ppu = require('patente-chilena-dv');
let myPpu = new Ppu('HWJP59');
console.log(myPpu.dv) // "8"

```

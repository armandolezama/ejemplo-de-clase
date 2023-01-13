//Aquí van a ir las instancias

import Persona from './class.js';

const noel = new Persona('Noel Zamorano :vv', 1.80, 15, 2, 1)

const armando = new Persona('Armando God', 1.80, 10, 10000000, 20)

console.log('hi from index')
armando.medidas()
noel.medidas()

noel.cargarCosa(5)

noel.cargarCosa(12)

noel.cargarCosa(19)

armando.cargarCosa(5)

armando.cargarCosa(12)

armando.cargarCosa(19)
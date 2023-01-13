//Aquí van a ir las instancias

import Persona from './class.js';

const noel = new Persona('Noel Zamorano :vv', 1.80, 15, 2, 1)

const armando = new Persona('Armando God', 1.80, 10, 10000000, 20)

// console.log('hi from index')
// armando.medidas()
// noel.medidas()

// noel.cargarCosa(5)

// noel.cargarCosa(12)

// noel.cargarCosa(19)

// armando.cargarCosa(5)

// armando.cargarCosa(12)

// armando.cargarCosa(19)

const miContenedor = document.querySelector('#el-texto')

const elSeñorBoton = document.querySelector('#el-señor-boton')

console.log(miContenedor.innerHTML)

elSeñorBoton.addEventListener('click', () => {
  miContenedor.innerHTML +=  '<p>Este es otro texto</p>'
})

const myContacts = ['contact 1', 'contact 2', 'contact 3', 'contact 4']

for(const contact of myContacts){
  console.log(contact)
}

const estoEsUnObjetoconTiposDeDatos = {
  estoEsUnNumero: 2034,
  estoEsUnaCadena: 'cadena',
  estoEsUnArreglo: ['soy', {un: 'arreglo'}],
  soyUnObjeto: {
    estoy: 'dentro de otro objeto'
  }
}

console.log(estoEsUnObjetoconTiposDeDatos)

const estoEsOtraConst = {...estoEsUnObjetoconTiposDeDatos};

estoEsUnObjetoconTiposDeDatos.estoEsUnNumero = 1955;

console.log(estoEsOtraConst.estoEsUnNumero)

const unArreglo = ['mira un elemento', 'mira otro elemento']

const copiaDelArreglo = [...unArreglo];

unArreglo[1] = 'no mames'

console.log(copiaDelArreglo[1])

console.log(unArreglo)

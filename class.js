//Aquí van a ir las clases

class Persona {
  constructor(nombre, estatura, fuerza, inteligencia, tamañoDePene){
    this.nombre = nombre;
    this.estatura = estatura;
    this.fuerza = fuerza;
    this.inteligencia = inteligencia;
    this.tamañoDePene = tamañoDePene;
  }

  cargarCosa(pesoDeCosa){
    if(pesoDeCosa > this.fuerza){
      console.log('¿me ayudas a levantar esto?')
    } else {
      console.log('levanté esta chingadera, papu :v')
    }
  }

  resolverProblema(complejidad){
    if(complejidad > this.inteligencia){
      console.log('No le entiendo, toy bien wey')
    } else {
      console.log('entendí esta chingadera, papu :v')
    }
  }

  decirNomber(){
    console.log(`Mi nombre es ${this.nombre}`)
  }

  medidas(){
    console.log(`Mi estatura es: ${this.estatura} y mi pene mide ${this.tamañoDePene}`)
  }
}

export default Persona;
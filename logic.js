/**
 * logic.js
 * 
 * Archivo principal con la lógica de la simulación.
 * 
 * Instituto tecnológico de Costa Rica (TEC).
 * Ingeniería en Computación.
 * Curso de Análisis de Algoritmos.
 * Profesor: Kenneth Obando.
 * Estudiante: Hansol Rostrán.
 */

/**
 * Clase TableroGalton.
 * Representa al tablero o matriz que se utilizará como base para la simulación y cálculo de probabilidades.
 */
class TableroGalton {
  constructor(tamanno, numeroBolas, probDerecho = 0.5, probQuieto = 0.2) {
    this.tamanno = tamanno;
    this.numBolas = numeroBolas;
    this.probQuieto = probQuieto;
    this.tablero = [];
    this.bolas = [];
    this.resultados = [];
    this.probDerecho = probDerecho;
    this.probIzq = (1 - probDerecho);
    this.crearResultados();
    this.crearTablero();
    this.crearPelotas();
  }

  /**
   * Realiza una simulación completa del tablero, calculando las probabilidades de cada pelota y el resultado final.
   */
  simular() {
    console.log([0, Math.floor((this.tamanno + Math.floor(this.tamanno / 1.15)) / 2)]);
    for(let i = 0; i < this.numBolas; i++) {
      while(!this.bolas[i].termino) {
        this.bolas[i].mover();
      }
      console.log(".........................................")
      console.log("Pelota " + i + " termino");
    }
    console.log("finish")
  }

  /**
   * Crea las pelotas que estarán en el tablero.
   */
  crearPelotas() {
    for (let i = 0; i < this.numBolas; i++) {
      this.bolas.push(new Pelota(this, [0, Math.floor((this.tamanno + Math.floor(this.tamanno / 1.15)) / 2)], ("Bola " + i)));
    }
  }

  /**
   * Crea el tablero de la simulación.
   */
  crearTablero() {
    for (let i = 0; i < this.tamanno; i++) {
      this.tablero.push([]);
      for (let j = 0; j < (this.tamanno + (Math.floor(this.tamanno / 1.15)) + 1); j++) {
        this.tablero[i].push(0);
      }
    }
  }

  /**
   * Crea los resultados de la simulación, considerando que el tamaño puede ser dinámico
   * se deben guardar los resultados de cada espacio posible donde caiga la pelota.
   */
  crearResultados() {
    for (let i = 0; i < this.tamanno + (Math.floor(this.tamanno / 1.15) + 1); i++) {
      console.log(i);
      this.resultados.push([i, 0]);
    }
  }

  /**
   * Imprime el tablero generado.
   */
  imprimirTablero() {
    let tablero = "";
    for (let i = 0; i < this.tamanno; i++) {
      for (let j = 0; j < this.tamanno + (Math.floor(this.tamanno / 1.15) + 1); j++) {
        tablero += this.tablero[i][j] + " ";
      }
      tablero += "\n";
    }
    console.log(tablero);
  }
}

/**
 * Clase Pelota.
 * 
 * Representa a una pelota que se moverá en el tablero.
 */
class Pelota {
  constructor(tablero, posicion, etiqueta) {
    this.tablero = tablero;
    this.posicion = posicion;
    this.etiqueta = etiqueta;
    this.termino = false;
  }

  /**
   * Realiza un movimiento de la pelota en el tablero, considerando que la pelota puede caer en cualquier espacio
   * del fondo del mismo.
   */
  mover() {
    if (this.posicion[0] == this.tablero.tamanno - 1) {
      this.termino = true;
      console.log("listo");
      this.tablero.resultados[this.posicion[1]][1]++;
      return;
    }
    let probQuieto = Math.random() * 1;
    if (probQuieto < this.tablero.probQuieto) { /* Que salte de una vez a la linea 87 */}
    else {
      let prob = (Math.random() * 1);
      if (prob < this.tablero.probDerecho) {
        this.posicion[1]++;
      } else {
        this.posicion[1]--;
      }
    }
    this.posicion[0]++;
    console.log("Pos: " + this.posicion);
  }
}
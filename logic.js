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

  crearPelotas() {
    for (let i = 0; i < this.numBolas; i++) {
      this.bolas.push(new Pelota(this, [0, Math.floor((this.tamanno + Math.floor(this.tamanno / 1.15)) / 2)], ("Bola " + i)));
    }
  }

  crearTablero() {
    for (let i = 0; i < this.tamanno; i++) {
      this.tablero.push([]);
      for (let j = 0; j < (this.tamanno + (Math.floor(this.tamanno / 1.15)) + 1); j++) {
        this.tablero[i].push(0);
      }
    }
  }

  crearResultados() {
    for (let i = 0; i < this.tamanno + (Math.floor(this.tamanno / 1.15) + 1); i++) {
      console.log(i);
      this.resultados.push([i, 0]);
    }
  }

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

class Pelota {
  constructor(tablero, posicion, etiqueta) {
    this.tablero = tablero;
    this.posicion = posicion;
    this.etiqueta = etiqueta;
    this.termino = false;
  }

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

// let tab = new TableroGalton(11, 1000);
// tab.imprimirTablero();
// // console.log(Math.floor(tab.tamanno + Math.floor(tab.tamanno / 1.15) + 1) / 2);
// // console.log(tab.bolas[0].posicion);
// console.log(tab.resultados);
// tab.simular();
// console.log(tab.resultados);

// Make 
class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo === "mago") {
      var ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      var ataque = "espada";
    } else if (this.tipo === "monge") {
      var ataque = "artes maciais";
    } else if (this.tipo === "ninja") {
      var ataque = "shuriken";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi = new Hero("Milton", 29, "monge");

console.log(heroi);
// Log to console
console.log(heroi.atacar());

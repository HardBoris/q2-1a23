export class App {
  public message = "Preço Total:";

  fruits = [
    {
      name: "banana",
      color: "yellow",
      price: 2,
    },
    {
      name: "cherry",
      color: "red",
      price: 3,
    },
    {
      name: "strawberry",
      color: "red",
      price: 4,
    },
  ];

  counter = 0;
  lista = this.fruits;
  suma = this.fruits.reduce((a, b) => a + b.price, 0);

  prueba() {
    let lincoln = [];
    lincoln = this.fruits.map((item) => item.color);

    let filtrado = [];
    filtrado = lincoln.filter((item, i) => lincoln.indexOf(item) === i);
    if (this.counter === 3) {
      this.counter = 0;
    }
    this.counter += 1;
    let color = "";
    color = filtrado[this.counter - 1];
    if (color === undefined) {
      this.lista = this.fruits;
    } else {
      this.lista = this.fruits.filter((item) => item.color === color);
    }

    this.suma = this.lista.reduce((a, b) => a + b.price, 0);
  }
}

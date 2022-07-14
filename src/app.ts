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

  suma = this.fruits.reduce((a, b) => a + b.price, 0);
}

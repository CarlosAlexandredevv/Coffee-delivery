type CoffeeData = {
  id: number;
  img: string;
  name: string;
  tags: string[];
  description: string;
  price: number;
}

export const coffeeData: CoffeeData[] = [
  {
    "id": 1,
    "img": "src/assets/coffees/tradicional.png",
    "name": "Expresso Tradicional",
    "tags": ["Tradicional"],
    "description": "O tradicional café feito com água quente e grãos moídos",
    "price": 8.5
  },
  {
    "id": 2,
    "img": "src/assets/coffees/americano.png",
    "name": "Expresso Americano",
    "tags": ["Tradicional"],
    "description": "Expresso diluído, menos intenso que o tradicional",
    "price": 8.0
  },
  {
    "id": 3,
    "img": "src/assets/coffees/cremoso.png",
    "name": "Expresso Cremoso",
    "tags": ["Tradicional"],
    "description": "Café expresso tradicional com espuma cremosa",
    "price": 9.0
  },
  {
    "id": 4,
    "img": "src/assets/coffees/gelado.png",
    "name": "Expresso Gelado",
    "tags": ["Tradicional", "Gelado"],
    "description": "Bebida preparada com café expresso gelado e cubos de gelo",
    "price": 10.0
  },
  {
    "id": 5,
    "img": "src/assets/coffees/leite.png",
    "name": "Café com Leite",
    "tags": ["Tradicional", "Com Leite"],
    "description": "Meia a meia de expresso tradicional com leite vaporizado",
    "price": 9.5
  },
  {
    "id": 6,
    "img": "src/assets/coffees/latte.png",
    "name": "Latte",
    "tags": ["Tradicional", "Com Leite"],
    "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "price": 10.5
  },
  {
    "id": 7,
    "img": "src/assets/coffees/capuccino.png",
    "name": "Capuccino",
    "tags": ["Tradicional", "Com Leite"],
    "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
    "price": 11.0
  },
  {
    "id": 8,
    "img": "src/assets/coffees/macchiato.png",
    "name": "Macchiato",
    "tags": ["Tradicional", "Com Leite"],
    "description": "Café expresso misturado com um pouco de leite quente e espuma",
    "price": 9.5
  },
  {
    "id": 9,
    "img": "src/assets/coffees/mocaccino.png",
    "name": "Mocaccino",
    "tags": ["Tradicional", "Com Leite"],
    "description": "Café expresso com calda de chocolate, pouco leite e espuma",
    "price": 10.0
  },
  {
    "id": 10,
    "img": "src/assets/coffees/chocolate.png",
    "name": "Chocolate Quente",
    "tags": ["Especial", "Com Leite"],
    "description": "Bebida feita com chocolate dissolvido no leite quente e café",
    "price": 12.0
  },
  {
    "id": 11,
    "img": "src/assets/coffees/cubano.png",
    "name": "Cubano",
    "tags": ["Especial", "Alcoólico", "Gelado"],
    "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
    "price": 13.0
  },
  {
    "id": 12,
    "img": "src/assets/coffees/havaiano.png",
    "name": "Havaiano",
    "tags": ["Especial"],
    "description": "Bebida adocicada preparada com café e leite de coco",
    "price": 11.5
  },
  {
    "id": 13,
    "img": "src/assets/coffees/arabe.png",
    "name": "Árabe",
    "tags": ["Especial"],
    "description": "Bebida preparada com grãos de café árabe e especiarias",
    "price": 12.5
  },
  {
    "id": 14,
    "img": "src/assets/coffees/irlandes.png",
    "name": "Irlandês",
    "tags": ["Especial", "Alcoólico"],
    "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "price": 14.0
  }
];
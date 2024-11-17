import tradicional from "../../../../../assets/coffees/tradicional.png";
import americano from "../../../../../assets/coffees/americano.png";
import cremoso from "../../../../../assets/coffees/cremoso.png";
import gelado from "../../../../../assets/coffees/gelado.png";
import leite from "../../../../../assets/coffees/leite.png";
import latte from "../../../../../assets/coffees/latte.png";
import capuccino from "../../../../../assets/coffees/capuccino.png";
import macchiato from "../../../../../assets/coffees/macchiato.png";
import mocaccino from "../../../../../assets/coffees/mocaccino.png";
import chocolate from "../../../../../assets/coffees/chocolate.png";
import cubano from "../../../../../assets/coffees/cubano.png";
import havaiano from "../../../../../assets/coffees/havaiano.png";
import arabe from "../../../../../assets/coffees/arabe.png";
import irlandes from "../../../../../assets/coffees/irlandes.png";

type CoffeeData = {
  id: number;
  img: string;
  name: string;
  tags: string[];
  description: string;
  price: number;
};

export const coffeeData: CoffeeData[] = [
  {
    id: 1,
    img: tradicional,
    name: "Expresso Tradicional",
    tags: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 8.5,
  },
  {
    id: 2,
    img: americano,
    name: "Expresso Americano",
    tags: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 8.0,
  },
  {
    id: 3,
    img: cremoso,
    name: "Expresso Cremoso",
    tags: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.0,
  },
  {
    id: 4,
    img: gelado,
    name: "Expresso Gelado",
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso gelado e cubos de gelo",
    price: 10.0,
  },
  {
    id: 5,
    img: leite,
    name: "Café com Leite",
    tags: ["Tradicional", "Com Leite"],
    description: "Meia a meia de expresso tradicional com leite vaporizado",
    price: 9.5,
  },
  {
    id: 6,
    img: latte,
    name: "Latte",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 10.5,
  },
  {
    id: 7,
    img: capuccino,
    name: "Capuccino",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 11.0,
  },
  {
    id: 8,
    img: macchiato,
    name: "Macchiato",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.5,
  },
  {
    id: 9,
    img: mocaccino,
    name: "Mocaccino",
    tags: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 10.0,
  },
  {
    id: 10,
    img: chocolate,
    name: "Chocolate Quente",
    tags: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 12.0,
  },
  {
    id: 11,
    img: cubano,
    name: "Cubano",
    tags: ["Especial", "Alcoólico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 13.0,
  },
  {
    id: 12,
    img: havaiano,
    name: "Havaiano",
    tags: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 11.5,
  },
  {
    id: 13,
    img: arabe,
    name: "Árabe",
    tags: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 12.5,
  },
  {
    id: 14,
    img: irlandes,
    name: "Irlandês",
    tags: ["Especial", "Alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 14.0,
  },
];

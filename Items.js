import Picture from "./image.jpg";

export const data = [
  {
    id: "11a",
    denumire: "Produs1",
    poza: Picture,
    um: "grame",
    gramaj: 150,
    stocMeu: 3,
    stocDep: 10
  },
  {
    id: "11s",
    denumire: "Produs2",
    poza: Picture,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11b",
    denumire: "Produs3",
    poza: Picture,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11g",
    denumire: "Produs4",
    poza: Picture,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11e",
    denumire: "Produs5",
    poza: Picture,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f",
    denumire: "Produs6",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f333",
    denumire: "Produs7",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f3233",
    denumire: "Produs8",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f32312313",
    denumire: "Produs9",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f3000",
    denumire: "Produs10",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f22112",
    denumire: "Produs11",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  },
  {
    id: "11f320991",
    denumire: "Produs12",
    poza: null,
    um: "grame",
    gramaj: 100,
    stocMeu: 2,
    stocDep: 1
  }
];

export const items = data.reduce(
  (items, item) => ({
    ...items,
    [item.id]: item
  }),
  {}
);

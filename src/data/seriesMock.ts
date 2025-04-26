import { Serie } from '../types';

export const seriesMock: Serie[] = [
  {
    id: 1,
    nombre: "Stranger Things",
    idGenero: 1,
    resenia: "Un grupo de amigos se enfrenta a fuerzas sobrenaturales en su pequeño pueblo.",
    horasVisualizacion: 125000000,
    cartelera: "/images/series/stranger-things.jpg"
  },
  {
    id: 2,
    nombre: "The Crown",
    idGenero: 2,
    resenia: "La vida de la reina Isabel II y los eventos que dieron forma al siglo XX.",
    horasVisualizacion: 98000000,
    cartelera: "/images/series/the-crown.jpg"
  },
  {
    id: 3,
    nombre: "The Witcher",
    idGenero: 3,
    resenia: "Un cazador de monstruos mutante viaja por su tierra natal luchando contra bestias y personas.",
    horasVisualizacion: 110000000,
    cartelera: "/images/series/the-witcher.jpg"
  }
];

export const generosMock = [
  {
    id: 1,
    nombre: "Ciencia Ficción"
  },
  {
    id: 2,
    nombre: "Drama"
  },
  {
    id: 3,
    nombre: "Fantasía"
  }
]; 
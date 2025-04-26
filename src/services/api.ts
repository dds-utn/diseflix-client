import axios from 'axios';
import { Serie, Genero } from '../types';
import { seriesMock, generosMock } from '../data/seriesMock';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export const getSeries = async (): Promise<Serie[]> => {
  try {
    const response = await axios.get(`${API_URL}/series`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener series, usando datos de prueba:', error);
    return seriesMock;
  }
};

export const getGeneros = async (): Promise<Genero[]> => {
  try {
    const response = await axios.get(`${API_URL}/generos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener géneros, usando datos de prueba:', error);
    return generosMock;
  }
}; 
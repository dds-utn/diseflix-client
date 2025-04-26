'use client';

import { useState, useEffect } from 'react';
import { Serie, Genero } from '../types';
import { getSeries, getGeneros } from '../services/api';
import { SerieCard } from '../components/SerieCard';
import { GeneroFilter } from '../components/GeneroFilter';

export default function Home() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [seriesData, generosData] = await Promise.all([
          getSeries(),
          getGeneros()
        ]);
        setSeries(seriesData);
        setGeneros(generosData);
      } catch (err) {
        setError('Error al cargar los datos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const seriesFiltradas = generoSeleccionado !== null
    ? series.filter(serie => serie.idGenero === generoSeleccionado)
    : series;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-red-600 mb-8">DiseFlix</h1>
      
      <GeneroFilter
        generos={generos}
        generoSeleccionado={generoSeleccionado}
        onGeneroChange={setGeneroSeleccionado}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seriesFiltradas.map(serie => (
          <SerieCard
            key={serie.id}
            serie={serie}
            generoNombre={generos.find(g => g.id === serie.idGenero)?.nombre || 'Desconocido'}
          />
        ))}
      </div>
    </main>
  );
}

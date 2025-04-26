import { Serie } from '../types';
import { ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SerieCardProps {
  serie: Serie;
  generoNombre: string;
}

export const SerieCard = ({ serie, generoNombre }: SerieCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={serie.cartelera}
          alt={serie.nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{serie.nombre}</h3>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
          {generoNombre}
        </span>
        <p className="text-gray-600 mb-4">{serie.resenia}</p>
        <div className="flex items-center text-gray-500">
          <ClockIcon className="h-5 w-5 mr-2" />
          <span>{(serie.horasVisualizacion / 1000000).toFixed(1)}M horas vistas</span>
        </div>
      </div>
    </div>
  );
}; 
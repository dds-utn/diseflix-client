import { Genero } from '../types';

interface GeneroFilterProps {
  generos: Genero[];
  generoSeleccionado: number | null;
  onGeneroChange: (generoId: number | null) => void;
}

export const GeneroFilter = ({ generos, generoSeleccionado, onGeneroChange }: GeneroFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onGeneroChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${generoSeleccionado === null 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Todos
        </button>
        {generos.map((genero) => (
          <button
            key={genero.id}
            onClick={() => onGeneroChange(genero.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${generoSeleccionado === genero.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {genero.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}; 
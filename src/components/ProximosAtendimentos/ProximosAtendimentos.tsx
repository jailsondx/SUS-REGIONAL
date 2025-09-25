import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProximosAtendimentos.css';
import formatarData from '../../utils/formatarData';

interface Atendimento {
  consulta_id: number;
  data_consulta: string;
  hora_consulta: string;
  especialidade_id: string;
  especialidade_nome?: string;
  local_id?: string;
  local_nome?: string;
  local_endereco?: string;
}

const ProximosAtendimentos = () => {
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const URL_API = import.meta.env.VITE_API_URL; // Substitua pelo caminho correto da sua API

  useEffect(() => {
    const fetchAtendimentos = async () => {
      try {
        const response = await axios.get(`${URL_API}/Consultas`);
        // Aqui assumimos que a resposta será uma lista de consultas
        setAtendimentos(response.data);
        setLoading(false);
      } catch {
        setError('Erro ao carregar os atendimentos.');
        setLoading(false);
      }
    };

    fetchAtendimentos();
  }, []); // A requisição será feita uma vez, logo que o componente for montado

  return (
    <div className="proximos-atendimentos">
      <h2>Próximos Atendimentos</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : atendimentos.length > 0 ? (
        <ul className="atendimentos-list">


          {atendimentos.map((atendimento) => (
            <li key={atendimento.consulta_id} className="atendimento-item">
              <div className='div-icon-consultas'>
                <img src='/imgs/sinal-do-hospital.png' className='icon-consultas'></img>
              </div>

              <div>
                <p><strong>Data:</strong> {formatarData(atendimento.data_consulta)}</p>
                <p><strong>Horário:</strong> {atendimento.hora_consulta}</p>
                <p><strong>Especialidade:</strong> {atendimento.especialidade_nome || 'Não informada'}</p>
                <p><strong>Local:</strong> {atendimento.local_nome || 'Não informado'}</p>
                <p><strong>Endereço:</strong> {atendimento.local_endereco || 'Não informado'}</p>
              </div>

            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum atendimento agendado.</p>
      )}
    </div>
  );
};

export default ProximosAtendimentos;
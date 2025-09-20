import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NovoAtendimento.css';

const NovoAtendimento = () => {
  const [formData, setFormData] = useState({
    id_usuario: 1, // Substitua pelo ID real do usuário logado
    data: '',
    horario: '',
    local: '',
    especialidade: '',
  });
  const [locais, setLocais] = useState<{ id: number; nome_local: string }[]>([]);
  const [especialidades, setEspecialidades] = useState<{ id: number; tipo_especialidade: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL_API = import.meta.env.VITE_API_URL; // Substitua pela URL real da sua API no Railway


  const fetchLocais = async () => {
    try {
      const response = await axios.get(`${URL_API}/locaisAtendimento`);
      setLocais(response.data); // Assume que o backend retorna um array de objetos { id, nome }
      setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Erro ao carregar os locais');
      } else {
        //setError('Erro ao carregar os locais');
      }
      setLoading(false);
    }
  };

  const fetchEspecialidades = async () => {
    try {
      const response = await axios.get(`${URL_API}/Especialidades`);
      setEspecialidades(response.data); // Assume que o backend retorna um array de objetos { id, nome }
      setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Erro ao carregar as especialidades');
      } else {
        //setError('Erro ao carregar os locais');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocais();
    fetchEspecialidades();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Enviar os dados do formulário ao backend
      await axios.post(`${URL_API}/NovoAtendimento`, formData);
      console.log('Dados do agendamento:', formData);
      alert('Agendamento enviado com sucesso!');
      // Resetar o formulário após envio
      setFormData({
        id_usuario: 1, // Substitua pelo ID real do usuário logado
        data: '',
        horario: '',
        local: '',
        especialidade: '',
      });
    } catch (err) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error || 'Erro ao enviar o agendamento');
      } else {
        alert('Erro ao enviar o agendamento');
      }
    }
  };

  return (
    <div className="novo-atendimento">
      <h2>Marcar Novo Atendimento</h2>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <form onSubmit={handleSubmit} className="atendimento-form">
          <div className="form-group">
            <label htmlFor="data">Data:</label>
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="horario">Horário:</label>
            <input
              type="time"
              id="horario"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="local">Local:</label>
            <select
              id="local"
              name="local"
              value={formData.local}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecione um local
              </option>
              {locais.map((local) => (
                <option key={local.id} value={local.nome_local}>
                  {local.nome_local}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="especialidade">Especialidade:</label>
            <select
              id="especialidade"
              name="especialidade"
              value={formData.especialidade}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecione uma especialidade
              </option>
              {especialidades.map((especialidade) => (
                <option key={especialidade.id} value={especialidade.tipo_especialidade}>
                  {especialidade.tipo_especialidade}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">Agendar</button>
        </form>
      )}
    </div>
  );
};

export default NovoAtendimento;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NovoAtendimento.css';

const NovoAtendimento = () => {
  const [formData, setFormData] = useState({
    data: '',
    hora: '',
    local: '',
    especialidade: '',
  });
  const [locais, setLocais] = useState<{ id: number; nome_local: string }[]>([]);
  const [especialidades, setEspecialidades] = useState<{ id: number; tipo_especialidade: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string[]>([]); // Alterado para array de strings

  const URL_API = import.meta.env.VITE_API_URL;

  // Função para adicionar uma nova mensagem de erro
  const addError = (message: string) => {
    setError((prevErrors) => [...prevErrors, message]);
  };

  // Função para limpar erros (opcional)
  const clearErrors = () => {
    setError([]);
  };

  // Funções para buscar locais e especialidades
  const fetchLocais = async () => {
    try {
      const response = await axios.get(`${URL_API}/locaisAtendimento`);
      setLocais(response.data);
    } catch {
      addError('Erro ao carregar os locais'); // Usa addError em vez de setError
    } finally {
      setLoading(false);
    }
  };

  const fetchEspecialidades = async () => {
    try {
      const response = await axios.get(`${URL_API}/Especialidades`);
      setEspecialidades(response.data);
    } catch {
      addError('Erro ao carregar as especialidades'); // Usa addError em vez de setError
    } finally {
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
    clearErrors(); // Limpa erros anteriores antes de tentar enviar

    const localSelecionado = locais.find((local) => local.nome_local === formData.local);
    const especialidadeSelecionada = especialidades.find(
      (especialidade) => especialidade.tipo_especialidade === formData.especialidade
    );

    if (!localSelecionado || !especialidadeSelecionada) {
      addError('Selecione um local e uma especialidade válidos!');
      return;
    }

    const dadosParaEnviar = {
      ...formData,
      local: localSelecionado.id,
      especialidade: especialidadeSelecionada.id,
    };

    try {
      await axios.post(`${URL_API}/NovoAtendimento`, dadosParaEnviar);
      alert('Agendamento de consulta solicitada com sucesso!');
      setFormData({
        data: '',
        hora: '',
        local: '',
        especialidade: '',
      });
    } catch (err) {
      console.error(err);
      addError('Erro ao enviar o agendamento');
    }
  };

  return (
    <div className="novo-atendimento">
      <h2>Marcar Novo Atendimento</h2>
      {error.length > 0 && (
        <div className="error-messages">
          {error.map((err, index) => (
            <p key={index} className="error-message">
              {err}
            </p>
          ))}
        </div>
      )}
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
            <label htmlFor="hora">Horário:</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={formData.hora}
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
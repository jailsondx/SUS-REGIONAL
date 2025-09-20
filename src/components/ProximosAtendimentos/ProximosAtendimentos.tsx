import './ProximosAtendimentos.css';

const ProximosAtendimentos = () => {
  // Dados fictícios para demonstração
  const atendimentos = [
    { id: 1, data: '2025-09-25', horario: '10:00', medico: 'Dr. João Silva', especialidade: 'Cardiologia' },
    { id: 2, data: '2025-09-26', horario: '14:30', medico: 'Dra. Maria Souza', especialidade: 'Dermatologia' },
  ];

  return (
    <div className="proximos-atendimentos">
      <h2>Próximos Atendimentos</h2>
      {atendimentos.length > 0 ? (
        <ul className="atendimentos-list">
          {atendimentos.map((atendimento) => (
            <li key={atendimento.id} className="atendimento-item">
              <p><strong>Data:</strong> {atendimento.data}</p>
              <p><strong>Horário:</strong> {atendimento.horario}</p>
              <p><strong>Médico:</strong> {atendimento.medico}</p>
              <p><strong>Especialidade:</strong> {atendimento.especialidade}</p>
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
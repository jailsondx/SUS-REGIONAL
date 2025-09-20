import './VisualizarTratamentos.css';

const VisualizarTratamentos = () => {
  // Dados fictícios para demonstração
  const tratamentos = [
    { id: 1, nome: 'Fisioterapia', inicio: '2025-09-01', medico: 'Dr. Carlos Lima', progresso: '60%' },
    { id: 2, nome: 'Terapia Ocupacional', inicio: '2025-09-10', medico: 'Dra. Ana Costa', progresso: '30%' },
  ];

  return (
    <div className="visualizar-tratamentos">
      <h2>Visualizar Tratamentos</h2>
      {tratamentos.length > 0 ? (
        <ul className="tratamentos-list">
          {tratamentos.map((tratamento) => (
            <li key={tratamento.id} className="tratamento-item">
              <p><strong>Nome:</strong> {tratamento.nome}</p>
              <p><strong>Início:</strong> {tratamento.inicio}</p>
              <p><strong>Médico:</strong> {tratamento.medico}</p>
              <p><strong>Progresso:</strong> {tratamento.progresso}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum tratamento registrado.</p>
      )}
    </div>
  );
};

export default VisualizarTratamentos;
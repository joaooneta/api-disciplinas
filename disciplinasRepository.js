const { v4: uuidv4 } = require("uuid");

const disciplinas = [
  {
    id: uuidv4(),
    nome: "Desenvolvimento Front-End",
    cargaHoraria: 10,
    obrigatoria: true,
  },
  {
    id: uuidv4(),
    nome: "Desenvolvimento Back-End",
    cargaHoraria: 20,
    obrigatoria: false,
  },
  {
    id: uuidv4(),
    nome: "Design de Interfaces",
    cargaHoraria: 30,
    obrigatoria: true,
  },
  {
    id: uuidv4(),
    nome: "APIs RESTful",
    cargaHoraria: 40,
    obrigatoria: false,
  },
];

function listar(nome) {
  if (nome) {
    const disciplinasFiltradas = disciplinas.filter((d) =>
      d.nome.toLowerCase().includes(nome.toLowerCase())
    );

    return disciplinasFiltradas;
  }

  return disciplinas;
}

function consultar(id) {
  return disciplinas.find((d) => d.id === id);
}

function adicionar(disciplina) {
  const novaDisciplina = { id: uuidv4(), ...disciplina };
  disciplinas.push(novaDisciplina);

  return novaDisciplina;
}

function atualizar(id, disciplinaAtualizada) {
  const i = disciplinas.findIndex((d) => d.id === id);
  if (i === -1) return null;

  disciplinas[i] = { ...disciplinas[i], ...disciplinaAtualizada };

  return disciplinas[i];
}

function remover(id) {
  const i = disciplinas.findIndex((d) => d.id === id);
  if (i === -1) return null;

  const disciplinaRemovida = disciplinas[i];

  disciplinas.splice(i, 1);

  return disciplinaRemovida;
}

module.exports = {
  listar,
  consultar,
  adicionar,
  atualizar,
  remover,
};

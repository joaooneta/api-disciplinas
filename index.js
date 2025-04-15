const express = require("express");
const app = express();
const porta = 3000;

const repo = require("./disciplinasRepository");

app.use(express.json());

app.get("/disciplinas", (req, res) => {
  const { nome } = req.query;
  const resultado = repo.listar(nome);

  res.json(resultado);
});

app.get("/disciplinas/:id", (req, res) => {
  const disciplina = repo.consultar(req.params.id);

  if (!disciplina)
    return res.status(404).json({ mensagem: "Disciplina não encontrada!" });

  res.json(disciplina);
});

app.post("/disciplinas", (req, res) => {
  const novaDisciplina = repo.adicionar(req.body);

  res.status(201).json(novaDisciplina);
});

app.put("/disciplinas/:id", (req, res) => {
  const disciplinaAtualizada = repo.atualizar(req.params.id, req.body);

  if (!disciplinaAtualizada)
    return res.status(404).json({ mensagem: "Disciplina não encontrada!" });

  res.json(disciplinaAtualizada);
});

app.delete("/disciplinas/:id", (req, res) => {
  const disciplinaRemovida = repo.remover(req.params.id);

  if (!disciplinaRemovida)
    return res.status(404).json({ mensagem: "Disciplina não encontrada!" });

  res.json(disciplinaRemovida);
});

app.listen(porta, () => {
  console.log("Rodando...");
});

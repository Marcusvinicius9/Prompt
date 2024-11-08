const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Para lidar com JSON no corpo da requisição

// Rota para processar o prompt
app.post("/processar-prompt", (req, res) => {
  const prompt = req.body.prompt;
  const resposta = `Você enviou o prompt: ${prompt}`;
  res.json({ resposta }); // Envia a resposta de volta como JSON
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

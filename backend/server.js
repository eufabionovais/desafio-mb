const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.post('/registration', (req, res) => {
  const { email, type, details, password } = req.body;
  if (!email || !type || !details || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
  }
  return res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});

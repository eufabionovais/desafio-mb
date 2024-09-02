const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors())
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.post('/registration', (req, res) => {


  const { type } = req.body;

  let conditionalParameters;
  let returnObject = {}

  if(type === 'pf') {
    const {email, type, name, cpf, birthDate, phone, password} = req.body;
    conditionalParameters = {email, type, name, cpf, birthDate, phone, password}
    returnObject = {
      "Nome": name,
      "E-mail": email,
      "Tipo": "Pessoa física",
      "CPF": cpf,
      "Nascimento": birthDate,
      "Telefone": phone
    }
  }

  if(type === 'pj') {
    const {companyName, cnpj, email, openingDate, phone, password} = req.body;
    conditionalParameters = {companyName, email, cnpj, openingDate, phone, password}
    returnObject = {
      "Razão Social": companyName,
      "E-mail": email,
      "Tipo": "Pessoa jurídica",
      "CNPJ": cnpj,
      "Abertura": openingDate,
      "Telefone": phone
    }
  }
  
  const allFieldsAreFilled = validateFields(conditionalParameters);

  if(allFieldsAreFilled) {
    return res.status(200).json({ message: 'Cadastro realizado com sucesso!', data: returnObject });
  } else {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios! Houve um erro ao cadastrar o usuário.' });
  }  
  
});

const validateFields = (fields) => {
  return Object.values(fields).every((value) => {
    return value && value.trim() !== ''
  })
}

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});

import express from 'express';
import './database/connection';
import routes from './routes';
const app = express();
app.use(express.json());
app.use(routes);

/*
Metodos HTTP
GET = Lista dados
POST = Cria dados
PUT = Atualiza dados
DELETE = Deleta dados

Query Params = http://localhost:3002/users?busca=gabriel Utilizado para busca, parâmetros adicionais
Route Params = http://localhost:3002/users/1 Identificar um recurso específico, ex: Editar algum usuário
Body = http://localhost:3002/users (Identifica um recurso) geralmente utilizado em formulários
*/

app.listen(3002); 
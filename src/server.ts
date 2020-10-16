import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')));
app.use(errorHandler);

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
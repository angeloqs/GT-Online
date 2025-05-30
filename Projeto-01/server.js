// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar arquivos estáticos
app.use(express.static('public'));

// Configurar view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota principal - Landing Page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Minha Landing Page',
        message: 'Bem-vindo à nossa página!'
    });
});

// Rota sobre (exemplo de página que existe)
app.get('/sobre', (req, res) => {
    res.render('sobre', {
        title: 'Sobre Nós',
        message: 'Conheça nossa história'
    });
});

// Rota contato (exemplo de página que existe)
app.get('/contato', (req, res) => {
    res.render('contato', {
        title: 'Entre em Contato',
        message: 'Fale conosco'
    });
});

// Middleware para capturar rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Página Não Encontrada',
        message: 'A página que você está procurando não existe.'
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
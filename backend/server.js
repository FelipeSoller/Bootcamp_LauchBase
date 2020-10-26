const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express:server
});

server.get('/', function(require, response) {
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/62728038?s=400&u=0901764d6f0e877dd57621cc0b6aa65d399a9ffb&v=4",
        name: "Felipe Soller",
        role: "Desenvolvedor Web Júnior",
        description: "Engenheiro Mecânico migrando para área de Desenvolvimento Web Front End criando aplicativos web visualmente atrativos e de fácil usabilidade, utilizando HTML, CSS, JavaScript e Node.JS. Habilidade técnica em estilização e design de aplicativos web, criação de sites interativos, desenvolvimento back-end e desenvolvimento orientado a testes com JavaScript, criação de aplicativos front-end com React, SQL e bancos de dados para desenvolvimento web, criação de API. Capacidade de trabalhar sob pressão, prazer em aprender novas habilidades, pensamento crítico, criativo e resolutivo em problemas, rápida adaptação a mudanças, boa comunicação como emissor e ouvinte, responsável em todas as tarefas e gestão de tempo. Atualmente cursando o Bootcamp LaunchBase da Rocketseat.",

    }

    return response.render('about', { about });
});

server.get('/courses', function(require, response) {
    return response.render('courses', { items: videos });
});


server.listen(3000, function() {
    console.log('server is running');
});
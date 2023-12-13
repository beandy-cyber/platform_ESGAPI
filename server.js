const express = require('express');
const cors = require('cors'); // Importe o pacote CORS
const app = express();
const PORT = 3000;

// Use o middleware do CORS antes das rotas
app.use(cors());

app.get('/articles', (req, res) => {
  const articles = [
	{ id: 1, title: 'Sustentabilidade Ambiental', content: 'Preservar o planeta é nossa responsabilidade coletiva. Adotar energias renováveis e reduzir resíduos são passos vitais para um futuro sustentável' },
	{ id: 2, title: 'Responsabilidade Social', content: 'A inclusão e diversidade fortalecem nossas comunidades e empresas. Juntos, podemos criar ambientes mais justos e acolhedores' },
	{ id: 3, title: 'Governança Corporativa', content: 'Ética nos negócios é a base de uma governança sólida. Transparência e conformidade são pilares para confiança e crescimento sustentável' },
	{ id: 4, title: 'Tecnologia e Inovação Sustentável', content: 'A tecnologia pode ser a chave para soluções sustentáveis. Inovações inteligentes impulsionam o caminho para um futuro mais verde' },
	{ id: 5, title: 'Educação e Conscientização', content: 'Educar para mudança. A conscientização é o primeiro passo para construir um mundo mais consciente e comprometido com o futuro.' },
  ];
  
  setTimeout(() => {
    res.json(articles);
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

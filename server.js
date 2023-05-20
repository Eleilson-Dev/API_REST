import app from './app';

const port = 3002;

app.listen(port, () => {
  console.log();
  console.log(`server rodando na porta ${port}`);
  console.log(`CTRL + click http://localhost:${port}`);
});

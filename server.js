import app from './app';

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log();
  console.log(`http://localhost:${port}`);
  console.log();
});

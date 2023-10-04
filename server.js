import express from 'express';
import console from 'console';
const PORT = 3000;
const app = express();

app.use(express.static('./dist'));
app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});

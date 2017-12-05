import log from 'winston';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.static('client/html'));
app.use(express.static('client/build'));

app.listen(PORT, () => {
    log.info('Hello from the server');
    log.info(`Visit app at http://localhost:${PORT}`);
});

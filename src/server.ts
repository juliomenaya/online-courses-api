import express from 'express';
import compression from 'compression';
import { createServer } from 'http';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
    res.send('Welcome to online academy API')
});

const httpServer = createServer(app);
const PORT = 5200;

httpServer.listen(
    {
        port: PORT
    },
    () => console.log(`Server running at: http://localhost:${PORT}`)
);


import express from 'express';
import compression from 'compression';
import { createServer } from 'http';
import cors from 'cors';
import expressPlayGround from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const app = express();

app.use(cors());
app.use(compression());

const apolloServer = new ApolloServer({
    schema,
    introspection: true
});

apolloServer.applyMiddleware( { app });

app.get('/', expressPlayGround({
    endpoint: '/graphql'
}));

const httpServer = createServer(app);
const PORT = 5200;

httpServer.listen(
    {
        port: PORT
    },
    () => console.log(`Server running at: http://localhost:${PORT}/graphql`)
);


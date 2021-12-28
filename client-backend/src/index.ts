import Hapi, { Request, Server } from '@hapi/hapi';

const init = async () => {
  const server: Server = Hapi.server({
    port: 5001,
    host: '0.0.0.0',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request: Request) => {
      return 'Hello from client-backend!';
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

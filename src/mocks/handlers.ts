import { rest } from 'msw';

const clients = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

export const handlers = [
  rest.get('/api/clients', (req, res, ctx) => {
    return res(ctx.json(clients));
  }),

  rest.post('/api/clients', (req, res, ctx) => {
    const newClient = req.body;
    clients.push(newClient);
    return res(ctx.status(201));
  }),
];

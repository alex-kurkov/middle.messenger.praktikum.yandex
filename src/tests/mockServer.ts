import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BASE_URL } from 'services/api/base-api';

const handlers = [
  rest.post(`${BASE_URL}/logout`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mode: req.mode,
        method: req.method,
        credentials: req.credentials,
      })
    );
  }),
  
  rest.get(`${BASE_URL}/user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        searchParamsWere: req.url.search,
      })
    );
  }),
];

export const server = setupServer(...handlers);

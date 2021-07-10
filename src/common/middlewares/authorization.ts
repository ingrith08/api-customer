import jwt from 'jsonwebtoken';
import { Middleware } from 'koa';
import config from '../../config';

const authorization: Middleware<Record<string, unknown>> = async (ctx, next) => {
  const token = ctx.request.headers.authorization?.split(' ')[1] || ctx.request.query.jwt || '';

  try {
    const payload = jwt.verify(token as string, config.jwtSecret);
    ctx.state.session = payload as Record<string, unknown>;
  } catch (err) {
    ctx.throw(401, err.message);
  }
  await next();
};
export default authorization;

import { Middleware } from 'koa';

const errorMiddleWare: Middleware<Record<string, unknown>> = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const error: Error = err;
    ctx.response.status = err.statusCode || 500;

    ctx.response.body = {
      name: error.name,
      message: error.message,
    };
  }
};

export default errorMiddleWare;

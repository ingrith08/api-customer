import Router from 'koa-router';

const router = new Router();

router.get('/healtcheck', async (ctx) => {
  ctx.status = 200;
  ctx.body = 'ok';
});

export default router;

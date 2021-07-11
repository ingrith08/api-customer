import Router from 'koa-router';
import customer from './controllers/customer';
import authorization from './common/middlewares/authorization';

const router = new Router();

router.get('/healtcheck', async (ctx) => {
  ctx.status = 200;
  ctx.body = 'ok';
});

router.get('/customers/:id', authorization, customer.findOne);
router.post('/customers', authorization, customer.create);
router.post('/login', authorization, customer.login);

export default router;

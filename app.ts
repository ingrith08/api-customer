import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import loggerKoa from 'koa-logger';
import cors from 'koa2-cors';
import helmet from 'koa-helmet';
import router from './src/router';
import errorMiddleWare from './src/common/middlewares/error';

const app = new koa();

app.use(cors());
app.use(loggerKoa());
app.use(bodyparser());
app.use(helmet());
app.use(errorMiddleWare);

app.use(router.routes());

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on ${process.env.PORT || 3000}`);
})

export default app;
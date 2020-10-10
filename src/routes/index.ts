import Router from '@koa/router';
const routes = new Router();

routes.get('/', ctx => {
    ctx.body = 'Hello World! \nCurrent Date : ' + Date();
});

export default routes;
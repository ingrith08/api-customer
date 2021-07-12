import { DefaultContext } from 'koa';
import CryptoJS from 'crypto-js';
import Customer from '../repositories/Customer';
import config from '../config';

const create = async (ctx: DefaultContext) => {
  const customer = await Customer.create(ctx.request.body);
  ctx.status = 201;
  ctx.body = customer;
};

const findOne = async (ctx: DefaultContext) => {
  const customer = await Customer.findOne({ _id: ctx.params.id });

  if (!customer) {
    ctx.throw(404, 'customer not found');
  }

  ctx.status = 200;
  ctx.body = customer;
};

const login = async (ctx: DefaultContext) => {
  const { request: { body: payload } } = ctx;
  const { userName } = payload;
  const password = CryptoJS.AES.decrypt(payload.password, config.cryptojs).toString(CryptoJS.enc.Utf8);

  const customer = await Customer.find({ lastName: userName, _id: password });

  if (customer.length === 0) {
    ctx.throw(404, 'customer not found');
  }

  ctx.status = 200;
  ctx.body = {
    isLogin: true,
  };
};

export default {
  create,
  findOne,
  login,
};

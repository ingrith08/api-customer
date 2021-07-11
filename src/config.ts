export default {
  dbUri: process.env.MONGO_URI || 'mongodb://localhost:27017/dev',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  cryptojs: process.env.CRYPTOJS_KEY || 'fkGdB89dRAQolRnb1Amh',
};

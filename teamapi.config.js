module.exports = {
  apps:[
    name      : 'teamapi',
    script    : 'src/server.js',
    env: {
      DB_HOST: 'localhost',
      DB_PASS: '',
      DB_USER: 'root',
      DB_NAME: 'teamApi',
      DB_SCHEMA: 'mysql',
      DB_PORT: 3306
    },
    env_production : {
      NODE_ENV: 'production'
    }
  ]
}

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'crumbs.mysql.tools'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'crumbs_senderostrapi'),
      user: env('DATABASE_USERNAME', 'crumbs_senderostrapi'),
      password: env('DATABASE_PASSWORD', '%9+fmY3cV7'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfko6ela49903fh2r12g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'projetoviagemapidb'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'bYV1O3v8Qw90fk4oOc4ujcydTyToosve'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

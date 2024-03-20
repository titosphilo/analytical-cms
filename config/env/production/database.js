module.exports = ({ env }) => {
  const host = env("DATABASE_HOST");
  const port = env("DATABASE_PORT"); 
  const database = env("DATABASE_NAME"); 
  const user = env("DATABASE_USERNAME"); 
  const password = env("DATABASE_PASSWORD");
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};

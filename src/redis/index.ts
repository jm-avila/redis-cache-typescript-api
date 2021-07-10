import redis from 'redis';

const { REDIS_URL } = process.env;

if (!REDIS_URL) throw 'Missing mandatory environment variable.';

const client = redis.createClient(REDIS_URL);

export default client || null;

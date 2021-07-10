import { RedisClient } from 'redis';
import { CacheEngine } from './interface';

class RedisCacheEngine implements CacheEngine {
    private engine;
    private ttl;

    constructor(instance: RedisClient, ttl: number) {
        this.engine = instance;
        this.ttl = ttl;
    }

    async save(key: string, value: string): Promise<boolean> {
        return await this.engine.setex(key, this.ttl, value);
    }

    async get(key: string): Promise<string | null> {
        try {
            const promise: string | null = await new Promise((_, resolve) => {
                this.engine.get(key, (err, data) => {
                    if (err) throw err;
                    resolve(data);
                });
            });
            return promise;
        } catch (error) {
            return null;
        }
    }

    async delete(key: string): Promise<void> {
        return;
    }

    async deleteAll(key: string): Promise<void> {
        return;
    }
}

export default RedisCacheEngine;

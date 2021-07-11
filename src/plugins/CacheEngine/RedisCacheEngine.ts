import { RedisClient } from 'redis';
import { CacheEngine } from './interface';

class RedisCacheEngine implements CacheEngine {
    private engine;
    private ttl;

    constructor(instance: RedisClient, ttl: number) {
        this.engine = instance;
        this.ttl = ttl;
    }

    async getOrSave(key: string, cb: () => Promise<string>, ttl: number = this.ttl): Promise<string> {
        const cachedData = await this.get(key);
        if (cachedData) return cachedData;

        const fetchedData = await cb();
        await this.save(key, fetchedData, ttl);
        return fetchedData;
    }

    async save(key: string, value: string, ttl: number = this.ttl): Promise<boolean> {
        return await this.engine.setex(key, ttl, value);
    }

    async get(key: string): Promise<string | null> {
        try {
            const promise: string | null = await new Promise((resolve, reject) => {
                this.engine.get(key, (error, data) => {
                    if (error) reject(error);
                    resolve(data);
                });
            });
            return promise;
        } catch (error) {
            return null;
        }
    }

    async delete(key: string): Promise<boolean> {
        return this.engine.del(key);
    }

    async deleteAll(): Promise<boolean> {
        return this.engine.flushall();
    }
}

export default RedisCacheEngine;

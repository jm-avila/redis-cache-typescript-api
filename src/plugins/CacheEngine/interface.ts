export interface CacheEngine {
    getOrSave(key: string, cb: () => Promise<string>): Promise<string>;
    save(key: string, value: string): Promise<boolean>;
    get(key: string): Promise<string | null>;
    delete(key: string): Promise<boolean>;
    deleteAll(): Promise<boolean>;
}

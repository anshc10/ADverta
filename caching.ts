// Advanced caching system
export class CacheManager {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private maxSize: number = 1000;
  private ttl: number = 5 * 60 * 1000; // 5 minutes

  set(key: string, value: any): void {
    if (this.cache.size >= this.maxSize) {
      const oldestKey = [...this.cache.entries()]
        .sort(([, a], [, b]) => a.timestamp - b.timestamp)[0][0];
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, { data: value, timestamp: Date.now() });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const globalCache = new CacheManager();
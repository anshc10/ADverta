// Load balancer for handling high traffic
export class LoadBalancer {
  private requestQueue: Array<() => Promise<any>> = [];
  private maxConcurrent: number = 50;
  private activeRequests: number = 0;

  async addRequest(request: () => Promise<any>): Promise<any> {
    if (this.activeRequests >= this.maxConcurrent) {
      await new Promise(resolve => this.requestQueue.push(() => {
        resolve(null);
        return request();
      }));
    }

    this.activeRequests++;
    try {
      return await request();
    } finally {
      this.activeRequests--;
      if (this.requestQueue.length > 0) {
        const nextRequest = this.requestQueue.shift();
        if (nextRequest) nextRequest();
      }
    }
  }

  getQueueLength(): number {
    return this.requestQueue.length;
  }

  getActiveRequests(): number {
    return this.activeRequests;
  }
}

export const globalLoadBalancer = new LoadBalancer();
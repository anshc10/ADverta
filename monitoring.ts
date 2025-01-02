// Performance monitoring system
export class PerformanceMonitor {
  private metrics: {
    responseTime: number[];
    errorRate: number;
    requestCount: number;
  } = {
    responseTime: [],
    errorRate: 0,
    requestCount: 0
  };

  trackRequest(duration: number, success: boolean): void {
    this.metrics.responseTime.push(duration);
    this.metrics.requestCount++;
    if (!success) this.metrics.errorRate++;

    // Keep only last 1000 response times
    if (this.metrics.responseTime.length > 1000) {
      this.metrics.responseTime.shift();
    }

    this.checkThresholds();
  }

  private checkThresholds(): void {
    const avgResponseTime = this.getAverageResponseTime();
    const errorRate = this.getErrorRate();

    if (avgResponseTime > 1800) { // 1.8 seconds
      console.warn('High average response time:', avgResponseTime);
    }

    if (errorRate > 0.05) { // 5% error rate
      console.warn('High error rate:', errorRate);
    }
  }

  getAverageResponseTime(): number {
    return this.metrics.responseTime.reduce((a, b) => a + b, 0) / this.metrics.responseTime.length;
  }

  getErrorRate(): number {
    return this.metrics.errorRate / this.metrics.requestCount;
  }
}

export const globalPerformanceMonitor = new PerformanceMonitor();
import { API_CONFIG } from '../config';

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getData<T>(
    endpoint: string,
    params: Record<string, string> = {}
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);

    Object.entries(params).forEach(([key, value]) => {
      if (value.trim()) url.searchParams.set(key, value.trim());
    });

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Resource not found - Status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }
}

export const apiService = new ApiService(API_CONFIG.BASE_URL);

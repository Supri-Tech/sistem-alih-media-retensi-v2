import { env } from '$env/dynamic/public';

class ClientServerAPI {
  constructor() {
    this.baseUrl = env.API_BASE_URL || '';
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || 'Request failed');
    }

    return res.json();
  }

  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  getById(endpoint, id) {
    return this.get(`${endpoint}/${id}`);
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }

  put(endpoint, id, body) {
    return this.request(`${endpoint}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }

  delete(endpoint, id) {
    return this.request(`${endpoint}/${id}`, {
      method: 'DELETE'
    });
  }
}

export const clientServerApi = new ClientServerAPI();

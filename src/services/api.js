import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptor para agregar token JWT si existe en localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('barber_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Endpoints Helpers
export const loyaltyAPI = {
  checkHealth: () => api.get('/healthcheck'),
  getClientByQR: (token) => api.get(`/loyalty/clients/${token}`),
  createClient: (data) => api.post('/loyalty/clients', data),
  addStamp: (stampData) => api.post('/loyalty/stamps', stampData),
  login: (credentials) => api.post('/auth/login', credentials),
};

export default api;

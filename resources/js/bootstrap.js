import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Configurar baseURL desde el meta tag
const baseURL = document.querySelector('meta[name="app-url"]')?.getAttribute('content') || '';
window.axios.defaults.baseURL = baseURL;
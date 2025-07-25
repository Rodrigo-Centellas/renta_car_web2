import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Configurar baseURL desde el meta tag
const baseURL = document.querySelector('meta[name="app-url"]')?.getAttribute('content') || '';
if (baseURL) {
    window.axios.defaults.baseURL = baseURL;
    console.log('Base URL configurada:', baseURL); // Para debug
}
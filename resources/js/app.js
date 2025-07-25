import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import '../css/utilidades.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// Configurar Inertia para usar la URL base correcta
import { router } from '@inertiajs/vue3';

// Obtener la URL base del meta tag
const baseURL = document.querySelector('meta[name="app-url"]')?.getAttribute('content') || '';
if (baseURL) {
    // Configurar interceptor para todas las peticiones de Inertia
    router.on('before', (event) => {
        if (event.detail.visit.url.startsWith('/') && !event.detail.visit.url.startsWith(baseURL)) {
            event.detail.visit.url = baseURL + event.detail.visit.url;
        }
    });
}
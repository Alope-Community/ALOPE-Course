import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import LoadingOverlay from './Components/LoadingOverlay'; // Import komponen spinner

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <LoadingOverlay />
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 2000,
                    }}
                />
                <App {...props} />
            </>,
        );
    },
    progress: {
        color: '#2276f0',
        showSpinner: true,
    },
});

import '../../css/loader.css';

import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const LoadingOverlay = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => setLoading(true);
        const finish = () => setTimeout(() => setLoading(false), 500);

        router.on('start', start);
        router.on('finish', finish);

        return () => {
            router.on('start', start);
            router.on('finish', finish);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5">
            {/* <div className="loader"></div> */}
        </div>
    );
};

export default LoadingOverlay;

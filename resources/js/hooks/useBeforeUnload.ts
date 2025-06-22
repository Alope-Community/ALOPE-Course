import { useEffect } from 'react';
import { router } from '@inertiajs/react';

const usePreventLeave = (shouldWarn: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!shouldWarn) return;
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    const cancelInertiaNavigation = router.on('before', (event) => {
      if (!shouldWarn) return;
      const confirmed = window.confirm(
        'Kamu yakin ingin meninggalkan halaman ini? Perubahan belum disimpan.'
      );
      if (!confirmed) {
        event.preventDefault();
      }
    });

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      cancelInertiaNavigation();
    };
  }, [shouldWarn]);
};

export default usePreventLeave;

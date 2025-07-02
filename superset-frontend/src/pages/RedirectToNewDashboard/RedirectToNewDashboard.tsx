import { useEffect } from 'react';

export default function RedirectToNewDashboard() {
  useEffect(() => {
    window.location.href = '/dashboard/new/';
  }, []);

  return null;
}

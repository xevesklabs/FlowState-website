import { useState, useEffect } from 'react';
import { endpoints } from '../lib/api.js';

/**
 * Fetches the total Windows download count from flowstate-api.
 * Returns { count, loading, error }.
 * Silently fails — if the API is offline, count stays null and no UI error is shown.
 */
export function useDownloadCount() {
  const [count, setCount]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchCount = async () => {
      try {
        const res = await fetch(endpoints.stats);
        if (!res.ok) throw new Error('API returned non-200');
        const data = await res.json();
        if (!cancelled) setCount(data.totalDownloads ?? null);
      } catch (err) {
        // Silently swallow — the download button still works without this
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCount();
    return () => { cancelled = true; };
  }, []);

  return { count, loading, error };
}

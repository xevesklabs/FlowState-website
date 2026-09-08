// API configuration
// Set VITE_API_URL in your .env file when flowstate-api is deployed.
// e.g. VITE_API_URL=https://your-api.onrender.com
// TODO: Replace localhost:5000 with your deployed flowstate-api URL

export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const endpoints = {
  downloadWindows: `${API_BASE}/api/downloads/windows`,
  downloadMac:     `${API_BASE}/api/downloads/mac`,
  downloadLinux:   `${API_BASE}/api/downloads/linux`,
  telemetryPing:   `${API_BASE}/api/telemetry/ping`,
  stats:           `${API_BASE}/api/stats`,
};

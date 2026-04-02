import { getMockResponse } from "./mockApi";

// CRA (React-scripts) development'ta `src/setupProxy.js` ile `/api` proxylenir,
// ancak production build'te bu mekanizma çalışmaz. Bu yüzden base URL'i
// gerçek API host'u yapıyoruz (Vercel'de env ile override edilebilir).
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://fakestoreapi.com";

export async function fetchJson(path) {
    try {
        const response = await fetch(`${API_BASE_URL}${path}`);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return response.json();
    } catch (error) {
        const fallbackData = getMockResponse(path);

        if (fallbackData !== null) {
            return fallbackData;
        }

        throw error;
    }
}

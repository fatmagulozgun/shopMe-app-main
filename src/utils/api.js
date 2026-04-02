import { getMockResponse } from "./mockApi";

const API_BASE_URL = "/api";

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

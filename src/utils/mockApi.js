import { mockProducts } from "../data/mockProducts";

const categories = [...new Set(mockProducts.map((product) => product.category))];

function decodeCategory(value = "") {
    return decodeURIComponent(value);
}

export function getMockResponse(path) {
    if (path === "/products") {
        return mockProducts;
    }

    if (path === "/products/categories") {
        return categories;
    }

    if (path.startsWith("/products/category/")) {
        const category = decodeCategory(path.replace("/products/category/", ""));
        return mockProducts.filter((product) => product.category === category);
    }

    if (path.startsWith("/products/")) {
        const id = Number(path.replace("/products/", ""));
        return mockProducts.find((product) => product.id === id) ?? null;
    }

    return null;
}

export function formatPrice(value) {
    return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        maximumFractionDigits: 0,
    }).format(value ?? 0);
}

export function formatCategory(value) {
    if (value === null || value === undefined) return "";

    const raw = String(value);
    const key = raw.toLowerCase();

    const map = {
        "electronics": "Elektronik",
        "men's clothing": "Erkek Giyim",
        "women's clothing": "Kadın Giyim",
        "jewelery": "Takı",
        "jewelry": "Takı",
    };

    return map[key] ?? raw;
}

const BASE_URL = "https://www.adocurinha.com";

export default function sitemap() {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/brigadeiros`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/naked-cakes`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];
}

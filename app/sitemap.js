export default function sitemap() {
  const baseUrl = "https://www.thedailygrind.example";
  return ["", "/about", "/menu", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}

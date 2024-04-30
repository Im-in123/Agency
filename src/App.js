import React from "react";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Services.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/Footer.css";
import Router from "./Router";
import { LIVE_URL } from "./constants/constant";

const generateSitemap = () => {
  const pages = ["/", "/home", "/services", "/contact", "/about"];
  const baseUrl = LIVE_URL;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <changefreq>weekly</changefreq>
            </url>
          `;
        })
        .join("")}
    </urlset>`;
  console.log(sitemap);
  return sitemap;
};

function App() {
  generateSitemap();
  return (
    <>
      <Router />
    </>
  );
}

export default App;

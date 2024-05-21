// Dynamically generate a sitemap (if needed)
function generateSitemap() {
    const sitemap = `
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.wildanakpn.xyz/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>https://www.linkedin.com/in/wildanakpn/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>1.00</priority>
        </url>
        <!-- Add more URLs for other pages -->
    </urlset>
    `;
    return sitemap;
}

// Save the sitemap to the server or serve it dynamically

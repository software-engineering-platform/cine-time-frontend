import createNextIntlPlugin from "next-intl/plugin";

// ✅ JSON üzerinden i18n yüklemek için request.js kullanıyoruz
const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

export default withNextIntl({
  sassOptions: {
    quietDeps: true,
  },
  reactStrictMode: true,
  output: 'standalone', // Enable standalone mode for smaller Docker images

  async rewrites() {
    return [
      {
        source: "/osm-overpass",
        destination: "https://overpass-api.de/api/interpreter",
      },
    ];
  },

  async redirects() {
    return [];
  },
});

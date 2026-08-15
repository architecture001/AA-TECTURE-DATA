Create a complete production-ready service-worker.js for my "AA-TECTURE DATA" PWA.

Requirements:
- Cache the main application files
- Cache index.html
- Cache manifest.json
- Cache important CSS and JavaScript files if they exist
- Support offline loading
- Use cache-first strategy for static assets
- Use network-first strategy for dynamic/API requests
- Never cache sensitive user information, wallet balances, payment information or transaction responses
- Automatically remove old caches when a new version is deployed
- Handle install, activate and fetch events correctly
- Make the service worker work on GitHub Pages
- Do not break API requests
- Do not expose secret keys
- Return the complete service-worker.js code only.

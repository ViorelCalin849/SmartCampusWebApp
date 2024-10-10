import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define paths for the certificate files
const certFilePath = path.join(__dirname, 'certificates', 'smartcampusreact.pem');
const keyFilePath = path.join(__dirname, 'certificates', 'smartcampusreact.key');

// Export the Vite configuration
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '^/weatherforecast': {
                target: 'https://localhost:7111', // Adjust based on your backend service URL
                secure: false,
            },
        },
        port: 5173,
        https: {
            key: fs.readFileSync(keyFilePath), // Read the key file
            cert: fs.readFileSync(certFilePath), // Read the certificate file
        },
    },
});

import { defineConfig } from 'vite';

// const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default defineConfig({
    root: 'src/',
    publicDir: '../static/',
    base: '/',
    server:
    {
        host: true,
        open: true // Open if it's not a CodeSandbo
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
});
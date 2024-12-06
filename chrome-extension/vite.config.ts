import { resolve } from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';
import { watchRebuildPlugin } from '@univer-clipsheet/hmr';
import makeManifestPlugin from './utils/plugins/make-manifest-plugin';

const rootDir = resolve(__dirname);
const libDir = resolve(rootDir, 'src');

const isDev = process.env.__DEV__ === 'true';
const isProduction = !isDev;

const outDir = resolve(rootDir, '..', 'dist');
export default defineConfig({
    resolve: {
        alias: {
            '@root': rootDir,
            '@lib': libDir,
            '@assets': resolve(libDir, 'assets'),
        },
    },
    plugins: [
        libAssetsPlugin({
            outputPath: outDir,
        }),
        makeManifestPlugin({ outDir }),
        isDev && watchRebuildPlugin({ reload: true }),
    ],
    publicDir: resolve(rootDir, 'public'),
    build: {
        lib: {
            formats: ['iife'],
            entry: resolve(__dirname, 'lib/background/index.ts'),
            name: 'BackgroundScript',
            fileName: 'background',
        },
        outDir,
        sourcemap: isDev,
        minify: isProduction,
        reportCompressedSize: isProduction,
        modulePreload: true,
        rollupOptions: {
            external: ['chrome'],
        },
    },
});

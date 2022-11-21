import { defineConfig } from "vite";
import { resolve } from "path";
// import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import { searchForWorkspaceRoot } from "vite";

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
    server: {
        port: 9999,
        fs: {
            strict: false,
            allow: [searchForWorkspaceRoot(process.cwd()), '..']
        }
    },
    // 路径重定向
    resolve: {
        alias: [
            {
                find: "@/*",
                replacement: pathResolve("./docs/*"),
            }
        ]
    },
    plugins: [
        vueJsx()
    ],
});


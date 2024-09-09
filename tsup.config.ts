import { defineConfig } from "tsup";
import http from "http";
import fs from "fs";
import path from "path";
import { join } from "path";
import globby from "globby";
const { esmPlugin } = require("./plugin.esm");

export default defineConfig(async (options) => {
  const isDev = options.watch;
  const entryPoints = await globby([
    `${join(process.cwd(), "src")}/**/*.(t|j)s?(x)`,
    `!${join(process.cwd(), "src")}/**/*.d.ts`,
  ]);

  return {
    // entry: entryPoints,
    // // format: ["esm", "cjs"],
    // format: ["esm"],
    // // dts: true,
    // // minify: !isDev,
    // bundle: true,
    // external: [
    //   "react",
    //   "react/jsx-runtime",
    //   "react-dom",
    //   "framer",
    //   "framer-motion",
    // ],
    // plugins: [esmPlugin],
    entryPoints,
    // splitting: false,
    // minify: true,
    // format: "cjs",
    // format: "esm",
    // outExtension: () => ".js",
    // polyfillNode: false,
    // bundle: true,
    external: [
      "react",
      "react/jsx-runtime",
      "react-dom",
      "framer",
      "framer-motion",
      // "socket.io-client",
      // "engine.io-parser",
    ],
    format: ["esm"], // Output format to be ESModule (similar to the second build)
    target: "esnext", // Use the latest JavaScript features for modern browsers
    splitting: false, // Disable code splitting for a single output bundle
    sourcemap: false, // Disable source maps for production builds
    clean: true, // Clean the output directory before each build
    // external: ["socket.io-client", "engine.io-parser"], // Mark these as external to avoid bundling them
    dts: true, // Generate .d.ts declaration files (if needed)
    // minify: true, // Minify the output for production
    treeshake: true, // Enable tree-shaking to remove unused code
    esbuildOptions(options) {
      options.define = {
        "process.env.NODE_ENV": '"production"', // Ensure it's set to production mode
      };
    },
    async onSuccess() {
      if (!isDev) return;

      // Create the HTTP server
      const server = http.createServer((req, res) => {
        // Construct the file path
        let filePath = path.join(
          __dirname,
          "dist",
          req.url === "/" ? "index.html" : req.url
        );
        let extname = String(path.extname(filePath)).toLowerCase();

        // Map file extensions to Content-Type
        const mimeTypes = {
          ".js": "text/javascript",
          ".mjs": "application/javascript",
          ".css": "text/css",
          ".html": "text/html",
        };

        let contentType = mimeTypes[extname] || "application/octet-stream";

        // Set CORS headers
        res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust as necessary for security

        // Check if the file exists and serve it, otherwise serve a 404 page
        fs.readFile(filePath, (error, content) => {
          if (error) {
            if (error.code === "ENOENT") {
              // File not found
              res.writeHead(404, { "Content-Type": "text/html" });
              res.end("<h1>404 Not Found</h1>", "utf-8");
            } else {
              // Some server error
              res.writeHead(500);
              res.end(`Server error: ${error.code}`, "utf-8");
            }
          } else {
            // If no error, serve the file
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
          }
        });
      });
      server.listen(8000);
      return () => {
        server.close();
      };
    },
  };
});

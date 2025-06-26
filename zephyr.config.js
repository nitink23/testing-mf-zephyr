module.exports = {
  // Plugin configuration
  plugin: {
    name: "testing-mf-zephyr",
    version: "0.0.1",
    description: "A Module Federation plugin with remote components",
    entry: "./src/index.ts",
    exposes: {
      "./RemoteButton": "./src/components/RemoteButton.tsx",
      "./RemoteCard": "./src/components/RemoteCard.tsx",
      "./components": "./src/components/index.ts",
    },
  },
  
  // Build configuration
  build: {
    output: "./dist",
    publicPath: "auto",
  },
  
  // Deployment configuration
  deploy: {
    // Zephyr Cloud deployment settings
    cloud: {
      region: "us-east-1", // or your preferred region
      environment: "production",
    },
  },
}; 
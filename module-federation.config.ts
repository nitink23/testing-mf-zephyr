export const mfConfig = {
  name: "testing_mf_zephyr",
  exposes: {
    "./RemoteButton": "./src/components/RemoteButton.tsx",
    "./RemoteCard": "./src/components/RemoteCard.tsx",
    "./components": "./src/components/index.ts",
  },
  shared: ["react", "react-dom"],
};

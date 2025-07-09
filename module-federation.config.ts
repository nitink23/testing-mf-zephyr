export const mfConfig = {
  filename: "remoteEntry.js",
  name: "testing_mf_zephyr",
  exposes: {
    "./RemoteButton": "./src/components/RemoteButton.tsx",
    "./RemoteCard": "./src/components/RemoteCard.tsx",
    "./components": "./src/components/index.ts",
    "./TicTacToe": "./src/components/TicTacToe.tsx",
  },
  shared: {
    "react": {
      singleton: true,
      requiredVersion: "19.1.0",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "19.1.0",
    },
  },
};

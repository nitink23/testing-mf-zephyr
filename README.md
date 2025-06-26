# testing-mf-zephyr

A Module Federation plugin for Zephyr Cloud that exposes reusable React components.

## Features

- **RemoteButton**: A customizable button component with multiple variants and sizes
- **RemoteCard**: A flexible card component for displaying content
- **Module Federation**: Components can be consumed by other applications
- **Zephyr Cloud Integration**: Ready for deployment to Zephyr Cloud

## Components

### RemoteButton
A versatile button component with the following props:
- `text`: Button text (default: "Click me")
- `variant`: "primary" | "secondary" | "danger" (default: "primary")
- `size`: "small" | "medium" | "large" (default: "medium")
- `onClick`: Click handler function
- `disabled`: Boolean to disable the button
- `className`: Additional CSS classes

### RemoteCard
A card component for displaying content with the following props:
- `title`: Card title
- `subtitle`: Card subtitle
- `children`: Card content
- `variant`: "default" | "elevated" | "outlined" (default: "default")
- `className`: Additional CSS classes
- `headerClassName`: CSS classes for the header
- `bodyClassName`: CSS classes for the body

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm start
```

3. Build for production:
```bash
pnpm run build
```

## Deploying to Zephyr Cloud

### Prerequisites
- Zephyr CLI installed and configured
- Zephyr Cloud account set up
- Proper authentication configured

### Deployment Steps

1. **Build the plugin**:
```bash
pnpm run zephyr:build
```

2. **Deploy to Zephyr Cloud**:
```bash
pnpm run zephyr:deploy
```

3. **Or build and deploy in one command**:
```bash
pnpm run zephyr:build:deploy
```

### Configuration

The plugin is configured via `zephyr.config.js` with the following settings:
- Plugin metadata (name, version, description)
- Build configuration
- Deployment settings
- Module Federation configuration

## Consuming the Plugin

Other applications can consume these components using Module Federation:

```typescript
// In the consuming application's module federation config
remotes: {
  testing_mf_zephyr: "testing_mf_zephyr@http://your-zephyr-url/remoteEntry.js"
}

// In a React component
import { RemoteButton, RemoteCard } from "testing_mf_zephyr/components";

function MyComponent() {
  return (
    <RemoteCard title="My Card">
      <RemoteButton text="Click me" variant="primary" />
    </RemoteCard>
  );
}
```

## Development

- The plugin uses Rspack for bundling
- Tailwind CSS for styling
- TypeScript for type safety
- Module Federation for component sharing

## Troubleshooting

1. **Build fails**: Make sure all dependencies are installed
2. **Deployment fails**: Check Zephyr CLI configuration and authentication
3. **Components not loading**: Verify the remote URL and Module Federation configuration

## License

MIT
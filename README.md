# React Human Loader

A human-friendly adaptive loading system for React.

This library provides intelligent skeleton loaders and adaptive loading messages that change depending on loading duration.

## Features

- Skeleton loader
- Adaptive loading messages
- Loading time classification
- Theme system
- Dark mode support
- Lightweight
- React and Next.js compatible

## Installation

### npm

```bash
npm install react-human-loader
```

### yarn

```bash
yarn add react-human-loader
```

## Usage

### Basic Skeleton

```tsx
import { Skeleton } from "react-human-loader";

function Example() {
  return <Skeleton height={20} />;
}
```

### Adaptive Loader

```tsx
import { AdaptiveLoader } from "react-human-loader";

function Page() {
  return <AdaptiveLoader />;
}
```

### Theme Provider

```tsx
import { ThemeProvider } from "react-human-loader";

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

## License

MIT

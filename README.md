# framer-tsup-esm

For better code experiences in the [Framer](https://www.framer.com/) Canvas.

Supports:

- TypeScript
- React
- ESM hosting (powered by Github Workflows and Github Pages)

Future plans:

- Support hot module reloading

## Github Setups

1. Settings > Actions > General > Workflow permissions > Read and write permissions
2. Settings > Pages > Source > Branch: `pages`

## Framer Project Example

https://framer.com/projects/framer-tsup-esm--lLG7BjQ9yVi8xMvGbgIT-iYZXI

```tsx
import { Button as ImportedComponent } from "http://127.0.0.1:8000/index.mjs";
import { useRealtimeComponent } from "http://127.0.0.1:8000/utils/live-reload/useRealtimeComponent.mjs";
import { useTailwind } from "./Utils.tsx";
import { addPropertyControls } from "framer";

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export function ButtonLive(props) {
  useTailwind();

  const Component = useRealtimeComponent(ImportedComponent, "Button");

  return <Component {...props} />;
}

addPropertyControls(ButtonLive, ImportedComponent.propertyControls || {});
```

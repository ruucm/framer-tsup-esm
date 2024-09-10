import * as React from 'react';

declare const isDev: boolean;
declare function useRealtimeComponent(originalComponent: React.ComponentType, componentName: string): any;

export { isDev, useRealtimeComponent };

export { Button } from './Button.js';
import { ControlType } from 'framer';
import 'react';

declare const hey = "2";

declare function Box(): any;

declare function Counter({ targetDate, slotLeft, suffix, }: {
    targetDate?: string;
    slotLeft: any;
    suffix: any;
}): any;
declare namespace Counter {
    var propertyControls: {
        targetDate: {
            type: ControlType;
            defaultValue: string;
        };
        slotLeft: {
            type: ControlType;
            defaultValue: string;
        };
        suffix: {
            type: ControlType;
            defaultValue: string;
        };
    };
}

export { Box, Counter, hey };

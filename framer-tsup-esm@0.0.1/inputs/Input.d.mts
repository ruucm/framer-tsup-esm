import { ControlType } from 'framer';

declare function Input({ placeholder }: {
    placeholder: any;
}): any;
declare namespace Input {
    var propertyControls: {
        placeholder: {
            type: ControlType;
            defaultValue: string;
        };
    };
}

export { Input };

import * as React from 'react';
import { PropertyControls } from 'framer';

interface Props {
    title: string;
}
type ButtonComponent = React.FC<Props> & {
    propertyControls: typeof propertyControls;
};
declare const Button: ButtonComponent;
declare const propertyControls: PropertyControls<Props>;

export { Button };

import * as React from "react";
import { ControlType, PropertyControls } from "framer";

interface Props {
  title: string;
}

type ButtonComponent = React.FC<Props> & {
  propertyControls: typeof propertyControls;
};

export const Button: ButtonComponent = (props) => {
  return (
    <button className="bg-violet-700 p-6 text-green-200 font-bold text-2xl rounded-sm">
      {props.title}
    </button>
  );
};

const propertyControls: PropertyControls<Props> = {
  title: {
    type: ControlType.String,
    defaultValue: "Hello World",
  },
};

Button.propertyControls = propertyControls;

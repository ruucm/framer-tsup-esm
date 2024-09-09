import * as React from "react";
import { ControlType } from "framer";

interface Props {
  title: string;
}

const InnerButton: React.FC<Props> = (props) => {
  return (
    <button className="bg-blue-700 p-3 text-green-200 font-bold text-xl rounded-sm">
      {props.title}
    </button>
  );
};

export const Button = InnerButton;

// @ts-ignore
Button.propertyControls = {
  title: {
    type: ControlType.String,
    defaultValue: "Hello World",
  },
};

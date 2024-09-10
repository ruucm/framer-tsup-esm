import { ControlType } from "framer";

export function Input({ placeholder }) {
  return <input placeholder={placeholder} />;
}

Input.propertyControls = {
  placeholder: {
    type: ControlType.String,
    defaultValue: "Your name",
  },
};

import { ControlType } from "framer";

export function Input({ placeholder }) {
  return <input placeholder={placeholder} className="border p-2" />;
}

Input.propertyControls = {
  placeholder: {
    type: ControlType.String,
    defaultValue: "Your name",
  },
};

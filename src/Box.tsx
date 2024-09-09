import Example from "https://framer.com/m/framer/Example.js@^1.0.0";

export function Box() {
  console.log("Example", Example);
  return (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: "red" }}>Box</div>
      <Example />
    </>
  );
}

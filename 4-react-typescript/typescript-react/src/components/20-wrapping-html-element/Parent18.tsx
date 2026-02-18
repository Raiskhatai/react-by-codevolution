import Button from "../20-wrapping-html-element/button";

const Parent18 = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log("clicked")}>
        primary button
      </Button>
    </div>
  );
};

export default Parent18;

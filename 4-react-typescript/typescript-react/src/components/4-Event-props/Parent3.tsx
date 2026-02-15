import Button from "./Button";
import Input from "./Input";

const Parent3 = () => {
  return (
    <div>
      <Button
        id={21}
        ClickHandlder={(event) => {
          console.log("hello hi", event);
        }}
      />

      <Input
        changeHandler={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default Parent3;

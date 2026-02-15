import ArrayOfObject2way from "./ArrayOfObject2way";

const Parent5 = () => {
  let arrayObj = [
    { first: "shahrukh", second: "khan" },
    { first: "salman", second: "khan" },
    { first: "aamir", second: "khan" },
  ];
  return (
    <div>
      <ArrayOfObject2way names={arrayObj} />
    </div>
  );
};

export default Parent5;

import BasicProps from "./BasicProps";
import PersonList from "./PersonList";

const Parent1 = () => {
  const personName = {
    first: "shahrukh",
    last: "khan",
  };

  const nameList = [
    {
      first: "shahrukh",
      second: "khan",
    },
    {
      first: "salman",
      second: "khan",
    },
    {
      first: "aamir",
      second: "khan",
    },
  ];
  return (
    <div>
      <BasicProps name={personName} />
      <PersonList  names={nameList} />
    </div>
  );
};

export default Parent1;

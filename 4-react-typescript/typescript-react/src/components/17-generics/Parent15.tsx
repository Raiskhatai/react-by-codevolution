import List from "./List";

const Parent15 = () => {
  return (
    <div>
      {/* <List
        items={["batman", "superman", "wonder woman"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} /> */}

      <List
        items={[
          { first: "shahrukh", second: "khan" },
          { first: "salman", second: "khan" },
          { first: "aamir", second: "khan" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};

export default Parent15;

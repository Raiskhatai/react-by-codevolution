type propsList = {
  names: { first: string; second: string }[];
};

const PersonList = (props: propsList) => {
  console.log(props);
  return (
    <div>
      {props.names.map((item, idx) => {
        return <h1 key={idx}>{item.first} {item.second}</h1>;
      })}
    </div>
  );
};

export default PersonList;

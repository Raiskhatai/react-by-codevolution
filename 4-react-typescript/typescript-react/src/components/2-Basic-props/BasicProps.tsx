type PropsType = {
  name: {
    first: string;
    last: string;
  };
};
const BasicProps = (props: PropsType) => {
  return <div>
    {props.name.first} {props.name.last}
  </div>;
};

export default BasicProps;

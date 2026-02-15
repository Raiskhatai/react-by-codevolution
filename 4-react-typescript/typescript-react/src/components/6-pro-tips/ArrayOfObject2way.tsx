import type { PersonProp } from "./ExportingType";

const ArrayOfObject2way = ({ names }: PersonProp) => {
  console.log(names);
  return (
    <div>
      {names.map((item, i) => {
        return (
          <h1 key={i}>
            {item.first} {item.second}
          </h1>
        );
      })}
    </div>
  );
};

export default ArrayOfObject2way;

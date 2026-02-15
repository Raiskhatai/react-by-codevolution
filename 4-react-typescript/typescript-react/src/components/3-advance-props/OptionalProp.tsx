type OptionalProp = {
  name: string;
  id: number;
  attandence?: number;
};

const Optional = ({ name, id, attandence }: OptionalProp) => {
  return (
    <div>
      {name} <br />
      {id} <br />
      {attandence ? attandence : 0}
    </div>
  );
};

export default Optional;

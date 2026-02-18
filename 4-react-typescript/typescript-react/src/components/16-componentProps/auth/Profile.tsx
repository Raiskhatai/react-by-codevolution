export type PrivateProp = {
  name: string;
};

export const Profile = ({ name }: PrivateProp) => {
  return <div>Private profile component, name is {name}</div>;
};

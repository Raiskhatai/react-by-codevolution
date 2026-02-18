import type { Greet } from "../1-Greet/Greet";

export const Parent19 = (props: React.ComponentProps<typeof Greet>) => {
  return (<div>{props.name}</div>);
};

export default Parent19;

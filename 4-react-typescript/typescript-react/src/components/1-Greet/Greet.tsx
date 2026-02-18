// type bata rha geetProps ek type hey jese number ek type hey. to GreetProps object hona chahiye or uske name-ka type string hona chahiye or age honi chahiye age ka type number hona chahiye .
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

export const Greet = (props: GreetProps) => {
  // const { messageCount = 0 } = props;
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `wellcome mr-${props.name} you have ${props.messageCount} unread messages`
          : "wellcome guest"}
      </h1>
    </div>
  );
};

// export default Greet;

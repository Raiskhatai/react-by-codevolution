// type bata rha geetProps ek type hey jese number ek type hey. to greetProps object hona chahiye or uske name-ka type string hona chahiye or age honi chahiye age ka type number hona chahiye .
type greetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: greetProps) => {
  console.log(props);
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

export default Greet;

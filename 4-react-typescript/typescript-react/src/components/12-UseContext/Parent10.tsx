import { useContext } from "react";
import { UserContext } from "./ThemeContext";

const Parent10 = () => {
  const theme = useContext(UserContext);
  return (
    <div style={{ backgroundColor: theme.primary.main }}>
      hi
      <div style={{ backgroundColor: theme.secondry.main }}>hello</div>
    </div>
  );
};

export default Parent10;

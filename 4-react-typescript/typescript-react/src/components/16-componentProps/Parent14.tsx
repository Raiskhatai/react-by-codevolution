import { Private } from "./auth/Private";
import { Profile } from "./auth/Profile";

const Parent14 = () => {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
};

export default Parent14;

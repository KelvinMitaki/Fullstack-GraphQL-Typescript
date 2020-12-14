import React from "react";
import { User } from "./Header";
import requireAuth from "./requireAuth";
interface Props {
  data: { user?: User } | undefined;
}
const HomePage: React.FC<Props> = props => {
  return <div>Root component</div>;
};

export default requireAuth(HomePage);

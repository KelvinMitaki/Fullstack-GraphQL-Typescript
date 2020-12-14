import React from "react";
import { Redirect } from "react-router-dom";
import { User } from "./Header";

interface Props {
  data: { user?: User } | undefined;
}

const requireAuth = (WrappedComponent: React.FC<Props>) => {
  const Component: React.FC<Props> = props => {
    if (!props.data) {
      return <div>Loading...</div>;
    }
    if (props.data && !props.data.user) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };
  return Component;
};

export default requireAuth;

import React from "react";

const requireAuth = (WrappedComponent: React.FC) => {
  const Component: React.FC = props => {
    return <WrappedComponent {...props} />;
  };
  return Component;
};

export default requireAuth;

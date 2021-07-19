import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const ShowMore = ({ children }: IProps) => {
  const [shown, setShown] = React.useState(false);
  return (
    <>
      {shown && children}
      <button onClick={() => setShown(!shown)}>
        {shown ? "Show less..." : "Show more..."}
      </button>
    </>
  );
};

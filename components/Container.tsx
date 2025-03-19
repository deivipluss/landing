import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx("container px-4 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;

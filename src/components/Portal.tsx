import { popupDiv } from "@src/constants";
import React, { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
interface Props {
  children: React.ReactNode;
}

export default function Portal({ children }: Props): ReactElement {
  return (
    <div onClick={(ev) => ev.stopPropagation()}>
      {ReactDOM.createPortal(children, popupDiv)}
    </div>
  );
}

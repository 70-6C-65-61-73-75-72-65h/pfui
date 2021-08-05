import React, { ReactElement, useEffect, useRef } from "react";
import getRoot from "@src/utils/getRoot";

export default function useFullHeight(WrappedComponent): ReactElement {
  const fullHightRef = useRef<HTMLElement>();

  useEffect(() => {
    const listener = () => {
      let vh = getRoot.clientHeight * 0.01;
      (fullHightRef.current as any).style.setProperty("--vh", `${vh}px`);
    };
    if (fullHightRef.current) {
      window.addEventListener("resize", listener);
      listener();
    }
    return () => window.removeEventListener("resize", listener);
  }, [fullHightRef.current]);

  return <WrappedComponent ref={fullHightRef} />;
}

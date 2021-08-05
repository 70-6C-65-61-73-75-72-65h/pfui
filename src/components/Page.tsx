import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";
import avatar from "@static/images/avatar.png";
interface Props {}

export function Title({ children, className }) {
  return <h1 className={classNames(["title", className])}>{children}</h1>;
}
export function Text({ children, className }) {
  return <h1 className={classNames(["text", className])}>{children}</h1>;
}
export function Button({ children, className }) {
  return <h1 className={classNames(["btn", className])}>{children}</h1>;
}

export default function Page({}: Props): ReactElement {
  return (
    <main className="page">
      <div className="hello">
        <div className="hello__container">
          <div className="hello__content">
            <Title className="hello__title">
              Hi, I am John, Creative Technologist
            </Title>
            <Text className="hello__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>

            <Button className="hello__btn">Download Resume</Button>
          </div>
          <div className="hello__avatar">
            <img src={avatar} alt="Data" />
          </div>
        </div>
      </div>
    </main>
  );
}

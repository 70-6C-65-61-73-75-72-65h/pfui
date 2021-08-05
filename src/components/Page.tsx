import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";
import avatar from "@static/images/avatar.png";
interface Props {}

export function Title({ children, className, h1 = false }) {
  if (h1)
    return <h1 className={classNames(["title", className])}>{children}</h1>;
  return <div className={classNames(["title", className])}>{children}</div>;
}
export function Text({ children, className }) {
  return <div className={classNames(["text", className])}>{children}</div>;
}
export function Button({ children, className }) {
  return <button className={classNames(["btn", className])}>{children}</button>;
}

export function RecentPost({ title, info, children, className }) {
  return (
    <div className={classNames(["recent-post", className])}>
      <div className="recent-post__title">{title}</div>
      <div className="recent-post__info">
        {info.date} <span>|</span>
        {info.topic}
      </div>
      <Text className="recent-post__text">{children}</Text>
    </div>
  );
}

export function RecentPosts() {
  return (
    <section className="recent-posts">
      <div className="recent-posts__container _container">
        <div className="recent-posts__header">
          <a className="recent-posts__title">Recent posts</a>
          <a className="recent-posts__view-all">View all</a>
        </div>
        <div className="recent-posts__content">
          <RecentPost
            className={"recent-posts__item"}
            title={"Making a design system from scratch"}
            info={{ date: "12 Feb 2020", topic: "Design, Pattern" }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </RecentPost>
          <RecentPost
            className={"recent-posts__item"}
            title={"Creating pixel perfect icons in Figma"}
            info={{ date: "12 Feb 2020", topic: "Figma, Icon Design" }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.eserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud am
          </RecentPost>
        </div>
      </div>
    </section>
  );
}

export function Hello() {
  return (
    <section className="hello">
      <div className="hello__container _container">
        <div className="hello__content">
          <Title className="hello__title">
            Hi, I am Max,
            <br /> Creative Technologist
          </Title>
          <Text className="hello__text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>

          <Button className="hello__btn">Download Resume</Button>
        </div>
        <div className="hello__avatar">
          <img src={avatar} alt="Data" />
        </div>
      </div>
    </section>
  );
}
export function FeaturedWork({ className, pic, title, year, type, children }) {
  return (
    <div className={classNames(["featured-work", className])}>
      <div className="featured-work__pic">
        <img src={pic} alt="FeaturedWork" />
      </div>
      <div className="featured-work__content">
        <div className="featured-work__title">{title}</div>
        <div className="featured-work__year">{year}</div>
        <div className="featured-work__type">{type}</div>
        <Text className="featured-work__text">{children}</Text>
      </div>
    </div>
  );
}
export function FeaturedWorks() {
  return (
    <div className="featured-works">
      <div className="featured-works__container  _container">
        <div className="featured-works__header">Featured works</div>
        <div className="featured-works__content">
          <RecentPost
            className={"featured-works__item"}
            title={"Making a design system from scratch"}
            info={{ date: "12 Feb 2020", topic: "Design, Pattern" }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </RecentPost>
        </div>
      </div>
    </div>
  );
}
export default function Page({}: Props): ReactElement {
  return (
    <main className="page">
      <Hello />
      <RecentPosts />
      <FeaturedWorks />
    </main>
  );
}

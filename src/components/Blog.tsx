import React, { ReactElement } from "react";
import { RecentPost, Title } from "./Main";

interface Props {}

export default function Blog({}: Props): ReactElement {
  return (
    <section className="blog">
      <div className="blog__container _container-blog">
        <Title className="blog__header" h1>
          Blog
        </Title>
        <div className="blog__content">
          <article className="blog__article">
            <RecentPost
              className={"article"}
              titleCN={"article__title"}
              topicCN={"article__topic"}
              title={"Making a design system from scratch"}
              info={{ date: "12 Feb 2020", topic: "Design, Pattern" }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </RecentPost>
          </article>
          <article className="blog__article">
            <RecentPost
              className={"article"}
              titleCN={"article__title"}
              topicCN={"article__topic"}
              title={"Making a design system from scratch"}
              info={{ date: "12 Feb 2020", topic: "Design, Pattern" }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </RecentPost>
          </article>
          <article className="blog__article">
            <RecentPost
              className={"article"}
              titleCN={"article__title"}
              topicCN={"article__topic"}
              title={"Making a design system from scratch"}
              info={{ date: "12 Feb 2020", topic: "Design, Pattern" }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </RecentPost>
          </article>
          <article className="blog__article">
            <RecentPost
              className={"article"}
              titleCN={"article__title"}
              topicCN={"article__topic"}
              title={"Making a design system from scratch"}
              info={{ date: "12 Feb 2020", topic: "Design, Pattern" }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </RecentPost>
          </article>
        </div>
      </div>
    </section>
  );
}
//  export function Hello() {
//    return (
//      <section className="hello">
//        <div className="hello__container _container">
//          <div className="hello__content">
//            <Title className="hello__title">
//              Hi, I am Max,
//              <br /> Creative Technologist
//            </Title>
//            <Text className="hello__text">
//              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//              sint. Velit officia consequat duis enim velit mollit. Exercitation
//              veniam consequat sunt nostrud amet.
//            </Text>

//            <Button className="hello__btn">Download Resume</Button>
//          </div>
//          <div className="hello__avatar">
//            <img src={avatar} alt="Data" />
//          </div>
//        </div>
//      </section>
//    );
//  }

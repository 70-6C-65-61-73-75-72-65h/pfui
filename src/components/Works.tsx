import React, { ReactElement } from "react";
import { FeaturedWork } from "./Main";
import FW1 from "@static/images/FW1.svg";
import FW2 from "@static/images/FW2.svg";
import FW3 from "@static/images/FW3.svg";
import FW4 from "@static/images/FW4.svg";
import { Title } from "@src/components/Main";
import { useHistory } from "react-router-dom";
interface Props {}

export default function Works(): ReactElement {
  const history = useHistory();
  const redirectToSelectedWork = (id: number) => () => {
    history.push(`/works/${id}`);
  };
  return (
    <section className="works">
      <div className="works__container _container-works">
        <Title className="works__header" h1>
          Work
        </Title>
        <div className="works__content">
          <FeaturedWork
            className={"featured-works__item"}
            pic={FW1}
            title={"Designing Dashboards"}
            year={"2020"}
            type={"Dashboard"}
            onClick={redirectToSelectedWork(1)}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </FeaturedWork>
          <FeaturedWork
            className={"featured-works__item"}
            pic={FW2}
            title={"Vibrant Portraits of 2020"}
            year={"2018"}
            type={"Illustration"}
            onClick={redirectToSelectedWork(2)}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </FeaturedWork>
          <FeaturedWork
            className={"featured-works__item"}
            pic={FW3}
            title={"36 Days of Malayalam type"}
            year={"2018"}
            type={"Typography"}
            onClick={redirectToSelectedWork(3)}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </FeaturedWork>
          <FeaturedWork
            className={"featured-works__item"}
            pic={FW4}
            title={"Components"}
            year={"2018"}
            type={"Components, Design;"}
            onClick={redirectToSelectedWork(4)}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </FeaturedWork>
        </div>
      </div>
    </section>
  );
}

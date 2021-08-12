import { useMediaQuery } from "@src/hooks/useMediaQuery";
import React, { ReactElement } from "react";
import { Text, Title } from "@src/components/Main";

import WW1 from "@static/images/WW1.png";
import WW2 from "@static/images/WW2.png";
import WW3 from "@static/images/WW3.png";

interface Props {}

// const WorkPic = ({ isTablet, pic }) => (
//   <div className="work__pic">
//     {isTablet ? (
//       <img src={pic} alt="Work" height="256px" width="339px" />
//     ) : (
//       <img src={pic} alt="Work" />
//     )}
//   </div>
// );

export default function Work({}: Props): ReactElement {
  const isTablet = useMediaQuery("(max-width: 767.98px)");
  return (
    <section className="work">
      <div className="work__container _container-work">
        <Title className="work__header" h1>
          Designing Dashboards with <br />
          usability in mind
        </Title>

        <div className="work__year-type">
          <span className="work__year">2020</span>
          <span className="work__type">Dashboard, User Experience Design</span>
        </div>

        <Text className="work__text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>

        <div className="work__pic">
          <img src={WW1} alt="Work" />
        </div>
        <div className="work__pic">
          <img src={WW2} alt="Work" />
        </div>
        <div className="work__pic">
          <img src={WW3} alt="Work" />
        </div>
        {/* 
        <WorkPic isTablet={isTablet} pic={W11} />
        <WorkPic isTablet={isTablet} pic={W12} />
        <WorkPic isTablet={isTablet} pic={W13} /> */}
      </div>
    </section>
  );
}

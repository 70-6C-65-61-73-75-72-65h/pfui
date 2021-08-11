import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="footer">
      <div className="footer__container  _container">
        <div className="footer__resources">
          <a className="footer__resource _icon-fb" href="#fb"></a>
          <a className="footer__resource _icon-insta" href="#insta"></a>
          <a className="footer__resource _icon-linkedin" href="#linkedin"></a>
          <a className="footer__resource _icon-twitter" href="#twitter"></a>
        </div>
        <div className="footer__copyrights">
          Copyright ©2020 All rights reserved
        </div>
      </div>
    </footer>
  );
}

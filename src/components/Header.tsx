import { AppContext } from "@src/App";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import React, { ReactElement, useContext } from "react";
import Burger from "@src/components/Burger";
import MenuItem from "@src/components/MenuItem";
import { useHistory, useLocation } from "react-router-dom";

function Menu() {
  const { menuItems } = useContext(AppContext);
  const location = useLocation();
  const history = useHistory();

  return (
    <nav className="menu">
      <ul className="menu__list" onClick={(ev) => ev.stopPropagation()}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            className={"menu"}
            active={`/${item.link}` === location.pathname}
            onClick={() => history.push(`/${item.link}`)}
          />
        ))}
      </ul>
    </nav>
  );
}

interface Props {}

export default function Header({}: Props): ReactElement {
  const isMobile = useMediaQuery("(max-width: 479.98px)");
  return (
    <header className="header">
      <div className="header__content">{isMobile ? <Burger /> : <Menu />}</div>
    </header>
  );
}

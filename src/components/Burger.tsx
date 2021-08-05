import { AppContext } from "@src/App";
import { popupDiv } from "@src/constants";
import React, { MouseEventHandler, ReactElement, useContext } from "react";
import ReactDOM from "react-dom";
import MenuItem from "@src/components/MenuItem";

interface MenuItemProps {
  item: {
    link: string;
    label: string;
    icon?: string;
  };
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

interface BurgerProps {
  //   children: React.ReactNode;
}

function BurgerMenu() {
  const { menuItems, setOpenPopup } = useContext(AppContext);
  return (
    <nav className="burger">
      <ul className="burger__list" onClick={(ev) => ev.stopPropagation()}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            className={"burger"}
            onClick={() => setOpenPopup(false)}
          />
        ))}
      </ul>
    </nav>
  );
}

export default function Burger({}: BurgerProps): ReactElement {
  //   const [open, setOpen] = useState(false);
  const { setOpenPopup, openPopup } = useContext(AppContext);
  return (
    <nav role="navigation">
      <div
        className={`center${openPopup ? " opened" : ""}`}
        onClick={() => setOpenPopup((prev) => !prev)}
      >
        <div></div>
        {openPopup && ReactDOM.createPortal(<BurgerMenu />, popupDiv)}
      </div>
    </nav>
  );
}

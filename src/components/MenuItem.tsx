import classNames from "@src/utils/classNames";
import React, { MouseEventHandler, ReactElement, useContext } from "react";

interface MenuItemProps {
  item: {
    link: string;
    label: string;
    icon?: string;
  };
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  active?: boolean;
}

export default function MenuItem({
  item,
  className,
  onClick,
  active,
}: MenuItemProps) {
  return (
    <li>
      <a
        // href={item.link}
        className={classNames([`${className ?? ""}__link`, active && "active"])}
        onClick={onClick}
      >
        {item.icon && <img src={item.icon} alt="MenuItem" />} {item.label}
      </a>
    </li>
  );
}

import React, { MouseEventHandler, ReactElement, useContext } from "react";

interface MenuItemProps {
  item: {
    link: string;
    label: string;
    icon?: string;
  };
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function MenuItem({ item, className, onClick }: MenuItemProps) {
  return (
    <li>
      <a
        href={item.link}
        className={`${className ?? ""}__link`}
        onClick={onClick}
      >
        {item.icon && <img src={item.icon} alt="MenuItem" />} {item.label}
      </a>
    </li>
  );
}

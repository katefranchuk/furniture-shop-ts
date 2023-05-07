import { FC } from "react";
import { Link } from "react-router-dom";
import { links } from "../header.links";
import {
  Menu,
  MobileLinks,
  MobileMeniList,
  MobileMenuBtnClose,
} from "./MobileMenu.styled";
import { IoMdClose } from "react-icons/io";

interface IMenu {
  toggle: () => void;
  isActive: boolean;
}

const MobileMenu: FC<IMenu> = ({ toggle, isActive }) => {
  const onCloseMenu = () => {
    toggle();
    document.body.style.overflow = "visible";
  };

  return (
    <Menu isActive={isActive}>
      <MobileMeniList>
        <MobileMenuBtnClose type="button" onClick={onCloseMenu}>
          <IoMdClose />
        </MobileMenuBtnClose>
        {links.map(({ path, title, id }) => (
          <li key={id}>
            <Link to={path} onClick={() => onCloseMenu()}>
              <MobileLinks variant="accent3" component="h3">
                {title}
              </MobileLinks>
            </Link>
          </li>
        ))}
      </MobileMeniList>
    </Menu>
  );
};

export default MobileMenu;

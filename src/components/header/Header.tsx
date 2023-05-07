import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { useResponsive } from "../../utils/responsive/ResponsiveContext";
import { links } from "./header.links";
import {
  HeaderElement,
  HeaderIconWrapper,
  HeaderLogo,
  HeaderTop,
  HeaderWrapper,
  Link,
  MenuList,
  Nav,
} from "./Header.styled";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { useActive } from "../../hooks/useActive";
import MobileMenu from "./mobile-menu/MobileMenu";
import Icon from "../../ui/react-icons/Icon";

const Header: FC = () => {
  const { isSm } = useResponsive();
  const { isActive, toggle } = useActive();

  const onClickMenu = () => {
    toggle();
    document.body.style.overflow = "hidden";
  };

  return (
    <HeaderElement>
      <Container maxWidth={"xl"}>
        <HeaderWrapper>
          <HeaderTop>
            <NavLink to="/">
              <HeaderLogo variant="accent3" component="h2">
                Avion
              </HeaderLogo>
            </NavLink>
            <HeaderIconWrapper>
              {isSm || (
                <button type="button" onClick={onClickMenu}>
                  <Icon children={<HiOutlineMenu />} />
                </button>
              )}
              <Link to="cart">
                <Icon children={<BsCart3 />} />
              </Link>
            </HeaderIconWrapper>
            {isActive && <MobileMenu toggle={toggle} isActive={isActive} />}
          </HeaderTop>
          {isSm && (
            <Nav>
              <MenuList>
                {links.map(({ title, path, id }) => (
                  <li key={id}>
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </MenuList>
            </Nav>
          )}
        </HeaderWrapper>
      </Container>
    </HeaderElement>
  );
};

export default Header;

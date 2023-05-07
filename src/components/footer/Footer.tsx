import { Container } from "@mui/material";
import { FC } from "react";
import ButtonGray from "../../ui/button-gray/ButtonGray";
import MenuItem from "../../ui/menu-list/MenuItem";
import MenuList from "../../ui/menu-list/MenuList";
import { footerLinksMenu, footerLinksCategory } from "./footer.data";
import {
  FooterCopyright,
  FooterForm,
  FooterInner,
  FooterList,
  FooterListTitle,
  FooterStyled,
  FooterWrapper,
  FormInner,
  FormInput,
} from "./Footer.styled";

const Footer: FC = () => {
  return (
    <FooterStyled>
      <Container maxWidth={"lg"}>
        <FooterInner>
          <FooterList>
            <MenuList>
              <FooterListTitle variant="text3" component="h3">
                Menu
              </FooterListTitle>
              {footerLinksMenu.map((links) => (
                <MenuItem key={links.id} title={links.title} />
              ))}
            </MenuList>

            <MenuList>
              <FooterListTitle variant="text3" component="h3">
                Menu
              </FooterListTitle>
              {footerLinksCategory.map((links) => (
                <MenuItem key={links.id} title={links.title} />
              ))}
            </MenuList>

            <MenuList>
              <FooterListTitle variant="text3" component="h3">
                Menu
              </FooterListTitle>
              {footerLinksCategory.map((links) => (
                <MenuItem key={links.id} title={links.title} />
              ))}
            </MenuList>
          </FooterList>
          <FooterForm>
            <FooterListTitle variant="text3" component="h3">
              Join our mailing list
            </FooterListTitle>
            <FormInner>
              <FormInput type="text" placeholder="your@email.com" />
              <ButtonGray children={"Sign Up"} />
            </FormInner>
          </FooterForm>
        </FooterInner>
        <FooterCopyright>
          <FooterWrapper>
            <p>Copyright 2022 Avion LTD</p>
            <div></div>
          </FooterWrapper>
        </FooterCopyright>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

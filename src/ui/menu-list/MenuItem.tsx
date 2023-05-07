import { FC } from "react";
import { FooterLink, ListItem } from "./MenuList.styled";

interface IMenuItem {
  title: string;
}

const MenuItem: FC<IMenuItem> = ({ title }) => {
  return (
    <ListItem>
      <FooterLink variant="text4" component="h4">
        {title}
      </FooterLink>
    </ListItem>
  );
};

export default MenuItem;

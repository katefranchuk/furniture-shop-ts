import { FC, ReactNode } from "react";
import { List } from "./MenuList.styled";

const MenuList: FC<{ children: ReactNode }> = ({ children }) => {
  return <List>{children}</List>;
};

export default MenuList;

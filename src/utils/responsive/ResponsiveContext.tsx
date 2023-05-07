import { FC, ReactNode, useContext, createContext } from "react";
import useMediaQueryMui from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

export interface ResponsiveContextType {
  isSm: boolean;
  isMd: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextType>({
  isSm: false,
  isMd: false,
});

export const ResponsiveProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  const value: ResponsiveContextType = {
    isSm: useMediaQueryMui(theme.breakpoints.up("sm")),
    isMd: useMediaQueryMui(theme.breakpoints.up("md")),
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export function useResponsive() {
  return useContext(ResponsiveContext);
}

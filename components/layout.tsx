import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return <Box>{children}</Box>;
};

export default Layout;

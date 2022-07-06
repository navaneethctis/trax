import { Box } from "@chakra-ui/react";

import Sidebar from "./sidebar";

type LayoutProps = {
  children: JSX.Element;
};

const PLAYER_HEIGHT = "100px";
const SIDEBAR_WIDTH = "250px";

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box height="100vh" width="100vw">
      <Box
        height={`calc(100% - ${PLAYER_HEIGHT})`}
        left="0"
        position="absolute"
        top="0"
        width={SIDEBAR_WIDTH}
      >
        <Sidebar />
      </Box>

      <Box
        bgColor="gray.300"
        height={`calc(100% - ${PLAYER_HEIGHT})`}
        marginBottom={PLAYER_HEIGHT}
        marginLeft={SIDEBAR_WIDTH}
        width={`calc(100% - ${SIDEBAR_WIDTH})`}
      >
        {children}
      </Box>

      <Box
        bgColor="gray.600"
        bottom="0"
        height={PLAYER_HEIGHT}
        left="0"
        position="absolute"
        width="100%"
      />
    </Box>
  );
};

export default Layout;

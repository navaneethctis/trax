import { Box, Divider, List } from "@chakra-ui/react";
import Image from "next/image";
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from "react-icons/md";

import SidebarItem from "./sidebar-item";

const NAV_ITEMS = [
  {
    href: "/",
    icon: MdHome,
    text: "Home",
  },
  {
    href: "/search",
    icon: MdSearch,
    text: "Seach",
  },
  {
    href: "/library",
    icon: MdLibraryMusic,
    text: "Library",
  },
];

const MUSIC_ITEMS = [
  {
    href: "/",
    icon: MdPlaylistAdd,
    text: "Create Playlist",
  },
  {
    href: "/",
    icon: MdFavorite,
    text: "Favorites",
  },
];

const PLAYLISTS = new Array(100)
  .fill(null)
  .map((item, index) => `Playlist ${index + 1}`);

const Sidebar = () => {
  return (
    <Box bgColor="black" color="gray" height="100%" paddingX="5px" width="100%">
      <Box height="100%" paddingY="20px">
        <Box marginBottom="20px" paddingX="20px" width="120px">
          <Image alt="Trax Logo" height={60} src="/logo.svg" width={120} />
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {NAV_ITEMS.map((item) => {
              return <SidebarItem item={item} key={item.text} />;
            })}
          </List>
        </Box>

        <Box>
          <List spacing={2}>
            {MUSIC_ITEMS.map((item) => {
              return <SidebarItem item={item} key={item.text} />;
            })}
          </List>
        </Box>

        <Divider color="gray.800" />

        <Box height="60%" overflowY="auto">
          <List spacing={2}>
            {PLAYLISTS.map((item) => {
              return <SidebarItem item={item} key={item} />;
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

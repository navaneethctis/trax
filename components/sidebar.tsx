import {
  Box,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MdHome, MdLibraryMusic, MdSearch } from "react-icons/md";

const MENU_ITEMS = [
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

const Sidebar = () => {
  return (
    <Box bgColor="black" color="gray" height="100%" paddingX="5px" width="100%">
      <Box paddingY="20px">
        <Box marginBottom="20px" paddingX="20px" width="120px">
          <Image alt="Trax Logo" height={60} src="/logo.svg" width={120} />
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {MENU_ITEMS.map((item) => {
              return (
                <ListItem fontSize="16px" key={item.text} paddingX="20px">
                  <LinkBox>
                    <Link href={item.href} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={item.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {item.text}
                      </LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

import type { IconType } from "react-icons";

import { ListItem, LinkBox, LinkOverlay, ListIcon } from "@chakra-ui/react";
import Link from "next/link";

type SidebarItemProps = {
  item:
    | string
    | {
        href: string;
        icon: IconType;
        text: string;
      };
};

const SidebarItem = ({ item }: SidebarItemProps) => {
  const isString = typeof item === "string";

  return (
    <ListItem fontSize="16px" key={isString ? item : item.text} paddingX="20px">
      <LinkBox>
        <Link href={isString ? "/" : item.href} passHref>
          <LinkOverlay>
            {isString ? null : (
              <ListIcon as={item.icon} color="white" marginRight="20px" />
            )}
            {isString ? item : item.text}
          </LinkOverlay>
        </Link>
      </LinkBox>
    </ListItem>
  );
};

export default SidebarItem;

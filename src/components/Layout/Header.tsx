import React from "react";
import { useRouter } from "next/router";

// components
import { IconButton, Badge } from "@/common";
import * as C from "./styles";

// types
import { Menu } from "@/types";

// icons
import { IAlert, IWallet, IUser } from "@/common/svg";

const menus: Menu[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    slug: "/",
  },
  {
    name: "Create",
    path: "/create",
    slug: "create",
  },
  {
    name: "Marketplace",
    path: "/marketplace",
    slug: "marketplace",
  },
  {
    name: "Learn",
    path: "/learn",
    slug: "learn",
  },
];

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <C.HeaderWrapper>
      <C.Logo src="/images/logo.svg" width={145} height={36} alt="logo" />

      <C.Nav>
        {menus.map((menu) => (
          <C.NavLink
            key={menu.slug}
            href={menu.path}
            active={router.asPath === menu.slug ? 1 : 0}
          >
            {menu.name}
            {menu.slug === "marketplace" && (
              <C.ComingSoon>Coming Soon</C.ComingSoon>
            )}
          </C.NavLink>
        ))}
      </C.Nav>

      <C.RightTools>
        {/* badge */}
        <Badge label="Status" variant="success" />
        <IconButton icon={IAlert} />
        <IconButton icon={IWallet} />
        <IconButton icon={IUser} />
      </C.RightTools>
    </C.HeaderWrapper>
  );
};

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/home",
      label: "Home",
      icon: (active: boolean) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "white" : "none"}>
          <path
            d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"
            stroke={active ? "white" : "#262525"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "/wishlist",
      label: "Wishlist",
      icon: (active: boolean) => (
        <svg width="22" height="20" viewBox="0 0 24 22" fill="none">
          <path
            d="M12 21C12 21 2 14 2 7.5A5.5 5.5 0 0112 4.74 5.5 5.5 0 0122 7.5C22 14 12 21 12 21z"
            stroke={active ? "white" : "#262525"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "/cart",
      label: "Cart",
      icon: (active: boolean) => (
        <svg width="20" height="22" viewBox="0 0 22 24" fill="none">
          <path
            d="M7 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            fill={active ? "white" : "#262525"}
          />
          <path
            d="M1 1h3l2.5 12h11l2-8H5"
            stroke={active ? "white" : "#262525"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "/notifications",
      label: "Notifications",
      icon: (active: boolean) => (
        <svg width="20" height="22" viewBox="0 0 22 24" fill="none">
          <path
            d="M11 2a7 7 0 00-7 7v5l-2 2v1h18v-1l-2-2V9a7 7 0 00-7-7z"
            stroke={active ? "white" : "#262525"}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 21a2 2 0 004 0"
            stroke={active ? "white" : "#262525"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-5 pointer-events-none">
      <div className="pointer-events-auto bg-white rounded-[50px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] flex items-center px-2 py-2 gap-1 w-full max-w-xs">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/home" && pathname === "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex items-center justify-center h-[50px] rounded-full transition-all duration-200 active:scale-95"
              style={isActive ? { backgroundColor: "#e85b52" } : {}}
            >
              {item.icon(isActive)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

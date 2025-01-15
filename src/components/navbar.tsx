"use client";

import { navbarRoutes } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import MaxWidthWrapper from "./max-width-wrapper";
import { useEffect, useState } from "react";

interface NavBarProps {
  large?: boolean;
  className?: string;
}

export default function Navbar({ className: string }: NavBarProps) {
  const theme = useTheme();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        `z-40 flex justify-center backdrop-blur-xl transition-all w-full ${
          scroll ? "fixed top-0 border-b" : ""
        }`
      )}
    >
      <MaxWidthWrapper className="flex h-14 items-center justify-between py-4">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                {/* <div className="relative size-7">
                  {theme.theme === "light" ? (
                    <Image
                      fill
                      className="size-full"
                      src="/_static/logo/light.png"
                      alt="fake-avatar"
                    />
                  ) : (
                    <Image
                      fill
                      className="size-full"
                      src="/_static/logo/dark.png"
                      alt="fake-avatar"
                    />
                  )}
                </div> */}

                <Link
                  href="/"
                  // className="bg-gradient-to-r from-[rgba(62,207,142)] to-[rgba(62,207,142,0.5)] bg-clip-text text-2xl font-bold text-transparent"
                  className="text-3xl font-bold text-foreground logo-text"
                >
                  KaraX.Ai
                </Link>
              </div>

              <div className="ml-10 flex items-center space-x-4">
                <nav className="hidden gap-6 md:flex">
                  {navbarRoutes?.map((item, index) => {
                    return (
                      <Link
                        href={item.href}
                        key={index}
                        prefetch={true}
                        className={cn(
                          "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden gap-6 md:flex">
                <ModeToggle />
              </div>
              {/* {session ? (
                <>
                  {dashBoard || admin ? (
                    <div className="flex items-center space-x-3">
                      {dashBoard && session.user.role === "ADMIN" ? (
                        <Link href="/admin" className="hidden md:block">
                          <Button
                            className="gap-2 px-4"
                            variant="outline"
                            size="sm"
                            rounded="xl"
                          >
                            <span>Admin</span>
                          </Button>
                        </Link>
                      ) : null}
                      <UserAccountNav user={session.user} />
                    </div>
                  ) : (
                    <Link
                      href={
                        session.user.role === "ADMIN"
                          ? "/admin"
                          : "/dashboard/settings"
                      }
                      className="hidden md:block"
                    >
                      <Button
                        className="gap-2 px-4"
                        variant="default"
                        size="sm"
                        rounded="full"
                      >
                        <span>Dashboard</span>
                      </Button>
                    </Link>
                  )}
                </>
              ) : status === "unauthenticated" ? (
                <Button
                  className="hidden gap-2 px-4 md:flex"
                  variant="default"
                  size="sm"
                  rounded="full"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  <span>Sign In</span>
                  <Icons.arrowRight className="size-4" />
                </Button>
              ) : (
                <div className="hidden lg:flex">
                  {dashBoard || admin ? (
                    <Skeleton className="size-9 rounded-full" />
                  ) : (
                    <Skeleton className="h-9 w-24 rounded-full" />
                  )}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

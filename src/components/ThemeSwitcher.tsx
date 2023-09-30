"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="sm"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    ></Switch>
  );
}

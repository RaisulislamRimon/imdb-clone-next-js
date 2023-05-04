"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  // console.log("Theme", theme);
  // console.log("systemTheme", systemTheme);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {/* {currentTheme === "dark" ? <MdLightMode /> : <BsFillMoonFill />} */}
      {/* {theme === "system" || theme === "light" ? ( */}
      {/* this is working */}
      {/* {currentTheme === "system" || currentTheme === "light" ? (
        <BsFillMoonFill onClick={() => setTheme("dark")} />
      ) : (
        <MdLightMode onClick={() => setTheme("light")} />
      )} */}
      {/* this is working */}
      {currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}

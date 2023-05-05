"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  // const { mounted, setMounted } = useState(false);
  useEffect(() => setMounted(true), []);

  // console.log("Theme", theme);
  // console.log("systemTheme", systemTheme);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-600"
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-600"
          />
        ))}
      {/* {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="hover:text-amber-600 hover:cursor-pointer "
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme("dark")}
            className="hover:text-amber-600 hover:cursor-pointer "
          />
        ))} */}
      {/* {currentTheme === "dark" ? <MdLightMode /> : <BsFillMoonFill />} */}
      {/* {theme === "system" || theme === "light" ? ( */}
      {/* this is working */}
      {/* {currentTheme === "system" || currentTheme === "light" ? (
        <BsFillMoonFill onClick={() => setTheme("dark")} />
      ) : (
        <MdLightMode onClick={() => setTheme("light")} />
      )} */}
      {/* this is working */}
    </div>
  );
}

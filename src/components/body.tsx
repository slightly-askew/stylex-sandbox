"use client";
import { contrastTheme } from "@/styles/semantic/themes";
import { color } from "@/styles/semantic/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { Geist, Geist_Mono } from "next/font/google";
import { useContext } from "react";
import { ThemeContext } from "./themeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Body = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  const { className, ...stylexProps } = stylex.props(
    sx.root,
    theme === "Dark" && contrastTheme
  );
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${className}`}
      {...stylexProps}
      //suppressHydrationWarning
    >
      {children}
    </body>
  );
};

const sx = stylex.create({
  root: {
    fontFamily: `var(--font-geist-sans), sans-serif`,
    backgroundColor: color.surface,
    transition: "background-color 0.2s ease-out",
  },
});

import { ThemeToggleButton } from "@/components/themeProvider";
import { primitiveColor } from "@/styles/primitive/color-tokens.stylex";
import { contrastResetTheme } from "@/styles/semantic/themes";
import { color, spacing } from "@/styles/semantic/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { breakpoint } from "../styles/breakpoints.stylex";

export default function Home() {
  return (
    <div {...stylex.props(sx.layout)}>
      <h1>Stylex theme reset test</h1>
      <ThemeToggleButton />
      <p>
        The square will be <strong>blue</strong> in the light theme and{" "}
        <strong>purple</strong> in the dark theme.
      </p>
      <div {...stylex.props(sx.squareOne)}></div>
      <p>
        Applying our <strong>reset theme</strong>, this square should{" "}
        <strong>remain blue</strong> in both themes.
      </p>
      <div {...stylex.props(sx.squareOne, contrastResetTheme)}></div>
    </div>
  );
}

const sx = stylex.create({
  layout: {
    display: "grid",
    gap: spacing.layoutGapLarge,
    padding: spacing.layoutGapLarge,
    justifyItems: "start",
    color: color.textPrimary,
  },
  squareOne: {
    width: "100px",
    height: "100px",
    backgroundColor: {
      default: color.interaction,
      ":hover": color.interactionHover,
    },
  },
  squareTwo: {
    width: "100px",
    height: "100px",
    backgroundColor: {
      default: color.interaction,
      [breakpoint.mq1]: primitiveColor.green500,
      [breakpoint.mq2]: primitiveColor.red500,
    },
  },
});

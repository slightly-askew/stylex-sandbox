import * as stylex from "@stylexjs/stylex";
import { primitiveColor } from "../primitive/color-tokens.stylex";
import { color } from "./tokens.stylex";

export const contrastTheme = stylex.createTheme(color, {
  // Surface colors - inverted for dark theme
  surface: primitiveColor.gray900,
  surfaceHover: primitiveColor.gray800,
  surfaceActive: primitiveColor.gray700,
  surfaceSubtle: primitiveColor.black,
  surfaceBorder: primitiveColor.gray600,
  // Text colors - inverted for dark theme
  textPrimary: primitiveColor.gray50,
  textDefault: primitiveColor.gray100,
  textMuted: primitiveColor.gray200,
  textSubtle: primitiveColor.gray400,
  textDisabled: primitiveColor.gray500,
  textPlaceholder: primitiveColor.gray600,
  textLink: primitiveColor.blue200,
  // Interaction colors - adjusted for dark theme
  interaction: primitiveColor.purple400,
  interactionHover: primitiveColor.purple300,
  interactionActive: primitiveColor.purple200,
  interactionSubtle: primitiveColor.purple800,
  interactionBorder: primitiveColor.purple700,
  // Interaction error colors - adjusted for dark theme
  interactionError: primitiveColor.red400,
  interactionErrorHover: primitiveColor.red300,
  interactionErrorActive: primitiveColor.red200,
  interactionErrorSubtle: primitiveColor.red800,
  interactionErrorBorder: primitiveColor.red700,
  // Interaction success colors - adjusted for dark theme
  interactionSuccess: primitiveColor.purple400,
  interactionSuccessHover: primitiveColor.green300,
  interactionSuccessActive: primitiveColor.green200,
  interactionSuccessSubtle: primitiveColor.green800,
  interactionSuccessBorder: primitiveColor.green700,
});

//https://stylexjs.com/docs/learn/recipes/reset-themes/
export const contrastResetTheme = stylex.createTheme(color, {});

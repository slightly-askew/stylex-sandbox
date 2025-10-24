import * as stylex from "@stylexjs/stylex";
import { primitiveColor } from "../primitive/color-tokens.stylex";
import { primitiveSize } from "../primitive/size-tokens.stylex";

export const color = stylex.defineVars({
  // Surface colors
  surface: primitiveColor.gray50,
  surfaceHover: primitiveColor.gray100,
  surfaceActive: primitiveColor.gray200,
  surfaceSubtle: primitiveColor.white,
  surfaceBorder: primitiveColor.gray300,
  // Text colors
  textPrimary: primitiveColor.gray900,
  textDefault: primitiveColor.gray800,
  textMuted: primitiveColor.gray700,
  textSubtle: primitiveColor.gray500,
  textDisabled: primitiveColor.gray400,
  textPlaceholder: primitiveColor.gray300,
  textLink: primitiveColor.blue800,
  // Interaction colors
  interaction: primitiveColor.blue500,
  interactionHover: primitiveColor.blue600,
  interactionActive: primitiveColor.blue700,
  interactionSubtle: primitiveColor.blue100,
  interactionBorder: primitiveColor.blue200,
  // Interaction error colors
  interactionError: primitiveColor.red500,
  interactionErrorHover: primitiveColor.red600,
  interactionErrorActive: primitiveColor.red700,
  interactionErrorSubtle: primitiveColor.red100,
  interactionErrorBorder: primitiveColor.red200,
  //Interaction success colors
  interactionSuccess: primitiveColor.green500,
  interactionSuccessHover: primitiveColor.green600,
  interactionSuccessActive: primitiveColor.green700,
  interactionSuccessSubtle: primitiveColor.green100,
  interactionSuccessBorder: primitiveColor.green200,
});

export const spacing = stylex.defineVars({
  interactionBlock: primitiveSize.size4,
  interactionBlockSmall: primitiveSize.size2,
  interactionBlockLarge: primitiveSize.size6,
  interactionInline: primitiveSize.size4,
  interactionInlineSmall: primitiveSize.size2,
  interactionInlineLarge: primitiveSize.size6,
  layoutGap: primitiveSize.size4,
  layoutGapSmall: primitiveSize.size2,
  layoutGapLarge: primitiveSize.size6,
  layoutGapXLarge: primitiveSize.size8,
});

export const borderRadius = stylex.defineVars({
  borderRadius: primitiveSize.size4,
  borderRadiusSmall: primitiveSize.size2,
  borderRadiusLarge: primitiveSize.size6,
  borderRadiusXLarge: primitiveSize.size8,
});

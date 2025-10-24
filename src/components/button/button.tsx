import { color, spacing } from "@/styles/semantic/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { buttonTokens } from "./tokens.stylex";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  semanticVariant?: "primary" | "secondary" | "tertiary" | "destructive";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...stylex.props(button.base)} {...props}>
      {children}
    </button>
  );
}

const button = stylex.create({
  base: {
    backgroundColor: color.interaction,
    paddingBlock: spacing.interactionBlock,
    paddingInline: spacing.interactionInline,
    borderRadius: buttonTokens.borderRadius,
  },
});

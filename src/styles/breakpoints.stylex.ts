import * as stylex from "@stylexjs/stylex";

export const breakpoint = stylex.defineConsts({
  mq1: "@media (min-width: 768px)",
  mq2: "@media (min-width: 1024px)",
  cq1: "@container (min-width: 320px)",
  cq2: "@container (min-width: 640px)",
});

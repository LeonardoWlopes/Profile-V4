import { css, FlattenSimpleInterpolation } from "styled-components";

import defaultTheme from "../themes/default";

export function mediaQuery(breakPoint: keyof typeof defaultTheme.BREAK_POINTS) {
  return (styles: FlattenSimpleInterpolation) => `
    @media screen and (max-width: ${defaultTheme.BREAK_POINTS[breakPoint]}) {
      ${styles}
    }
  `;
}

css;

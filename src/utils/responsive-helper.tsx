import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  ml: 1025,
  lg: 1280,
  xl: 1920,
};

export const breakpoints = {
  up: (size: keyof typeof BREAKPOINTS) =>
    `@media(min-width: ${BREAKPOINTS[size]}px)`,
  down: (size: keyof typeof BREAKPOINTS) =>
    `@media(max-width: ${BREAKPOINTS[size]}px)`,
};

export const mobileSmall = "@media (max-width: 370px)";

export const useScreen = () => {
  const isMobileSmall = useMediaQuery({ maxWidth: 370 });
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  // const isIphoneXLandscape = useMediaQuery({
  //   maxWidth: 812,
  //   orientation: 'landscape',
  // })
  // const isTablet = useMediaQuery({ maxWidth: 1024 })
  // const isDesktop = useMediaQuery({ minWidth: 1025 })
  // const isIpadPro = useMediaQuery({ minWidth: 1024, orientation: 'portrait' })
  const screen = useMemo(
    () => ({
      isMobileSmall,
    }),
    [isMobileSmall]
  );
  return screen;
};

export const hideScrollStyle = `
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`;

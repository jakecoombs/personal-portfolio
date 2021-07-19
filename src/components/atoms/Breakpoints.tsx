import React from "react";

interface IBreakpoints {
  small: boolean;
  medium: boolean;
  large: boolean;
}

export const useBreakpoints = (): IBreakpoints => {
  const [windowWidth, setWindowWidth] = React.useState<number>(9999);
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    small: windowWidth < 640,
    medium: windowWidth < 768,
    large: windowWidth < 1024,
  };
};

import { useState, useEffect } from "react";

export const useIsMobile = (screen = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < screen) setIsMobile(true);
    else setIsMobile(false);
    const handleResize = () => {
      if (window.innerWidth < screen) setIsMobile(true);
      else setIsMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screen]);

  return isMobile;
};

export default useIsMobile;

import React, { useState, useEffect } from "react";
import { ReactFitty } from "react-fitty";
import useIsMobile from "../../hooks/useIsMobile"

const FitText = ({ children, externalStyles }) => {
  const isMobile = useIsMobile();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [isMobile]);

  return (
    <div className="w-full">
      <ReactFitty key={key}>
        <div className={`${externalStyles} uppercase`}>
          {children}
        </div>
      </ReactFitty>
    </div>
  );
};

export default FitText;

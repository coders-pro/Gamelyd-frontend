import React, { useState } from "react";

function useForceUpdate() {
  const [state, setState] = useState(false);

  const forceUpdate = () => {
    setState(!state);
  };

  return forceUpdate;
}

export default useForceUpdate;

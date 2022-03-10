import React, { Suspense } from "react";
import useObserver from "hooks/useObserver";
const ListTrending = React.lazy(() => import("./ListTrending"));
const LazyTrending = () => {
  //write the distance to activate
  const { isIntersecting, observerRef } = useObserver("200px");
  return (
    <div id="lazy-trending" ref={observerRef}>
      <Suspense fallback={null}>
        {isIntersecting ? <ListTrending /> : null}
      </Suspense>
    </div>
  );
};
export default LazyTrending;

const { useEffect, useState, useRef } = require("react");

const useObserver = (distance = "100px") => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    observer.observe(ref.current);
  }, []);

  return { isIntersecting: show, observerRef: ref };
};

export default useObserver;

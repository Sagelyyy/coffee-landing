import { useState, useRef, useEffect } from "react";
import { IProps } from "../../utils/types";

function Hero({ setInterStatus }: IProps) {
  const [intersection, setIntersection] = useState(false);

  const ref = useRef<null | HTMLHeadingElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setIntersection(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    obs.observe(ref.current!);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (setInterStatus) {
      if (intersection) {
        setInterStatus(intersection);
      } else if (!intersection) {
        setInterStatus(intersection);
      }
    }
  }, [intersection, setInterStatus]);

  return (
    <div className="relative">
      <div className="absolute top-2 p-2 w-full">
        <h1
          ref={ref}
          className="text-neutral-50 lg:mt-20 text-2xl font-bold p-6 sm:text-8xl text-shadow lg:p-10 font-header"
        >
          We make{" "}
          <span className="text-amber-950 text-shadow shadow-neutral-900">
            Coffee Diff
          </span>
          erent.
        </h1>
        <p className="font-paragraph mt-8 text-neutral-50 font-bold w-full text-xs invisible lg:ml-10 lg:visible lg:max-w-6xl lg:text-lg">
          Welcome to Coffee Diff, where each cup tells a unique story. Immerse
          yourself in the artistry of our carefully selected beans and
          experience coffee like never before. From the first sip to the last
          drop, discover a journey of flavors crafted just for you. Join us and
          embrace the extraordinary in every cup.
        </p>
      </div>
      <img
        className="lg:h-lvh lg:w-full lg:object-cover"
        src="./hero2.jpg"
        alt="Coffee Beans"
      />
    </div>
  );
}

export default Hero;

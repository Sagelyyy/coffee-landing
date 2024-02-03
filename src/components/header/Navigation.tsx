import { useEffect, useState } from "react";
import { IProps } from "../../utils/types";

function Navigation({ interStatus, setInterStatus }: IProps) {
  const [mobile, setMobile] = useState({ isMobile: true, open: false });

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    setMobile((prev) => ({ ...prev, isMobile: mql.matches }));

    const handleMqlChange = (event: MediaQueryListEvent) => {
      setMobile((prev) => ({ ...prev, isMobile: event.matches }));
    };

    mql.addEventListener("change", handleMqlChange);

    return () => {
      mql.removeEventListener("change", handleMqlChange);
    };
  }, []);

  function handleMenu() {
    setMobile((prev) => ({ ...prev, open: !prev.open }));
  }

  return mobile.isMobile ? (
    <div className="bg-slate-900 text-neutral-50 fixed top-0 z-10 flex w-full border-b-2 border-slate-500">
      <span
        onClick={() => handleMenu()}
        className=" material-symbols-outlined cursor-pointer  z-10 text-4xl"
      >
        menu
      </span>
      <h1 className="shrink-0 text-lg self-center ml-20">☕ Coffee Diff</h1>
      {mobile.open && (
        <ul className="bg-slate-900 p-10 z-10 flex flex-col gap-10 absolute top-0 border-2 border-y-indigo-500 border-r-indigo-500 border-l-0 w-11/12">
          <h1 className="shrink-0 text-lg lg:text-3xl">☕ Coffee Diff</h1>
          <span
            onClick={() => handleMenu()}
            className="material-symbols-outlined cursor-pointer"
          >
            close
          </span>
          <li
            onClick={() => handleMenu()}
            className="cursor-pointer hover:text-neutral-600"
          >
            <a href="#root">Home</a>
          </li>
          <li
            onClick={() => handleMenu()}
            className="cursor-pointer hover:text-neutral-600"
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => handleMenu()}
            className="cursor-pointer hover:text-neutral-600"
          >
            <a href="#products">Products</a>
          </li>
          <li
            onClick={() => handleMenu()}
            className="cursor-pointer hover:text-neutral-600 shrink-0"
          >
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      )}
    </div>
  ) : (
    <div
      className={
        interStatus
          ? "transition-all ease-linear delay-150 bg-transparent p-10 text-neutral-100 flex gap-10 justify-center border-b-0 border-slate-500 fixed top-0 z-20 w-full"
          : "transition-all ease-linear delay-150 bg-slate-900 p-10 text-neutral-100 flex gap-10 justify-center border-b-2 border-slate-500 fixed top-0 z-20 w-full"
      }
    >
      <h1 className="shrink-0 text-lg lg:text-3xl">☕ Coffee Diff</h1>
      <ul className="flex gap-10">
        <li
          onClick={() => handleMenu()}
          className="cursor-pointer hover:text-neutral-600"
        >
          <a href="#root">Home</a>
        </li>
        <li
          onClick={() => handleMenu()}
          className="cursor-pointer hover:text-neutral-600"
        >
          <a href="#about">About</a>
        </li>
        <li
          onClick={() => handleMenu()}
          className="cursor-pointer hover:text-neutral-600"
        >
          <a href="#products">Products</a>
        </li>
        <li
          onClick={() => handleMenu()}
          className="cursor-pointer hover:text-neutral-600 shrink-0"
        >
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div></div>
    </div>
  );
}

export default Navigation;

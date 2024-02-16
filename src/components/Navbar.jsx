import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = () => {
  const { scrollY } = useScroll();

  const [hideNav, setHideNav] = useState(false);
  const [toggle, setToggle] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150 /*  && toggle !== "show" */) {
      setHideNav(true);
      setToggle("hidden ");
    } else {
      setHideNav(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: "-11%" },
        hidden: { y: "-100%" },
      }}
      animate={hideNav ? "hidden" : "visible"}
      className="w-full flex py-9 px-6 sm:px-16 justify-between items-center navbar z-[2] blur-backdrop"
    >
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[1]">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-normal cursor-pointer text-[16px] sm:text-[24px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center w-[28px] h-[28px]  z-[10]">
        <div
          className="cursor-pointer menu-icon"
          onClick={() =>
            setToggle((prev) => (prev === "show" ? "hidden" : "show"))
          }
        >
          <ul className="list-none flex flex-col w-[28px] h-[28px] object-contain justify-center items-center">
            <li
              className={` p-0 m-0 ml-[8px] w-[16px] h-[3px] bg-white rounded-sm ${
                toggle === "show" ? "menu-open" : "menu-closed"
              }`}
            />
            <li
              className={` p-0 my-1  w-[24px] h-[3px] bg-white rounded-sm ${
                toggle === "show" ? "menu-open" : "menu-closed"
              }`}
            />
            <li
              className={` p-0 m-0 w-[24px] h-[3px] bg-white rounded-sm ${
                toggle === "show" ? "menu-open" : "menu-closed"
              }`}
            />
          </ul>
        </div>

        <div
          className={`${
            toggle === "show"
              ? "flex sidebar-open"
              : toggle === ""
              ? "hidden"
              : "sidebar-close "
          } min-w-[180px] frosted-gradient shadow-md shadow-slate-900 absolute top-[70px] right-0 mx-4 my-2 rounded-xl h-fit`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 w-full py-6">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                style={{
                  "--order": index,
                  "--reverse-order": navLinks.length - index,
                }}
                className={`py-3 w-full text-center border-slate-300 font-normal cursor-pointer text-[24px] navlink ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } `}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setToggle("hidden");
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

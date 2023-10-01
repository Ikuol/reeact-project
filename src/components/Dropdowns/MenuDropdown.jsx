import useOutsideAlerter from "hooks/useOutsideAlerter";
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const MenuDropdownButton = ({ text, ...rest }) => {
  return (
    <button className="w-full text-left px-3 py-3" {...rest}>
      {text}
    </button>
  );
};

const MenuDropdown = ({ trigger, extra, reverseColor = true, menu }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("bottom");

  const wrapperRef = useRef(null);
  const dropRef = useRef(null);
  let height = useMemo(() => menu.length * 40 + 16, [menu]);

  const calculerPosition = useCallback(() => {
    let dimensions = dropRef.current.getBoundingClientRect();

    let espaceDisponible = window.innerHeight - dimensions.bottom;
    if (espaceDisponible > height) {
      dropRef.current.style.top = "";
      dropRef.current.style.transformOrigin = "top right";
    } else {
      dropRef.current.style.top = `-${height}px`;
      dropRef.current.style.transformOrigin = "bottom right";
    }
  }, [height]);

  useEffect(() => {
    calculerPosition();
    setPosition("bottom");
  }, [calculerPosition]);

  const handleOpen = useCallback(() => {
    if (open === false) {
      calculerPosition();
    }
    setOpen(!open);
  }, [open, calculerPosition]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useOutsideAlerter(wrapperRef, handleClose);

  return (
    <div className="relative" ref={wrapperRef}>
      {cloneElement(trigger, {
        onClick: handleOpen,
      })}

      <ul
        className={`${
          position === "top" ? "origin-bottom-right" : "origin-top-right"
        } transition-all duration-300 ease-in-out absolute rounded-[12px] shadow-sm z-10 w-[260px] right-[20px] text-xs  p-2 ${
          reverseColor ? "bg-primary text-white" : "bg-white text-gray800"
        } ${extra} ${open ? "scale-100" : "scale-0"}`}
        ref={dropRef}
      >
        {menu.map((item, idx) => {
          return (
            <li
              key={idx}
              className={`${
                reverseColor
                  ? "hover:bg-white/20 hover:text-white"
                  : "hover:bg-gray200 hover:text-primary"
              } rounded-[8px] cursor-pointer`}
            >
              {cloneElement(item, {
                onClick: () => {
                  item.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuDropdown;

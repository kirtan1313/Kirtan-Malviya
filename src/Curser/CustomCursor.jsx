import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animateCursorBorder = () => {
      const easing = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

      if (cursorBorderRef.current) {
        cursorBorderRef.current.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      }

      requestAnimationFrame(animateCursorBorder);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animateCursorBorder);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll("[data-cursor]");

    buttons.forEach((button) => {
      const handleMouseOver = () => {
        if (button.dataset.cursor === "pointer") {
          cursorBorderRef.current.style.backgroundColor = "rgba(255, 255, 255, .6)";
          cursorBorderRef.current.style.setProperty("--size", "30px");
        }
        if (button.dataset.cursor === "pointer2") {
          cursorBorderRef.current.style.backgroundColor = "white";
          cursorBorderRef.current.style.mixBlendMode = "difference";
          cursorBorderRef.current.style.setProperty("--size", "80px");
        }
      };

      const handleMouseOut = () => {
        cursorBorderRef.current.style.backgroundColor = "unset";
        cursorBorderRef.current.style.mixBlendMode = "unset";
        cursorBorderRef.current.style.setProperty("--size", "50px");
      };

      button.addEventListener("mouseover", handleMouseOver);
      button.addEventListener("mouseout", handleMouseOut);

      return () => {
        button.removeEventListener("mouseover", handleMouseOver);
        button.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-border" ref={cursorBorderRef}></div>
    </>
  );
};

export default CustomCursor;

const styles = `
  * {
    margin: 0;
    cursor: none;
  }

  body {
    background-color: black;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    overflow-x : hidden;
    width : 100%;
  }

  #cursor {
    position: fixed;
    top: -5px;
    left: -5px;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    z-index: 999;
  }

  #cursor-border {
    --size: 50px;
    position: fixed;
    top: calc(var(--size) / -2);
    left: calc(var(--size) / -2);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px white;
    pointer-events: none;
    transition: top 0.15s ease-out, left 0.15s ease-out, width 0.15s ease-out,
      height 0.15s ease-out, background-color 0.15s ease-out;
    z-index: 999;
  }

  // input {
  //   font-family: "Century Gothic", sans-serif;
  //   font-size: 2rem;
  //   padding: 1rem 2rem;
  //   background-color: transparent;
  //   color: #64ffda;
  //   border: 1px solid #64ffda;
  //   border-radius: 0;
  //   box-shadow: 0 0 10px #64ffda, 0 0 10px #64ffda inset;
  //   text-shadow: 0 0 5px #64ffda, 0 0 10px #64ffda;
  //   transition: 0.3s ease-out;
  // }

  // input:hover {
  //   color: black;
  //   background-color: #64ffda;
  //   border-color: #64ffda;
  //   box-shadow: 0 0 80px #64ffda;
  // }

  // input:active {
  //   transform: scale(0.85);
  //   box-shadow: 0 0 30px #64ffda;
  // }

  // input:nth-of-type(2) {
  //   margin-left: 2rem;
  //   color: white;
  //   border: 1px solid white;
  //   box-shadow: 0 0 10px white, 0 0 10px white inset;
  //   text-shadow: 0 0 5px white, 0 0 10px white;
  // }

  // input:nth-of-type(2):hover {
  //   color: black;
  //   background-color: white;
  //   border-color: white;
  //   box-shadow: 0 0 80px white;
  // }

  // input:nth-of-type(2):active {
  //   transform: scale(0.85);
  //   box-shadow: 0 0 30px white;
  // }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
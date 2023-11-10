import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const icons = [
    { iconName: "icon-home", path: "/new---portfolio-project/" },
    { iconName: "icon-user", path: "/new---portfolio-project/about" },
    { iconName: "icon-graduation", path: "/new---portfolio-project/academy" },
    { iconName: "icon-layers", path: "/new---portfolio-project/portfolio" },
  ];
  return (
    <div className="fixed z-50 flex flex-col w-[50px] h-[100vh] justify-between border-e-2 border-gray-200 border-solid p-4 text-black bg-white">
      <span className="font-extrabold text-lg">R.</span>
      <div className="flex flex-col gap-y-3 icons-list">
        {icons.map((icon, i) => {
          return (
            <Link to={icon.path} key={i}>
              <span className={`${icon.iconName} font-bold`}></span>
            </Link>
          );
        })}
      </div>
      <span className="relative text-[12px] -rotate-180 copyright">2023-2024</span>
    </div>
  );
}

export default Sidebar;

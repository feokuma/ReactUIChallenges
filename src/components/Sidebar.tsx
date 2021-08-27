import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

export const Sidebar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="nav-menu">
      <h2>React UI Challenge</h2>
      <nav>
        <ul>
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

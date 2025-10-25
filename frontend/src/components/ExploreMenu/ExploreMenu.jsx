import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experiences, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((iteam, index) => {
          return (
            <div
              className="explore-menu-list-iteam"
              onClick={() =>
                setCategory((prev) =>
                  prev === iteam.menu_name ? "All" : iteam.menu_name
                )
              }
              key={index}
            >
              <img
                className={category === iteam.menu_name ? "active" : ""}
                src={iteam.menu_image}
                alt=""
              />
              <p>{iteam.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

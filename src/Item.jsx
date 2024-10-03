import "./styles.css";
import React from "react";

export default function Item({
  Titulo,
  Incone,
  onClick,
  SubItem = [],
  Hidden = false,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div onClick={onClick}>
        {Incone}
        {Titulo}
      </div>
      <div className={Hidden ? "Hidden" : "subsubitem"}>
        {SubItem.map((SI, I) => (
          <Item
            key={I}
            Titulo={SI.Titulo}
            Incone={SI.Incone}
            onClick={SI.onClick}
          />
        ))}
      </div>
    </div>
  );
}

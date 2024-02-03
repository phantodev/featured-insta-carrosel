import React from "react";

// import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({
  img,
  title,
  itemId,
}: {
  img: string;
  title: string;
  itemId: string;
}) {
  // const visibility = React.useContext(VisibilityContext);

  // const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        display: "inline-block",
        margin: "0 10px",
        width: "90px",
        userSelect: "none",
      }}
      tabIndex={0}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            backgroundColor: "gray",
            display: "inline-flex", // Alteração aqui para flex
            alignItems: "center", // Centraliza verticalmente
            justifyContent: "center", // Centraliza horizontalmente
            borderRadius: "50%",
            width: "75px",
            height: "75px",
          }}>
          <img src={img} alt="" style={{ borderRadius: "50%" }} />
        </div>
        <div style={{ fontSize: "12px" }}>{title}</div>
      </div>
    </div>
  );
}

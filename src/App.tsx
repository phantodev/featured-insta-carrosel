import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

// import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";
import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: for hide scrollbar
import "./hideScrollbar.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

// const Arrows = () => (
//   <div
//     style={{
//       width: "100%",
//       display: "flex",
//       justifyContent: "center",
//     }}>
//     Some other content
//     <div style={{ marginLeft: "10px", display: "flex" }}>
//       <LeftArrow /> <RightArrow />
//     </div>
//   </div>
// );

function App() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example" style={{ paddingTop: "100px", height: "150vh" }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            // or on top
            // Header={Arrows}
            // Footer={Arrows}
            onWheel={onWheel}>
            {items.map(({ id }) => (
              <Card
                img={"https://placehold.co/45x45"}
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default App;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

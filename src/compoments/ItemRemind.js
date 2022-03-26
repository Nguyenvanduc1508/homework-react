import React from "react";
import { observer } from "mobx-react-lite";
import remindStore from "../layouts/RemindStore";

const ItemRemind = ({ item, styleRemid }) => {
  return (
    <div className="item" style={styleRemid}>
      <div className="itemRemind">
        <p className="item__date">Ngày : {item.date}</p>
        <p className="item__content">{item.content}</p>
      </div>
      <div className="itemBtn" onClick={() => remindStore.deleteItem(item)}>
        X
      </div>
    </div>
  );
};

export default observer(ItemRemind);

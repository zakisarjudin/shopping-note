import CheckBox from "./CheckBox";
import Button from "./Button";

function ItemList({ items, purchaseItem, deleteItem }) {
  return (
    <div className="item-list-container">
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
          {items.map((v, i) => {
            return (
              <tr key={i}>
                <td>
                  <span style={{ visibility: "hidden" }}>spaces</span>
                </td>
                <td>
                  <div className={`item-list ${v.item_name ? "visible" : ""} ${v.purchased ? "purchased" : ""}`}>
                    <CheckBox name={"item_" + i} id={i} clicked={purchaseItem} purchased={v.purchased} />
                    <span id={"span_" + i}>
                      {v.total} {v.item_name}
                    </span>
                    <Button name={v.item_name} id={i} clicked={deleteItem} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;

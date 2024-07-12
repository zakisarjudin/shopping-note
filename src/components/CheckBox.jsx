function CheckBox({ id, name, clicked, purchased }) {
  if (!name) return;
  return <input type="checkbox" id={id} name={"checkbox_" + name} onChange={() => clicked(id)} checked={purchased ? "checked" : false} />;
}

export default CheckBox;

function ItemSort({ sortItems, clearItems }) {
  return (
    <div className="item-sort-container">
      <select name="order_by">
        <option value="1">urutkan berdasarkan abjad</option>
      </select>
      <button onClick={clearItems}>🧼 Bersihkan Daftar</button>
    </div>
  );
}

export default ItemSort;

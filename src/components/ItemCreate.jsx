function getOption() {
  return (
    <>
      {Array(10)
        .fill("")
        .map((v, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
    </>
  );
}

function ItemCreate({ createItem }) {
  return (
    <div className="item-create-container">
      <p>Hari ini belanja apa kita?</p>
      <form id="form-create-item" className="container-subsection">
        <select name="total_item">{getOption()}</select>
        <input type="text" name="item_name" />
        <button
          onClick={(e) => {
            e.preventDefault();

            let _selectedTotal = "";
            let _name = document.querySelector("input[name='item_name']").value;
            if (!_name) {
              alert("harap isi nama barangnya gan...");
              return;
            }
            _name = _name;
            document.querySelectorAll("select[name='total_item'] option").forEach((opt) => {
              if (opt.selected) _selectedTotal = opt.value;
            });
            createItem({ total: _selectedTotal, item_name: _name });
            // clear form
            document.getElementById("form-create-item").reset();
          }}
        >
          ➕ Tambah
        </button>
      </form>
    </div>
  );
}

export default ItemCreate;

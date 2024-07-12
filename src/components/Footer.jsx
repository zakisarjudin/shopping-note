function Footer({ items }) {
  const total_item = items.filter((v, i) => v.item_name).length;
  const purchased_item = items.filter((v, i) => v.purchased).length;

  let purchased_percentage = ((purchased_item / total_item) * 100).toFixed();

  if (!total_item) purchased_percentage = 0;
  return (
    <div className="footer-container">
      <p className="footer">
        Ada {total_item} barang di daftar belanjaan, {purchased_item} barang sudah dibeli ({purchased_percentage}%)
      </p>
    </div>
  );
}

export default Footer;

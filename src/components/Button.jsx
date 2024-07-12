function Button({ name, id, clicked, className = "btn-delete", value = "hapus" }) {
  if (!name) return;

  return (
    <button id={id} className={className} onClick={() => clicked(id)}>
      {value}
    </button>
  );
}

export default Button;

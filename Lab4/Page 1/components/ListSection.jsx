function ListSections({ title, items }) {
  return (
    <section>
      <h2 className="title">{title}</h2>
      <div>
        {items.map((item, index) => (
          <div key={index} className="item">
            <span className="name">{item.name} </span>
            <span
              className="price"
              style={{ color: item.inStock ? "green" : "red" }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ListSections;

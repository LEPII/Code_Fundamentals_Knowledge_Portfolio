const ListGroup = () => {
  const items = ["New Yok", "San Fran", "Tok-yo", "London", "Paris Hilton"];
  return (
    <>
      <h1>Main Header</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

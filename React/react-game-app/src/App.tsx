import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New Yok", "San Fran", "Tok-yo", "London", "Paris Hilton"];

  return (
    <div>
      <ListGroup items={items} heading="My City" />
    </div>
  );
}

export default App;

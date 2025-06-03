import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const items = ["New Yok", "San Fran", "Tok-yo", "London", "Paris Hilton"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Form />
      {alertVisible && (
        <Alert>
          <span> LUI'S CHILDREN</span>
        </Alert>
      )}
      <Like onClick={() => console.log("chicken wings")} />
      <div>
        <ListGroup
          items={items}
          heading="My City"
          onSelectItem={handleSelectItem}
        />
      </div>
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My BBB (Big Beautiful Button)
      </Button>
    </>
  );
}

export default App;

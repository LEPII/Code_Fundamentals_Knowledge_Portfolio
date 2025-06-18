// import Like from "./components/Like";
import { useEffect, useState } from "react";
// import Form from "./components/Form";
// import ExpenseList from "./components/expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import ProductList from "./components/ProductList";
import axios from "axios";
// import categories from "./components/expense-tracker/categories";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState([]);
  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "bbb", amount: 100, category: "Utilities" },
  //   { id: 3, description: "ccc", amount: 20, category: "Utilities" },
  //   { id: 4, description: "ddd", amount: 40, category: "Utilities" },
  // ]);

  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((e) => e.category === selectedCategory)
  //   : expenses;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res));
  });

  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Duck">Duck</option>
      </select>
      <ProductList category={category} />
      {/* <div className="mb-5">
        <ExpenseForm
          onSubmit={
            (expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ]) // IDs are usually generated on the server.
          }
        />
      </div>
      <div className="mb-4">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      <Form />

      <Like onClick={() => console.log("chicken wings")} /> */}
    </>
  );
}

export default App;

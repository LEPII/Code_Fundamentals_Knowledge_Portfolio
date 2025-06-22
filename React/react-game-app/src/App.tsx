// import Like from "./components/Like";
import { useEffect, useState } from "react";
// import Form from "./components/Form";
// import ExpenseList from "./components/expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import ProductList from "./components/ProductList";
// import categories from "./components/expense-tracker/categories";
import { CanceledError } from "./services/api-client";
import userService, { type User } from "./services/userService";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
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
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "lulu" };
    setUsers([newUser, ...users]);

    userService
      .createUser(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.updateUser(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

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
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button
                className="btn btn-secondary mx-1"
                onClick={() => {
                  updateUser(user);
                }}>
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
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

import { JSX, useState } from "react";

interface NewToDoProps {
  onAddToDo: (title: string) => void;
}

function NewToDo({ onAddToDo }: NewToDoProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddToDo(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Todo
      </button>
    </form>
  );
}

export default NewToDo;

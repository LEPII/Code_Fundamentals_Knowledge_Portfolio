import axios from "axios";
import ToDos from "../../../../models/Todos";

class ToDoService {
  http = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  async getToDos() {
    const response = await this.http.get<ToDos[]>("/todos");
    return response.data;
  }

  async addToDo(title: string) {
    const response = await this.http.post<ToDos>("/todos", { title });
    return response.data;
  }

  async deleteToDo(id: number) {
    const response = await this.http.delete("/todos/" + id);
    return response.data;
  }
}

const toDoServiceInstance = new ToDoService();

export default toDoServiceInstance;

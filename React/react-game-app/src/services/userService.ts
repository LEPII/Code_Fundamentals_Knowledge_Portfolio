import create from "./http-service"

export interface User {
  // can optionally choose which fields we want
  id: number;
  name: string;
}

export default create("/users");

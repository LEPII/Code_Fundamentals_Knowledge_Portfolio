interface User {
  id: number;
  title: string;
}

interface LoginUser {
  type: "LOGIN";
  username: string;
}

interface LogoutUser {
  type: "LOGOUT";
}

type AuthAction = LoginUser | LogoutUser;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default authReducer;

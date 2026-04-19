import { useAuth } from "./AuthProvider";

export default function LoginButton() {
  // We grab the dispatch function from the teleporter
  const { dispatch } = useAuth();

  const handleLogin = () => {
    // We send an Action to the Reducer
    dispatch({
      type: "LOGIN",
      payload: { name: "Admin User", email: "admin@eliteevents.com" },
    });
  };

  return <button onClick={handleLogin}>Log In</button>;
}

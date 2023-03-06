import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = 'http://localhost:8000';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App;
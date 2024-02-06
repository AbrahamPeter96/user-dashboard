import React from "react";
import "./App.css";
import Routes from "./routes/routes";
import UserProvider from "./Contexts/UsersContext";

function App() {

  return (
    <div>
      <UserProvider>
          <Routes />
      </UserProvider>
    </div>
  );
}

export default App;

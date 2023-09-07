import AuthContextProvider from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthContextProvider>
        {/* <Dashboard /> */}
        <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;

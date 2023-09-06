import AuthContextProvider from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div >
      <AuthContextProvider>
      <Dashboard />
      </AuthContextProvider>
      
    </div>
  );
}

export default App;

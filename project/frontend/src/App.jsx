import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import DashboardPage from "./pages/DashboardPage";
import useAuthStore from "./store/auth.store";
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/Registerpage";

const App = () => {
  const { user, isAuthenticated, checkAuth, logout, isLoading } = useAuthStore();

  // We still need a way to toggle between login and register pages if not authenticated
  const [authPage, setAuthPage] = useState("login");

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogin = () => {
    // On success login, the store updates isAuthenticated
    // We don't necessarily need to setPage here if we use conditional rendering based on auth
  };

  const handleLogout = () => {
    logout();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-amber-400 text-xl font-bold animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {!isAuthenticated ? (
        authPage === "register" ? (
          <RegisterPage onNavigate={setAuthPage} />
        ) : (
          <LoginPage onNavigate={setAuthPage} onLogin={handleLogin} />
        )
      ) : (
        <DashboardPage user={user} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;

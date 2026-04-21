import { useState, useEffect } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import { EyeIcon } from "../components/Icons";
import useAuthStore from "../store/auth.store";
import { toast } from "react-hot-toast";

const LoginPage = ({ onNavigate, onLogin }) => {
  const [form, setForm] = useState({ userEmail: "", userPassword: "" });
  const [showPass, setShowPass] = useState(false);
  
  const { login, isLoading, error, clearError } = useAuthStore();

  useEffect(() => {
    clearError();
  }, [clearError]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.userEmail || !form.userPassword) {
      toast.error("All fields are required.");
      return;
    }
    
    try {
      await login(form);
      toast.success("Welcome back!");
      onLogin(); // Call the parent's onLogin to update UI state
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to continue to Taskr">
      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          value={form.userEmail}
          onChange={set("userEmail")}
          placeholder="alex@example.com"
          disabled={isLoading}
        />
        <Input
          label="Password"
          type={showPass ? "text" : "password"}
          value={form.userPassword}
          onChange={set("userPassword")}
          placeholder="••••••••"
          disabled={isLoading}
          rightEl={
            <button
              onClick={() => setShowPass(!showPass)}
              className="text-slate-400 hover:text-amber-400 transition-colors"
              disabled={isLoading}
            >
              <EyeIcon off={showPass} />
            </button>
          }
        />

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-3 rounded-xl transition-all duration-200 text-sm tracking-wide mt-2 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>

        <p className="text-center text-slate-500 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => onNavigate("register")}
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            disabled={isLoading}
          >
            Register
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;



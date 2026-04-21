import { useState, useEffect } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import { EyeIcon } from "../components/Icons";
import useAuthStore from "../store/auth.store";
import { toast } from "react-hot-toast";

const RegisterPage = ({ onNavigate }) => {
  const [form, setForm] = useState({
    fullName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });
  const [showPass, setShowPass] = useState(false);

  const { register, isLoading, error, clearError } = useAuthStore();

  useEffect(() => {
    // Clear any previous errors when the component mounts
    clearError();
  }, [clearError]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (
      !form.fullName ||
      !form.userEmail ||
      !form.userPassword ||
      !form.confirmPassword
    ) {
      toast.error("All fields are required.");
      return;
    }
    if (form.userPassword !== form.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await register(form);
      toast.success("Account created successfully!");
      onNavigate("login");
    } catch (err) {
      toast.error(err.message || "Registration failed");
    }
  };

  return (
    <AuthLayout
      title="Create account"
      subtitle="Start managing your tasks today"
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Full Name"
          value={form.fullName}
          onChange={set("fullName")}
          placeholder="Alex Rivera"
          disabled={isLoading}
        />
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
        <Input
          label="Confirm Password"
          type={showPass ? "text" : "password"}
          value={form.confirmPassword}
          onChange={set("confirmPassword")}
          placeholder="••••••••"
          disabled={isLoading}
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
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center text-slate-500 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => onNavigate("login")}
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            disabled={isLoading}
          >
            Sign in
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;

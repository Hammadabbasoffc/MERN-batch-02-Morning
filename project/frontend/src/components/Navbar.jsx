import Logo from "./Logo";
import { LogoutIcon } from "./Icons";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 text-xs font-bold">
              {user.fullName[0]}
            </div>
            <span className="text-slate-300 text-sm font-medium">
              {user.fullName}
            </span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-800"
          >
            <LogoutIcon />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

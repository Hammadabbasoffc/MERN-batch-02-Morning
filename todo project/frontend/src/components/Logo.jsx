import { LogoIcon } from "./Icons";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-7 h-7 bg-amber-400 rounded-lg flex items-center justify-center">
      <LogoIcon />
    </div>
    <span className="font-bold tracking-tight text-white">Taskr</span>
  </div>
);

export default Logo;

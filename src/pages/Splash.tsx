import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home as HouseIcon } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl">
          <HouseIcon className="w-14 h-14 text-white" strokeWidth={1.5} />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-white tracking-wide">ZEUS</h1>
          <p className="text-white/90 text-lg tracking-widest">
            HOUSING &<br />APARTMENTS
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-12">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home as HouseIcon, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone || !formData.password) {
      toast({
        title: "Missing fields",
        description: "Please enter phone and password",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login successful",
      description: "Welcome back!",
    });
    
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="bg-primary text-white pt-16 pb-12 px-6 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl">
          <HouseIcon className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-wide">ZEUS</h1>
          <p className="text-white/90 text-sm tracking-widest mt-1">
            HOUSING & APARTMENTS
          </p>
        </div>
      </div>

      <div className="flex-1 bg-background rounded-t-[32px] px-6 pt-10 animate-slide-up">
        <h2 className="text-2xl font-bold mb-8">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input-field pl-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="input-field pl-12"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-primary font-medium hover:underline"
          >
            Forgot Password?
          </button>

          <Button type="submit" className="w-full btn-primary">
            Login
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-primary font-medium hover:underline"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
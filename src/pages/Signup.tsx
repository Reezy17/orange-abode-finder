import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home as HouseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Account created!",
      description: "Verify your phone number",
    });
    
    navigate("/otp-verify");
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="bg-primary text-white pt-12 pb-8 px-6 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl">
          <HouseIcon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-wide">ZEUS</h1>
          <p className="text-white/90 text-sm tracking-widest mt-1">
            HOUSING & APARTMENTS
          </p>
        </div>
      </div>

      <div className="flex-1 bg-background rounded-t-[32px] px-6 pt-8 animate-slide-up">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input-field"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+255 XXX XXX XXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="input-field"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Create Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="input-field"
            />
          </div>

          <Button type="submit" className="w-full btn-primary mt-6">
            Sign Up
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-primary font-medium hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
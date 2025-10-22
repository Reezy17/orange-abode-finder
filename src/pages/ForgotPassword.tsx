import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home as HouseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Missing email",
        description: "Please enter your email or phone number",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Reset link sent",
      description: "Check your email for password reset instructions",
    });
    
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl">
            <HouseIcon className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-wide">ZEUS</h1>
            <p className="text-muted-foreground text-sm tracking-widest mt-1">
              HOUSING & APARTMENTS
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Forgot Your Password?</h2>
            <p className="text-muted-foreground text-sm">
              Enter your email or phone number to recover account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Email / Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />

            <Button type="submit" className="w-full btn-primary">
              Continue
            </Button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full text-center text-sm text-primary font-medium hover:underline"
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
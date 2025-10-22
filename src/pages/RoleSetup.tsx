import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const RoleSetup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<"tenant" | "landlord" | null>(null);

  const handleContinue = () => {
    if (!selectedRole) return;
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Choose Your Role</h1>
          <p className="text-muted-foreground">
            Select how you'll use Zeus
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setSelectedRole("tenant")}
            className={`w-full p-6 rounded-2xl border-2 transition-all ${
              selectedRole === "tenant"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-xl ${
                selectedRole === "tenant" ? "bg-primary" : "bg-muted"
              }`}>
                <User className={`w-8 h-8 ${
                  selectedRole === "tenant" ? "text-white" : "text-foreground"
                }`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg">Tenant</h3>
                <p className="text-sm text-muted-foreground">
                  Find and rent properties
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedRole("landlord")}
            className={`w-full p-6 rounded-2xl border-2 transition-all ${
              selectedRole === "landlord"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-xl ${
                selectedRole === "landlord" ? "bg-primary" : "bg-muted"
              }`}>
                <Building2 className={`w-8 h-8 ${
                  selectedRole === "landlord" ? "text-white" : "text-foreground"
                }`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg">Landlord</h3>
                <p className="text-sm text-muted-foreground">
                  List and manage properties
                </p>
              </div>
            </div>
          </button>
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selectedRole}
          className="w-full btn-primary"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default RoleSetup;
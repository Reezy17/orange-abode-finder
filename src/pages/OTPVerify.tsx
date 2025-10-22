import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const OTPVerify = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter all 4 digits",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Verified!",
      description: "Your account has been verified",
    });
    navigate("/role-setup");
  };

  const handleResend = () => {
    setTimer(60);
    toast({
      title: "OTP Sent",
      description: "Check your phone for the new code",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">OTP Verification</h1>
          <p className="text-muted-foreground">
            Enter the 4-digit code sent to your phone
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-input rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          ))}
        </div>

        <div className="text-center text-sm">
          {timer > 0 ? (
            <p className="text-muted-foreground">
              Resend OTP in{" "}
              <span className="font-semibold text-foreground">{timer}s</span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-primary font-medium hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        <Button onClick={handleSubmit} className="w-full btn-primary">
          Verify & Continue
        </Button>
      </div>
    </div>
  );
};

export default OTPVerify;
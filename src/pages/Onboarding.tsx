import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    icon: Home,
    title: "Find Your Perfect Home",
    description: "Browse thousands of verified houses and apartments across Tanzania",
  },
  {
    icon: Search,
    title: "Easy Search & Booking",
    description: "Filter by location, price, and amenities. Book instantly with secure payments",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Trusted",
    description: "All properties are verified. Connect directly with trusted landlords",
  },
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/signup");
    }
  };

  const handleSkip = () => {
    navigate("/signup");
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        <div className="w-full max-w-md space-y-8 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-full">
            <div className="flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full">
              <CurrentIcon className="w-12 h-12 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              {slides[currentSlide].title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      <div className="pb-8 px-8 space-y-6">
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          {currentSlide < slides.length - 1 && (
            <Button
              variant="outline"
              onClick={handleSkip}
              className="flex-1 rounded-xl"
            >
              Skip
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="flex-1 btn-primary"
          >
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
import { Calendar } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();
  const hasBookings = false;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary text-white px-6 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold">My Bookings</h1>
        <p className="text-white/90 text-sm mt-1">View your rental history</p>
      </div>

      {!hasBookings ? (
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Calendar className="w-16 h-16 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold mb-3">No Bookings Yet</h2>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Start exploring amazing properties and make your first booking
          </p>
          <Button onClick={() => navigate("/home")} className="btn-primary">
            Browse Properties
          </Button>
        </div>
      ) : (
        <div className="px-6 pt-6 space-y-4">
          {/* Booking cards will go here */}
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Bookings;
import { Home, Calendar, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary text-white z-50 pb-safe">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `bottom-nav-item ${isActive ? "active" : ""}`
          }
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </NavLink>
        
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `bottom-nav-item ${isActive ? "active" : ""}`
          }
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs">Bookings</span>
        </NavLink>
        
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `bottom-nav-item ${isActive ? "active" : ""}`
          }
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};
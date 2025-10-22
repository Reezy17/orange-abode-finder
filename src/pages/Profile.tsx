import {
  User,
  Mail,
  Phone,
  Bell,
  Moon,
  Globe,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary text-white px-6 pt-12 pb-12 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <User className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-white/90 text-sm">Tenant</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Personal Info
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden divide-y divide-border">
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1 text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">john.doe@example.com</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1 text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+255 XXX XXX XXX</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Preferences
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden divide-y divide-border">
            <div className="flex items-center gap-3 p-4">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Get alerts about bookings
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center gap-3 p-4">
              <Moon className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">
                  Toggle dark theme
                </p>
              </div>
              <Switch />
            </div>

            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1 text-left">
                <p className="font-medium">Language</p>
                <p className="text-sm text-muted-foreground">English</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="w-full flex items-center gap-3 p-4 bg-destructive/10 text-destructive rounded-2xl hover:bg-destructive/20 transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Logout</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to logout?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleLogout}
                className="bg-destructive hover:bg-destructive/90"
              >
                Yes, Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
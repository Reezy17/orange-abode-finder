import { useState } from "react";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PropertyCard } from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockProperties = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    title: "Modern 3BR Apartment",
    location: "Masaki, Dar es Salaam",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    title: "Luxury Villa with Pool",
    location: "Oysterbay, Dar es Salaam",
    price: 2500000,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    title: "Cozy 2BR House",
    location: "Mikocheni, Dar es Salaam",
    price: 800000,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    title: "Spacious Family Home",
    location: "Mbezi Beach, Dar es Salaam",
    price: 1500000,
    bedrooms: 4,
    bathrooms: 2,
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary text-white px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Find Your Home</h1>
              <div className="flex items-center gap-1 text-white/90 text-sm mt-1">
                <MapPin className="w-4 h-4" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search location, property..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-0 rounded-xl h-12"
              />
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="h-12 w-12 rounded-xl bg-white/20 hover:bg-white/30 text-white border-0"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Properties</h2>
          <button className="text-primary text-sm font-medium hover:underline">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
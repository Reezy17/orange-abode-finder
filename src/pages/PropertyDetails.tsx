import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Wifi,
  Car,
  Zap,
  Droplet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const property = {
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
    title: "Modern 3BR Apartment",
    location: "Masaki, Dar es Salaam",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description:
      "Beautiful modern apartment with stunning views. Fully furnished with high-quality amenities. Located in a prime area with easy access to shops, restaurants, and public transport.",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Car, label: "Parking" },
      { icon: Zap, label: "Electricity" },
      { icon: Droplet, label: "Water" },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-80 object-cover"
        />
        
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full"
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite ? "fill-primary text-primary" : "text-gray-600"
                }`}
              />
            </button>
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-muted-foreground gap-1 mb-4">
            <MapPin className="w-5 h-5" />
            <span>{property.location}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{property.area} m²</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            {property.description}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Amenities</h2>
          <div className="grid grid-cols-4 gap-4">
            {property.amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 bg-muted rounded-xl"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <span className="text-xs text-center">{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-2xl font-bold text-primary">
              TZS {property.price.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">/month</span>
            </p>
          </div>
          <Button
            onClick={() => navigate(`/booking/${id}`)}
            className="btn-primary px-8"
          >
            Book Now
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default PropertyDetails;
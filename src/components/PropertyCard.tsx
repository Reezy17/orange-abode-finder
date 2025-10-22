import { Heart, MapPin, Bed, Bath } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  isFavorite?: boolean;
}

export const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  isFavorite: initialFavorite = false,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <div className="property-card animate-fade-in">
      <Link to={`/property/${id}`}>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-primary text-primary" : "text-gray-600"
              }`}
            />
          </button>
        </div>
        
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-base line-clamp-1">{title}</h3>
          
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4 text-muted-foreground" />
                <span>{bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4 text-muted-foreground" />
                <span>{bathrooms}</span>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-lg font-bold text-primary">
                TZS {price.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">/month</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
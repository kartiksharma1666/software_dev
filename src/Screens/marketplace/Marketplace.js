import React, { useEffect, useState } from "react";
import { GymCard } from "./GymCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../../App.css";
import iphone_home from "../../assets/Website_content/iphone_home.png";
import logoSVG from "../../assets/Website_content/TR_Website_content-04.svg";
import { PillButton } from "../../components/ButtonsLibrary";
import { themeColors } from "../../theme";
import backgroundImage from "../../assets/Website_content/TR_Image_desktop.png";

// Map container style
const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.006,
};

// Dummy data for gyms with reviews and ratings
const dummyGyms = [
  {
    id: 1,
    name: "Fitness Center A",
    address: "123 Main St, New York, NY",
    latitude: 40.73061,
    longitude: -73.935242,
    price: "$$",
    rating: 4.5,
    type: "Yoga",
    reviews: [
      {
        id: 1,
        reviewer: "Alice",
        rating: 5,
        comment: "Great gym with modern equipment!",
      },
      {
        id: 2,
        reviewer: "Bob",
        rating: 4,
        comment: "Good facilities, but can be crowded.",
      },
    ],
  },
  {
    id: 2,
    name: "Fitness Center B",
    address: "456 Elm St, New York, NY",
    latitude: 40.75061,
    longitude: -73.995242,
    price: "$",
    rating: 4.0,
    type: "Strength Training",
    reviews: [
      {
        id: 3,
        reviewer: "Charlie",
        rating: 4,
        comment: "Affordable and good for basic workouts.",
      },
    ],
  },
  {
    id: 3,
    name: "Fitness Center C",
    address: "789 Oak St, New York, NY",
    latitude: 40.712776,
    longitude: -74.005974,
    price: "$$$",
    rating: 4.8,
    type: "CrossFit",
    reviews: [
      {
        id: 4,
        reviewer: "Diana",
        rating: 5,
        comment: "Excellent CrossFit sessions with experienced trainers!",
      },
    ],
  },
];

const Review = ({ reviewer, rating, comment }) => (
  <div className="review mb-2 p-2 border rounded">
    <h4 className="font-semibold">{reviewer}</h4>
    <p className="text-yellow-500">
      {"★".repeat(rating) + "☆".repeat(5 - rating)}
    </p>
    <p>{comment}</p>
  </div>
);

function Marketplace() {
  const [gyms, setGyms] = useState([]);
  const [place, setPlace] = useState("");
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [filter, setFilter] = useState({ price: "", rating: "", type: "" });
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [selectedGym, setSelectedGym] = useState(null);

  useEffect(() => {
    // Use dummy data instead of fetching from API
    const filteredGyms = dummyGyms.filter(
      (gym) =>
        (filter.price ? gym.price === filter.price : true) &&
        (filter.rating ? gym.rating >= filter.rating : true) &&
        (filter.type ? gym.type === filter.type : true)
    );
    setGyms(filteredGyms);

    if (filteredGyms.length > 0) {
      setMapCenter({
        lat: filteredGyms[0].latitude,
        lng: filteredGyms[0].longitude,
      });
    }
  }, [filter]);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        console.error("Geolocation not supported or permission denied.");
      }
    );
  }, []);

  const handleLocationChange = (e) => {
    setPlace(e.target.value);
  };
  const handleCardClick = (gym) => {
    setSelectedGym(gym);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleMarkerClick = (gym) => {
    setSelectedGym(gym);
  };

  const handleMapClick = () => {
    setSelectedGym(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Trigger filtering based on current state values
    const filteredGyms = dummyGyms.filter(
      (gym) =>
        (filter.price ? gym.price === filter.price : true) &&
        (filter.rating ? gym.rating >= filter.rating : true) &&
        (filter.type ? gym.type === filter.type : true)
    );
    setGyms(filteredGyms);
    if (filteredGyms.length > 0) {
      setMapCenter({
        lat: filteredGyms[0].latitude,
        lng: filteredGyms[0].longitude,
      });
    }
  };

  return (
    <div className="bg-tertiary w-full">
      <div
        id="about"
        className="bg-tertiary"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 600,
        }}
      >
        <div className="lg:w-1/2 lg:pr-8 text-white flex flex-col items-center">
          <form className="p-8 rounded-lg pt-44" onSubmit={handleSearch}>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-tertiary">
              EXPLORE GYMS/ CLASSES
            </h2>
            <div className="mb-4 w-3/4 flex w-1/2 rounded-2xl">
              <input
                type="text"
                id="searchInput1"
                name="searchInput1"
                placeholder="Select Location"
                value={place}
                onChange={handleLocationChange}
                className="w-full h-10 px-4 rounded-xl bg-tertiary text-primary focus:border-4 focus:border-secondary placeholder-color custom-input"
              />
            </div>
            <div className="mb-4 w-3/4 flex w-1/2 rounded-2xl">
              <select
                name="price"
                value={filter.price}
                onChange={handleFilterChange}
                className="w-full h-10 px-4 rounded-xl bg-tertiary text-primary focus:border-4 focus:border-secondary custom-input"
              >
                <option value="">Select Price Range</option>
                <option value="">All</option>
                <option value="$">5k-10k</option>
                <option value="$$">10k-15k</option>
                <option value="$$$">15k-25k</option>
              </select>
            </div>
            <div className="mb-4 w-3/4 flex w-1/2 rounded-2xl">
              <select
                name="rating"
                value={filter.rating}
                onChange={handleFilterChange}
                className="w-full h-10 px-4 rounded-xl bg-tertiary text-primary focus:border-4 focus:border-secondary custom-input"
              >
                <option value="">Select Rating</option>
                <option value="">All</option>
                <option value="4">4 and above</option>
                <option value="4.5">4.5 and above</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="mb-4 w-3/4 flex w-1/2 rounded-2xl">
              <select
                name="type"
                value={filter.type}
                onChange={handleFilterChange}
                className="w-full h-10 px-4 rounded-xl bg-tertiary text-primary focus:border-4 focus:border-secondary custom-input"
              >
                <option value="">Select Type</option>
                <option value="">All</option>
                <option value="Yoga">Yoga</option>
                <option value="Strength Training">Strength Training</option>
                <option value="CrossFit">CrossFit</option>
              </select>
            </div>
            <button
              type="submit"
              className="flex w-fit bg-secondary text-tertiary font-semibold py-2 px-6 rounded-full hover:bg-tertiary hover:border-4 hover:border-secondary hover:text-primary"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="p-8">
        <LoadScript
          googleMapsApiKey="AIzaSyD136_VRMSCMUtTgJalxFudtDaInOvRw9I"
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={12}
            onClick={handleMapClick}
          >
            {gyms.map((gym) => (
              <Marker
                key={gym.id}
                position={{ lat: gym.latitude, lng: gym.longitude }}
                label={gym.name}
                onClick={() => handleMarkerClick(gym)}
              />
            ))}
            {selectedGym && (
              <InfoWindow
                position={{
                  lat: selectedGym.latitude,
                  lng: selectedGym.longitude,
                }}
                onCloseClick={() => setSelectedGym(null)}
              >
                <div>
                  <h2 className="text-lg font-bold">{selectedGym.name}</h2>
                  <p className="text-sm">{selectedGym.address}</p>
                  <p>Price Range: {selectedGym.price}</p>
                  <p>Rating: {selectedGym.rating}</p>
                  <p>Type: {selectedGym.type}</p>
                  <h3 className="font-semibold">Reviews:</h3>
                  {selectedGym.reviews.map((review) => (
                    <Review
                      key={review.id}
                      reviewer={review.reviewer}
                      rating={review.rating}
                      comment={review.comment}
                    />
                  ))}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>

        <div
          className="bg-tertiary flex items-center justify-center w-full px-4 pb-12"
          style={{ height: 600 }}
        >
          <div
            id="ContactUs"
            className="flex flex-col bg-tertiary w-fit lg:w-1/2 rounded-lg"
          >
            <h2 className="flex text-2xl lg:text-4xl font-semibold mb-4 text-primary">
              Connect with Us!
            </h2>
            <div className="mb-4 flex flex-wrap lg:gap-x-1">
              <PillButton label="GYMS" />
              <PillButton label="CLASSES" />
              <PillButton label="USER" />
              <PillButton label="COLLABORATOR" />
            </div>
            <div className="flex flex-col lg:flex-row gap-x-3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="h-12 w-full px-4 rounded-xl bg-tertiary text-primary mb-4 border-4 rounded-2xl border-secondary placeholder-color custom-input"
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                className="h-12 w-full px-4 rounded-xl bg-tertiary text-primary mb-4 border-4 rounded-2xl border-secondary placeholder-color custom-input"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-x-3">
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="h-12 w-full px-4 rounded-xl bg-tertiary text-primary mb-4 border-4 rounded-2xl border-secondary placeholder-color custom-input"
              />
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className="h-12 w-full px-4 rounded-xl bg-tertiary text-primary mb-4 border-4 rounded-2xl border-secondary placeholder-color custom-input"
              />
            </div>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              className="px-4 h-32 rounded-xl bg-tertiary text-primary mb-4 border-4 rounded-2xl border-secondary placeholder-color custom-input"
            ></textarea>
            <button
              type="submit"
              className="flex w-fit bg-secondary text-tertiary font-semibold py-2 px-6 rounded-full hover:bg-tertiary hover:border-4 hover:border-secondary hover:text-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      
      {/* <div>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div> */}
    </div>
  );
}

export default Marketplace;

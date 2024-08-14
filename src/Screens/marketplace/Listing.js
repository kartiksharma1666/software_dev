import React, { useEffect, useState } from 'react';
import '../../App.css';
import { ListCard, PillButton, Placard } from '../../components/ButtonsLibrary';
import '../../index.css'
import {cardData1} from '../../assets/Strings'
import { fetchAllGyms, getLocation } from '../../helperFunctions/MarketplaceHelper';
import { useLocation, useNavigate } from 'react-router-dom';
import icon from '../../assets/Icon.jpeg'

function Listing() {
    const location = useLocation();
    // const { props } = location.state || {};  //  Getting Data from Near You

    const props = {
        city : 'delhi',
    }

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [userCity, setUserCity] = useState(null);
    const [cityGymList, setCityGymList] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    const totalPages = cityGymList!==null && Math.ceil(cityGymList.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = cityGymList!==null && cityGymList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setLoading(true); // Start loading
        setUserCity(props.city);

        const cityGyms = async() => {
            const cityGymList = await fetchAllGyms(props.city);
            setCityGymList(cityGymList)
        }
        cityGyms();

        setLoading(false); // Stop loading
    }, []);

    return (
        <div className="bg-tertiary flex flex-col px-4 lg:px-48 min-h-screen">
            {/* <div className="flex flex-row lg:py-4">
                <PillButton label="Gyms/Fitness Centres" list={true}/>
                <PillButton label="Fitness Classes" list={true}/>
                <PillButton label="Sports" list={true}/>
            </div> */}
            {loading ? (
                <div className="flex justify-center items-center h-full pt-32">
                    <p className="text-secondary text-lg lg:text-2xl font-bold">Loading...</p>
                </div>
            ) : (
            cityGymList !== null && (
                <div className="flex flex-col py-8">
                    <p className="flex text-secondary text-lg lg:text-4xl font-bold text-left pl-2">SHOWING FITNESS CENTRES IN {userCity.toUpperCase()}</p>
                    <div className="">
                        <div className="flex flex-wrap">
                            {currentItems.map((card, index) => (
                                <ListCard
                                    key={index}
                                    image={card.image==="<url>" ? [icon, icon, icon]:card.image}
                                    name={card.gymName}
                                    city={card.city}
                                    gymDisplayName={card.gymDisplayName}
                                    cityDisplayName={card.cityDisplayName}
                                    rating={card.rating}
                                    NoOfReview={card.NoOfReview}
                                    locality={card.locality}
                                    buttonText={'EXPLORE'}
                                    extraText={'Free Trials | Membership deals Available'}
                                    stars={true}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(index + 1)}
                                    className={`mx-1 px-3 py-1 rounded ${index + 1 === currentPage ? 'bg-secondary text-tertiary' : 'bg-tertiary text-secondary border-2 border-secondary'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                )
            )}
        </div>
    );
}

export default Listing;

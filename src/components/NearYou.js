import { useNavigate } from "react-router-dom";
import { Next } from "../assets/WelcomeScreenImage";
import { Carousel, Placard } from "./ButtonsLibrary";
import { useEffect, useState } from "react";
import { fetchAllBlogs, fetchAllGyms } from "../helperFunctions/MarketplaceHelper";
import icon from '../assets/Icon.jpeg';

export const NearYou = (props) => {
    console.log("IN HERE")
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Adjust breakpoint as needed (640px for "sm" screens)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [cityGymList, setCityGymList] = useState(null);
    const [blogList, setBlogList] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    const prop = {
        city: 'delhi',
    };

    useEffect(() => {
        setLoading(true); // Start loading

        const cityGyms = async () => {
            if (props.heading.includes('BLOG')) {
                const blogsList = await fetchAllBlogs();
                setBlogList(blogsList);
            } else {
                const cityGymList = await fetchAllGyms(prop.city);
                setCityGymList(cityGymList);
            }
            setLoading(false); // Stop loading
        };
        cityGyms();
    }, [prop.city, props.heading]);

    const handleNavigation = () => {
        const propToPass = prop.city
        if (props.heading.includes('BLOG')) {
            navigate('/BlogList');
        } else {
            navigate('/Listing', { state: { propToPass } });
        }
    };

    const getPlacardProps = (heading, location, content, time, image) => ({
        hidden: props.heading.includes('BLOG'),
        bg: props.bg === 'bg-secondary' ? 'bg-tertiary w-52 lg:w-1/3' : 'bg-secondary w-52 lg:w-1/3',
        textColor: props.headingColor === 'text-secondary' ? 'text-tertiary' : 'text-secondary',
        locationIconColor: props.locationIconColor,
        location: location,
        name: heading,
        content: content?content:null,
        time: time?time:null,
        image: image?image:icon
    });

    const slides = (cityGymList || []).slice(0,3).map((gym, index) => ( 
        <Placard key={index} {...getPlacardProps(gym.name, gym.location, null, null, gym.image[0])} />
    ));

    const blogSlides = (blogList || []).slice(0, 3).map((blog, index) => (
        <Placard key={index} {...getPlacardProps(blog.name, "by "+blog.location, blog.content, blog.time, blog.image)} />
    ));

    return (
        <div className={`${props.bg} ${props.size} flex flex-col rounded-l-3xl lg:rounded-3xl mx-4 lg:my-16 h-[400px] lg:h-1/4`}>
            <button onClick={handleNavigation} className="py-8 flex flex-row justify-between items-center px-8">
                <h2 className={`flex text-lg lg:text-4xl font-bold ${props.headingColor}`}>{isMobile ? props.headingMobile : props.heading}</h2>
                <Next className="w-6 lg:w-12 h-4 lg:h-7 -mr-6 lg:-mr-0" />
            </button>

            <div className="w-full">
                {cityGymList && !props.heading.includes('BLOG') &&
                <>
                    <div className="hidden lg:flex flex-row justify-between">
                        {slides}
                    </div>
                </>}
                {blogList && props.heading.includes('BLOG') &&
                    <div className="hidden lg:flex flex-row justify-between">
                        {blogSlides}
                    </div>}
                <div className="lg:hidden justify-between">
                    <Carousel slides={props.heading.includes('BLOG') ? blogSlides : slides} />
                </div>
            </div>
        </div>
    );
};




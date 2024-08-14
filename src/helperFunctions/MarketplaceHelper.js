import { collection, getDoc, getDocs, doc } from "@firebase/firestore";
import { db } from "../config/firebase";
import axios from "axios";
import { gymList, cityList } from "../components/Databases";

/*
 * Fetch Top 3 Gyms in user's city
 */
export const fetchTopGyms = async () => {
    console.log('Calling fetchCityWiseData');
    const cityWiseData = [];
    
    try {
        const citiesSnapshot = await getDocs(collection(db, cityList));
        console.log('citiesSnapshot : ', citiesSnapshot);
        console.log('Number of cities: ', citiesSnapshot.docs.length);

        if (citiesSnapshot.empty) {
            console.log('No cities found.');
            return cityWiseData;
        }

        for (const cityDoc of citiesSnapshot.docs) {
            const city = cityDoc.id;
            let userCount = 0;
            console.log(`Fetching gyms for city: ${city}`);
            
            const gymsSnapshot = await getDocs(collection(db, cityList, city, gymList));
            console.log(`Number of gyms in ${city}: `, gymsSnapshot.docs.length);

            if (gymsSnapshot.empty) {
                console.log(`No gyms found in city: ${city}`);
                continue;
            }

            for (const gymDoc of gymsSnapshot.docs) {
                const gymName = gymDoc.id;
                console.log(`Fetching attendance for gym: ${gymName} in city: ${city}`);

                const attendanceSnapshot = await getDocs(collection(db, cityList, city, gymList, gymName, 'Attendance'));
                console.log(`Number of attendance records for gym: ${gymName} in city: ${city}: `, attendanceSnapshot.docs.length);

                if (attendanceSnapshot.empty) {
                    console.log(`No attendance records found for gym: ${gymName} in city: ${city}`);
                    continue;
                }

                for (const attendanceDoc of attendanceSnapshot.docs) {
                    const date = attendanceDoc.id;
                    const usersSnapshot = await getDocs(collection(db, cityList, city, gymList, gymName, 'Attendance', date, 'Users'));
                    userCount += usersSnapshot.size;
                    console.log(`Attendance on ${date} for gym: ${gymName} in city: ${city}: ${usersSnapshot.size} users`);
                }
            }

            cityWiseData.push({
                city: city,
                users: userCount
            });
            console.log(`Total users for city: ${city}: ${userCount}`);
        }

        console.log('Final cityWiseData: ', cityWiseData);
        return cityWiseData;
    } catch (error) {
        console.error('Error fetching city-wise data: ', error);
        return cityWiseData;
    }
};

// Fetch Top Blogs
export const fetchAllBlogs = async () => {
    const blogs = [];
    const blogSnapshot = await getDocs(collection(db, 'blogs'));
    for (const blog of blogSnapshot.docs) {
        const blogData = blog.data();
        blogs.push({
            name: blogData.title,
            content: blogData.content,
            image: blogData.image?blogData.image:null,
            location: blogData.author,
            time: blogData.timestamp
        });
    }
    return blogs;
};

// Fetch all Gyms
export const fetchAllGyms = async (city) => {
    const gymListData = [];
    const cityGymSnapshot = await getDocs(collection(db, cityList, city.toLowerCase(), gymList));
    for (const gym of cityGymSnapshot.docs) {
        const gymData = gym.data();
        gymListData.push({
            city: city.toLowerCase(), 
            gymName: gym.id, 
            name: gymData.gymDisplayName,
            gymDisplayName: gymData.gymDisplayName,
            location: gymData.cityDisplayName,
            rating: gymData.rating,
            NoOfReview: gymData.NoOfReview,
            locality: gymData.locality,
            image: gymData.Portfolio==='<url>'?['']:gymData.Portfolio
        });
    }
    return gymListData;
};

// Fetch Gym Data of selected gym

// Get User City
export async function getLocation() {
    // it will return the following attributes:
    // country, countryCode, regionName, city, lat, lon, zip and timezone
    const res = await axios.get("http://ip-api.com/json");
    return res.data.city
}

/**
 * Helps in fetching all the gym data
 * Needed for Product Portfolio Page + Buying the membership
 * @param {String} city
 * @param {String} gymName
 */
export const fetchGymData = async (city, gymName) => {
    console.log('Data : ', city, " : ", gymName);

    try {
        // Create a reference to the gym document
        const gymRef = doc(db, cityList, city, gymList, gymName);
        const gymDoc = await getDoc(gymRef);

        if (gymDoc.exists()) {
            return gymDoc.data();
        } else {
            console.log('No Gym Found');
            throw new Error('404: No Gym Found');
        }
    } catch (error) {
        console.error('Error fetching gym data:', error.message);
        throw error;
    }
};
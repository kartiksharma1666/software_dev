/**
 * @return  :   current time
 */
export const getTime = () => {
    const now = new Date();

    const isoString = now.toISOString();
    return isoString.slice(0, -1) + 'Z'; // Remove the last character (Z) and append it again to ensure consistent format;
}

/**
 * Returns today's date
 * @format  : YYYY-MM-DD
 * @return  : Today's Date
 */
export const getDate2 = () => {
    const now = new Date();

    // Get Today's Date 
    return now.toISOString().split('T')[0];  // Outputs: '2024-05-22'
}

/**
 * Returns a Date object for today's date in DD-MM-YYYY format with the current time
 * @return {Date} - Date object
 */
export const getDate3 = () => {
    const now = new Date();

    // Extract the current date components using toLocaleString
    const day = String(now.toLocaleString('en-GB', { day: '2-digit' }));
    const month = String(now.toLocaleString('en-GB', { month: '2-digit' }));
    const year = now.toLocaleString('en-GB', { year: 'numeric' });

    // Extract current time components using native methods
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Create a Date object with the current date and time
    const timestamp = new Date(year, parseInt(month) - 1, parseInt(day), hours, minutes, seconds, milliseconds);

    return timestamp; // Returns Date object with the current date and time
};

/**
 * Returns today's date
 * @format  : DD-MM-YYYY
 * @return  : Today's Date
 */
export const getDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    return `${day}-${month}-${year}`;  // Outputs: '22-05-2024'
}


/**
 * Gets Year Month and Date individually
 * @param   : void
 * @return  : Year, Month and Date
 */
export const getCalendar = () => {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const date = String(now.getDate()).padStart(2, '0');

    // Combine year, month, and date
    return {year, month, date};
}

/**
 * Refines the Data according to the database
 */
export const refineData = (myData) => {
    const refinedData = { ...myData }; // Create a shallow copy of myData

    if (myData.city) {
        refinedData.city = myData.city.toLowerCase().replace(/\s+/g, '');
    }
    if (myData.gymName) {
        refinedData.gymName = myData.gymName.toLowerCase().replace(/\s+/g, '');
    }
    return refinedData;
};

/**
 * Capitalises first letter of every word
 * @param {String} word
 * @returns {String} Capitalised Word
 */
export const capitalizeFirstLetter = (word) => {
    return word.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Formats everyword by deleting spaces and converting to lowercase letters
 * @param {String} word
 * @returns {String} formatted word
 */
export const formatWordToLowerCase = (word) => {
    return word.toLowerCase().replace(/\s+/g, '');
}

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };
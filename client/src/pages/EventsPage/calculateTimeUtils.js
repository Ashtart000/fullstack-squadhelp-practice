export const calculateRemainingValues = (remainingTime) => {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
};

// RemainingWidth max 100h or 100m

export const calculateRemainingWidthInHours = (remainingTime) => {
    return Math.ceil(remainingTime / (1000 * 60 * 60));
};

export const calculateRemainingWidthInMinutes = (remainingTime) => {
    return Math.ceil(remainingTime / (1000 * 60)) > 100 ? 100 : Math.ceil(remainingTime / (1000 * 60));
};

export const calculateFillWidth = (remainingWidth) => {
    return `${100 - remainingWidth}%`;
};


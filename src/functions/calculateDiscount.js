export default function calculateDiscount(size, participants){
    const peoplePerFivePercentSmall = 5;
    const peoplePerFivePercentMedium = 7;
    const peoplePerFivePercentLarge = 10;

    let discount = 0;

    if(size === "small") discount =  parseInt(participants / peoplePerFivePercentSmall) * 5;
    if(size === "medium") discount = parseInt(participants / peoplePerFivePercentMedium) * 5;
    if(size === "large") discount = parseInt(participants / peoplePerFivePercentLarge) * 5;
    
    return discount < 30 ? discount : 30;
}
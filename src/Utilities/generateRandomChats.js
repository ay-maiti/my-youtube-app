import { chatTextList, firstNamesList, lastNamesList } from "./chatData";
export const generateRandomUser = ()=>{
    const randomFirstName = firstNamesList[Math.floor(Math.random() * firstNamesList.length)]; 
    const randomLastName = lastNamesList[Math.floor(Math.random() * lastNamesList.length)];
    const randomName = randomFirstName + " " + randomLastName;
    return randomName;
}

export const generateRandomMessage = ()=>{
    //credit- https://type.fit/api/quotes   
    const randomText = chatTextList[Math.floor(Math.random() * chatTextList.length)];
    return randomText;
}
export const createRandomNumber = (maxNumber) => {
    const  numbers = "0123456789"
    if(!maxNumber) maxNumber = numbers.length 
    const randomNumber = Math.floor(Math.random() * maxNumber)
    return randomNumber
}
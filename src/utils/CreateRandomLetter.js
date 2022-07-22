export const createRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPRSTUVWXYZ"
    const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length))
    return randomLetter
}
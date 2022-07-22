export const createRandomTime = () => {
    let hours = Math.floor(Math.random() * 24).toString()
    hours.length < 2 && (hours = "0" + hours)
    let minutes = Math.floor(Math.random() * 60).toString()
    minutes.length < 2 && (minutes = "0" + minutes)
    minutes.length < 2 && (minutes = "0" + minutes)
    return hours+":"+minutes
}
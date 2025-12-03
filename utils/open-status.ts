
const OPEN_SCHEDULES = [
    {
        day: 0,
        open: "08:00",
        close: "23:59"
    },
    {
        day: 1,
        open: "08:00",
        close: "23:59"
    },
    {
        day: 2,
        open: "12:45",
        close: "23:59"
    },
    {
        day: 3,
        open: "08:00",
        close: "23:59"
    },
    {
        day: 4,
        open: "08:00",
        close: "23:59"
    },
    {
        day: 5,
        open: "08:00",
        close: "23:59"
    },
    {
        day: 6,
        open: "08:00",
        close: "23:59"
    }
]

const timeToMinutes = (time : string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
}


export const isRestaurantOpen = () => {
    const now = new Date();
    const today = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const schedule = OPEN_SCHEDULES.find(schedule => schedule.day === today);
    if (!schedule) return false;

    const openMinutes = timeToMinutes(schedule.open);
    const closeMinutes = timeToMinutes(schedule.close);

    return currentTime >= openMinutes && currentTime <= closeMinutes;
}
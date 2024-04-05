export function getCurrentDate(string: string): string {
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth() +1
    const year = now.getFullYear()
    return `${day}${string}${month}${string}${year}`
}

export function getDaysInMonth(month: number, year: number): number {
    const day = new Date(year, month, 0).getDate()
    return day
}

export const checkDay = (date: string): boolean => {
    const [day, month, year] = date.split("/").map(Number)
    const isWeekend = new Date(year, month-1, day).getDate()
    if(isWeekend === 0 || isWeekend === 6) return true
    else return false
}

export const now = (): string => {
    const now = new Date()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    return `${hours}:${minutes}`
}

export const dayCount = (): number => {
    const now: any = new Date()
    const yearBegin: any = new Date(now.getFullYear(), 0, 0)
    console.log(now.getDate())
    const days = Math.floor((now - yearBegin) / (24 * 60 * 60 * 1000))
    return days
}

export const calculate_age = (birthday: Date): number => {
    const now = new Date()
    var age: number = now.getFullYear() - birthday.getFullYear()
    if(now.getMonth() < birthday.getMonth() || (now.getMonth() < birthday.getMonth() && now.getDay() < birthday.getDay())) age--
    return age
}

export const startOfWeek = (date: Date): Date => {
   const dayStart = new Date(date)
   dayStart.setDate(date.getDate() - date.getDay()+1)
   return dayStart
}

export const endOfMonth = (date: Date): number => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const nextMonth = new Date(year, month + 1, 0)
    return nextMonth.getDate()
}

export const countDownNewYear = (date: any): number => {
    const newYear: any = new Date(date.getFullYear()+1,0,1)
    const days = Math.floor((newYear - date) / (24 * 60 * 60 * 1000))
    return days
}

export const ex9 = (time: string, add: number): string =>{
    const [hours, minutes, seconds] = time.split(":").map(Number)
    const timeProcess = hours * 3600 +  minutes * 60 +  seconds + add 
    const newHours = Math.floor(timeProcess / 3600)
    const newMinute =  Math.floor((timeProcess % 3600) / 60)
    const newSecond = timeProcess % 60
    return `${newHours}:${newMinute}:${newSecond}`
}

interface Obj {
    name: string,
    age: number,
    isStatus: boolean,
    a: {
        a: [number, number, number],
        b: {
            c: number
        }
    },
    c: ['', '', ''],
}
const obj = {
    name: "trung",
    age: 18,
    isStatus: true,
    a: {
        a: [1,2,3],
        b: {
            c: 2
        }
    },
    c: ['a', 'b', 'c']

}

export const resetObject = (object): Obj => {
    object.name = ""
    object.age = 0
    object.isStatus = false
    object.c = ['','','']
    object.a = {
        a: [0, 0, 0],
        b: {
            c: 0
        }
    }
    return object
}



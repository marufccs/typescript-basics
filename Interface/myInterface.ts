interface Hacker {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

const Maruf: Hacker = {
    dbId: 22, email: 'g@gmail.com', userId: 2211, 
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: 'lol', off: 2) => {
        return 10
    }
}
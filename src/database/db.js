const barbers = [
    {
        name: "jemala jemalashvili",
        address: "tbilisi 2a some qucha",
        email: "jemala@yahoo.com",
        price: "69$ per hr",
        phone: "577 69 42 00",
        likes: 15,
        dislikes: 3,
        id: 1
    },
    {
        name: "mariami abrulashvili",
        address: "tbilisi 2a some other qucha",
        email: "pewpaw@yahoo.com",
        price: "121$ per hr",
        phone: "577 00 42 00",
        likes: 0,
        dislikes: 30,
        id: 2
    }
]

const users = [
    {
        id: 0,
        userName: "CJ",
        email: "CJ@gmail.com",
        password: "123",
        likedBarbers: [1],
        dislikedBarbers: [2]
    }
]

export const likeBarber = (userId, barberId) => {
    const user = { ...users.find(u => u.id == userId) };
    const barber = user.dislikedBarbers.indexOf(barberId);
    const barb = { ...barbers.find(b => b.id == barberId) };

    if (user.likedBarbers.indexOf(barberId) == -1) {
        console.log("in if");
        user.likedBarbers.push(barberId);
        barb.likes++;
        updateBarbers(barb);
        if (barber >= 0) {
            removeBarberDislike(userId, barberId);
        }
    }
    updateUsers(user);

}
export const dislikeBarber = (userId, barberId) => {
    const user = { ...users.find(u => u.id == userId) };
    const barber = user.likedBarbers.indexOf(barberId);
    const barb = { ...barbers.find(b => b.id == barberId) };

    if (user.dislikedBarbers.indexOf(barberId) == -1) {
        user.dislikedBarbers.push(barberId);
        barb.dislikes++;
        updateBarbers(barb);
        if (barber >= 0) {
            removeBarberLike(userId, barberId);
        }
    }
    updateUsers(user);
}

export const removeBarberLike = (userId, barberId) => {
    const user = { ...users.find(u => u.id == userId) };
    const barb = user.likedBarbers.indexOf(barberId);
    const barber = { ...barbers.find(b => b.id == barberId) };
    barber.likes--;

    user.likedBarbers.splice(barb, 1);
    updateUsers(user);
    updateBarbers(barber);
}
export const removeBarberDislike = (userId, barberId) => {
    const user = { ...users.find(u => u.id == userId) };
    const barb = user.dislikedBarbers.indexOf(barberId);
    const barber = { ...barbers.find(b => b.id == barberId) };
    barber.dislikes--;

    user.dislikedBarbers.splice(barb, 1);
    updateUsers(user);
    updateBarbers(barber);
}


export const updateUsers = (user) => {
    const index = users.findIndex(u => u.id == user.id);
    users.splice(index, 1, user);
}

export const updateBarbers = (barber) => {
    const index = barbers.findIndex(b => b.id == barber.id);
    barbers.splice(index, 1, barber);
}

export const updateBarbersLikes = (barber) => {
    const index = barber.findIndex(u => u.id == barber.id);
    barbers.splice(index, 1, barber);
}

export const userHasLiked = (userId, barberId) => {
    return users.find(u => u.id == userId).likedBarbers.indexOf(barberId) >= 0;
}
export const userHasDisLiked = (userId, barberId) => {
    return users.find(u => u.id == userId).dislikedBarbers.indexOf(barberId) >= 0;
}

export const getBarbers = () => {
    return [...barbers];
}

export const addBarber = (barber) => {
    barbers.push({ ...barber, id: new Date().getTime(),likes:0,dislikes:0 });
}

export const loginUser = (user) => {
    return users.find(u => u.email == user.email && u.password == user.password);
}

export const addUser = (user) => {
    return users.push({
        ...user, id: new Date().getTime(), likedBarbers: [],
        dislikedBarbers: []
    })
}
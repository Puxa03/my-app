import { dislikeBarber, getBarbers, likeBarber, removeBarberDislike, removeBarberLike, userHasDisLiked, userHasLiked } from "../../database/db";
import { Container } from "./styles";
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md';
import { RiThumbDownFill, RiThumbUpFill } from 'react-icons/ri';
import { useState } from "react";
function Home({ user }) {
    const [barbers,setBarbers]=useState(getBarbers());

    
    const removeLike = (barberId) => {
        removeBarberLike(user.id,barberId);
        setBarbers(getBarbers())
    }
    const addLike = (barberId) => {
        likeBarber(user.id,barberId)
        setBarbers(getBarbers())
    }

    const removeDislike = (barberId) => {
        removeBarberDislike(user.id,barberId);
        setBarbers(getBarbers())
    }

    const addDislike = (barberId) => {
        dislikeBarber(user.id,barberId);
        setBarbers(getBarbers())
    }

    return (
        <Container>
            <ul>
                {
                    barbers
                        .map(barber =>
                            <li key={barber.id}>
                                <p>name: {barber.name}</p>
                                <p>email: {barber.email}</p>
                                <p>address: {barber.address}</p>
                                <p>phone: {barber.phone}</p>
                                <p>price: {barber.price}</p>
                                <p>likes: {barber.likes}</p>
                                <p>dislikes:{barber.dislikes} </p>
                                {
                                    user ? <ul>
                                        <li>
                                            {
                                                userHasLiked(user.id, barber.id) ?
                                                    <RiThumbUpFill onClick={() => removeLike(barber.id)} />
                                                    :
                                                    <MdOutlineThumbUp onClick={() => addLike(barber.id)} />

                                            }

                                        </li>
                                        <li>
                                            {
                                                userHasDisLiked(user.id, barber.id) ?
                                                    <RiThumbDownFill onClick={() => removeDislike(barber.id)} />
                                                    :
                                                    <MdOutlineThumbDown onClick={() => addDislike(barber.id)} />
                                            }

                                        </li>
                                    </ul>
                                        :
                                        ""
                                }
                            </li>
                        )
                }
            </ul>
        </Container>
    );
}

export default Home;
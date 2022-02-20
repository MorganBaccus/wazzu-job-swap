import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
//import database from "./firebase";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "dog walk",
            url:
                "https://images.wagwalkingweb.com/media/articles/care/why-is-my-dog-pain-when-walking/why-is-my-dog-pain-when-walking.jpg",
        },
        {
            name: "car wash",
            url:
                "https://scoopempire.com/wp-content/uploads/2017/07/yXR9VKN.jpg",
        }
    ]);

    useEffect(() => {


    }, []);

    return (
        <div>
            <h1>Tinder cards</h1>

            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            className="card"
                            style={{backgroundImage: `url(${person.url})`}}
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>

                ))}
            </div>
        </div>
    );
}

export default TinderCards;
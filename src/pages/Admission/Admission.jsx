import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://task1-server-arbayezid.vercel.app/college')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="my-20">
            <h2 className="text-3xl text-center font-bold mb-10">Click For Apply</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    cards.map(card => <div key={card._id}>
                        <Link to={`/admission/${card._id}`}>
                            <p className="p-2 bg-gray-300 text-center font-bold rounded-lg">{card.college_name}</p>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Admission;
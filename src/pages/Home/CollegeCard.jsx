import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <div className="search-box text-center my-10">
                <input type="text" className="p-3 rounded-lg" placeholder='Type here'
                />
                <button className='btn rounded-lg ml-2'>Search</button>
            </div>
            <div className="grid lg:grid-cols-3">
                {
                    cards.slice(0,3).map(singleCard => <div key={singleCard._id} className="card w-96 bg-base-100 shadow-xl m-5 relative">
                        <figure><img src={singleCard.college_image} alt="Shoes" className="h-[300px] w-full" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title text-gray-500">Name: {singleCard.college_name}</h2>
                            <p className="text-gray-500"><span className="font-semibold">Admission Date:</span> {singleCard.admission_dates}</p>
                            <p className="text-gray-500"><span className="font-semibold">Events:</span> {singleCard.events}</p>
                            <p className="text-gray-500"><span className="font-semibold">Sports:</span> {singleCard.sports}</p>
                            <p className="text-gray-500"><span className="font-semibold">Research History:</span> {singleCard.research_history}</p>
                            <div className="card-actions mt-5">
                                <Link to={`/${singleCard._id}`}>
                                <button className="btn bg-gray-400 btn-block absolute bottom-0 left-0 rounded-none">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CollegeCard;
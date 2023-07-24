import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const College = () => {
    const [cards,setCards] = useState([])

    useEffect(() =>{
        fetch('https://task1-server-arbayezid.vercel.app/college')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    
    return (
        <div>
            <div className="grid lg:grid-cols-3">
                {
                    cards.map(singleCard => <div key={singleCard._id} className="card w-96 bg-base-100 shadow-xl m-5 relative">
                        <figure><img src={singleCard.college_image} alt="Shoes" className="h-[300px] w-full" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title text-gray-500">Name: {singleCard.college_name}</h2>
                            <p className="text-gray-500"><span className="font-semibold">Admission Date:</span> {singleCard.admission_dates}</p>
                            <p className="text-gray-500"><span className="font-semibold">Ratings:</span> {singleCard.ratings}</p>
                            <p className="text-gray-500"><span className="font-semibold">Number of Research:</span> {singleCard.number_of_research}</p>
        
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

export default College;
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCardDetails = () => {
    const [data, setData] = useState({})
    const dynamic = useParams()
    const dynamicId = dynamic.id
    const loadedData = useLoaderData()

    useEffect(() =>{
        if (loadedData) {
            const detailsData = loadedData.find(dt => dt._id == dynamicId);
            setData(detailsData)
        }
    },[dynamicId, loadedData])

    const {college_image, college_name, admission_dates, events, research_history, sports} = data
    return (
        <div className="lg:flex mt-10  shadow-xl bg-slate-50 rounded-xl">
            <div className='w-full' >
                <img src={college_image} className='rounded-xl ml-10 mt-10  h-3/4' alt="Shoes" />
            </div>
            <div className="card-body ml-10">
                <h2 className="text-lg"><span className='font-bold text-2xl'>College Name:</span> {college_name}</h2>
                <p><span className='font-bold text-xl'>Events:</span> {events}</p>
                <p><span className='font-bold text-xl'>Sports:</span> {sports}</p>
                <p><span className='font-bold text-xl'>Admission Dates:</span> {admission_dates}</p>
                <p><span className='font-bold text-xl'>Research History:</span> {research_history}</p>
            </div>
        </div>
    );
};

export default SingleCardDetails;
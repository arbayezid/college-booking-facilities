import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCardDetails = () => {
    const [data, setData] = useState({})
    const dynamic = useParams()
    const dynamicId = dynamic.id
    const loadedData = useLoaderData()

    useEffect(() => {
        if (loadedData) {
            const detailsData = loadedData.find(dt => dt._id == dynamicId);
            setData(detailsData)
        }
    }, [dynamicId, loadedData])

    const { college_image, college_name, admission_dates, event_details, research_history, sports_details } = data
    return (
        <div className="lg:flex mt-10  shadow-xl bg-slate-50 rounded-xl">
            <div className='w-full' >
                <img src={college_image} className='rounded-xl ml-10 mt-10  h-3/4' alt="Shoes" />
            </div>
            <div className="card-body ml-10">
                <h2 className="text-lg"><span className='font-bold text-2xl'>College Name:</span> {college_name}</h2>
                <p><span className='font-bold text-xl'>Admission Dates:</span> {admission_dates}</p>
                <p><span className='font-bold text-xl'>Event Details:</span> {event_details}</p>
                <p><span className='font-bold text-xl'>Sports Details:</span> {sports_details}</p>
                <p><span className='font-bold text-xl'>Admission Proccess:</span> The admission process for {college_name} typically involves meeting eligibility criteria, filling out an application form, appearing for an admission test covering relevant subjects, and getting selected based on merit. Once selected, candidates need to confirm their seats by paying the required fees and attending the official admission and orientation process. For precise details, refer to the institutes official website or prospectus.</p>
                <p><span className='font-bold text-xl'>Research History:</span> {research_history}</p>
            </div>
        </div>
    );
};

export default SingleCardDetails;
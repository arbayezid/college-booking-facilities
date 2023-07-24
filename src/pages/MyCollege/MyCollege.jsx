import { useEffect, useState } from "react";

const MyCollege = () => {
    const [appliedColleges, setAppliedColleges] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/applyCollege')
            .then(res => res.json())
            .then(data => setAppliedColleges(data))
    }, [])

    return (
        <div className="my-20">
            {
                appliedColleges.map(singleCollege => <div key={singleCollege._id} className="lg:flex mt-10 md:w-1/2 mx-auto shadow-xl bg-slate-50 rounded-xl">
                    <div>
                        <img src={singleCollege.photoURL} className='rounded-xl ml-10 mt-10  h-3/4' alt="Shoes" />
                    </div>
                    <div className="card-body ml-10">
                        <h2 className="text-lg"><span className='font-bold text-2xl'>Name:</span> {singleCollege.name}</h2>
                        <p><span className='font-bold text-xl'>College Name:</span> {singleCollege.collegeName}</p>
                        <p><span className='font-bold text-xl'>Subject:</span> {singleCollege.subject}</p>
                        <p><span className='font-bold text-xl'>Email:</span> {singleCollege.email}</p>
                        <p><span className='font-bold text-xl'>Phone:</span> {singleCollege.phone}</p>
                        <p><span className='font-bold text-xl'>Address:</span> {singleCollege.address}</p>
                        
                        <p><span className='font-bold text-xl'>Date of Birth:</span> {singleCollege.dateOfBirth}</p>
                        
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCollege;
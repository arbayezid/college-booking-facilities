import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AdmissionDetails = () => {

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

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://task1-server-eight.vercel.app/applyCollege', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Applied',
                        text: 'College Apply successfull',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
            })
    }

    return (
        <div className="my-20">
            <h2 className="text-3xl text-center mb-10 font-bold">Admission Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

                {/* register your input into the hook by invoking the "register" function */}
                <div className='grid grid-cols-2 gap-5'>
                    <input className='p-2 rounded-lg '  {...register("name")} placeholder='Enter Candidate Name' required />
                    
                    <input className='p-2 rounded-lg ' defaultValue={data.college_name} {...register("collegeName")} placeholder='Enter College Name' required/>

                    <input className='p-2 rounded-lg '  {...register("subject")} placeholder='Enter Subject Name' required />

                    <input className='p-2 rounded-lg'   {...register("email")} placeholder='Enter Candidate Email' required />

                    <input className='p-2 rounded-lg' {...register("phone")} placeholder='Enter Candidate Number' required />

                    <input className='p-2 rounded-lg' {...register("address")} placeholder='Enter Candidate Adress' required />

                    <input className='p-2 rounded-lg' {...register("dateOfBirth")} placeholder='Enter Candidate Dafe Of Birth' required />

                    <input className='p-2 rounded-lg' {...register("photoURL")} placeholder='Enter Candidate Photo URL' required />
                </div>

                <input type="submit" value='Submit' className='btn btn-block bg-gray-300 rounded-lg mt-10' />
            </form>
        </div>
    );
};

export default AdmissionDetails;
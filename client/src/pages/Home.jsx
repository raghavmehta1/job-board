import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MetaData } from '../components/MetaData'
import { useSelector, useDispatch } from 'react-redux';
import { JobCard } from '../components/JobCard';
import { getAllJobs } from '../actions/JobActions';

export const Home = () => {

    const [num, setNum] = useState(2);
    const dispatch = useDispatch()
    const { loading, allJobs } = useSelector(state => state.job)
    const [jobs, setJobs] = useState([])

    const data = [
        // ... (same image data)
    ]

    useEffect(() => {
        dispatch(getAllJobs())
    }, [dispatch])

    const convertDateFormat = (inputDate) => {
        const parts = inputDate.split('-');
        if (parts.length !== 3) {
            return "Invalid date format";
        }

        const day = parts[2];
        const month = parts[1];
        const year = parts[0];

        return `${day}-${month}-${year}`;
    }

    return (
        <>
            <MetaData title="Opportunity Hub" />
            <div className='min-h-screen md:px-20 px-3 pt-14 flex text-white bg-gray-950'>
                <div className='w-full flex pt-28 flex-col justify-start items-center gap-4'>

                    <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1'>
                        <div className='md:text-8xl text-6xl titleT'>OPPORTUNITY HUB</div>
                        <div className='flex justify-center items-center pt-1'>
                            <Link to="/jobs" className='font-semibold md:text-2xl text-lg blueCol md:py-3 py-2 px-6 md:px-10'>Browse Jobs</Link>
                        </div>
                    </div>
                    <div>
                        <p className='md:text-xl text-sm'>Your <span className='text-yellow-500'>gateway</span> to job opportunities.</p>
                    </div>

                    <div className='pt-[8rem] md:px-[1rem] px-[0rem] w-full'>
                        <div className='titleT pb-6 text-2xl'>
                            <p className='titleT'>Featured Jobs</p>
                        </div>
                        <div>
                            {
                                loading ?
                                    <div className='w-full flex justify-center items-center'>
                                        <span className="loader1"></span>
                                    </div> :
                                    <div>
                                        <div className='flex md:flex-row flex-col gap-3'>
                                            {allJobs && allJobs.length >= 4 ? (
                                                <>
                                                    <Link to={`/details/${allJobs[3]._id}`} className='flex gap-2 shadow-sm shadow-gray-800 border border-gray-700 md:w-[26rem] w-[21rem] p-2 flex-col hover:border-rose-500 transition duration-300 hover:scale-[1.02] hover:bg-slate-950'>
                                                        <div className='flex gap-3'>
                                                            <div className='w-[5rem] flex justify-center items-center'>
                                                                <img src={allJobs[3].companyLogo.url} alt={allJobs[3].title} className='w-[4rem]' />
                                                            </div>
                                                            <div>
                                                                <p className='text-xl'>{allJobs[3].title}</p>
                                                                <p className='text-lg'>{allJobs[3].companyName}</p>
                                                                <p className='text-sm'>{allJobs[3].description.slice(0, 30) + "..."}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex text-sm gap-8'>
                                                            <span>{convertDateFormat(allJobs[3].createdAt.slice(0, 10))}</span>
                                                            <span>
                                                                {allJobs[3].employmentType}
                                                            </span>
                                                            <span>
                                                                {allJobs[3].location}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`/details/${allJobs[5]._id}`} className='flex gap-2 shadow-sm shadow-gray-800 border border-gray-700 md:w-[26rem] w-[21rem] p-2 flex-col hover:border-rose-500 transition duration-300 hover:scale-[1.02] hover:bg-slate-950'>
                                                        <div className='flex gap-3 '>
                                                            <div className='w-[5rem] flex justify-center items-center'>
                                                                <img src={allJobs[5].companyLogo.url} alt={allJobs[5].title} className="w-[4rem]" />
                                                            </div>
                                                            <div>
                                                                <p className='text-xl'>{allJobs[5].title}</p>
                                                                <p className='text-lg'>{allJobs[5].companyName}</p>
                                                                <p className='text-sm'>{allJobs[5].description.slice(0, 30) + "..."}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex text-sm gap-8'>
                                                            <span>{convertDateFormat(allJobs[5].createdAt.slice(0, 10))}</span>
                                                            <span>
                                                                {allJobs[5].employmentType}
                                                            </span>
                                                            <span>
                                                                {allJobs[5].location}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`/details/${allJobs[2]._id}`} className='flex gap-2 shadow-sm shadow-gray-800 border border-gray-700 md:w-[26rem] w-[21rem] p-2 flex-col hover:border-rose-500 transition duration-300 hover:scale-[1.02] hover:bg-slate-950'>
                                                        <div className='flex gap-3'>
                                                            <div className='w-[5rem] flex justify-center items-center'>
                                                                <img src={allJobs[2].companyLogo.url} alt={allJobs[2].title} className="w-[4rem]" />
                                                            </div>
                                                            <div>
                                                                <p className='text-xl'>{allJobs[2].title}</p>
                                                                <p className='text-lg'>{allJobs[2].companyName}</p>
                                                                <p className='text-sm'>{allJobs[2].description.slice(0, 30) + "..."}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex text-sm gap-8'>
                                                            <span>{convertDateFormat(allJobs[2].createdAt.slice(0, 10))}</span>
                                                            <span>
                                                                {allJobs[2].employmentType}
                                                            </span>
                                                            <span>
                                                                {allJobs[2].location}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>

                    <div className='pt-20 flex flex-col gap-4 md:px-[1rem] px-[1rem]'>
                        <div className='text-2xl titleT'>
                            Companies on our site
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {
                                data.map((e, i) => (
                                    <div key={i}>
                                        <img src={e.link} className='w-[4rem]' alt="" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="pt-[7rem] pb-[10rem] md:px-[14rem] px-[1rem] text-center">
                        {/* Removed line */}
                    </div>

                </div>
            </div>
        </>
    )
}

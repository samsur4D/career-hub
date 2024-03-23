import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FetJObs = () => {

     const [jobs , setJobs] = useState([]);
     const [dataLength ,setDataLength] = useState(4)

     useEffect(() =>{
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
     },[])


    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, beatae?</p>
            </div>
          
            <div className="grid grid-cols-2 gap-6">
                  {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                  }
            </div>

            <div className="flex items-center justify-center mt-10 ">
            <div className={dataLength === jobs.length && ' hidden'}>
                <button 
                 onClick={()=> setDataLength(jobs.length)}
                className="bg-purple-400 px-10 py-3 rounded-3xl text-white font-bold">See All Jobs</button>
            </div>
            </div>

        </div>
    );
};

export default FetJObs;
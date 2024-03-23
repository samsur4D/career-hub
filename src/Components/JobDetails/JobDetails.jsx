import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInd = parseInt(id);
    const job = jobs.find(job => job.id === idInd)
    console.log(job);

    const handelAppliedJob = () =>{
        toast.success('okkkkkkkkkk')
    }



    return (
        <div>
            
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    {/* ------------------- */}
                         <div>
                         <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div>
      <h1 className="text-5xl font-bold">{job.company_name}</h1>
      <p className="py-6"><span className="font-bold">Description :</span>{job.job_description}</p>
      <p className="py-6"><span className="font-bold">Responsibility :</span>{job.job_responsibility}</p>
      <p className="py-6"><span className="font-bold">Educational Experience :</span>{job.educational_requirements}</p>
      <p className="py-6"><span className="font-bold">Experience :</span>{job.experiences}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
                         </div>
                    {/* -------------- */}
                </div>
                <div className="border">
                    <h2>Side Things</h2>
                    {/* ----- */}
                     <div>
                     <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
                     </div>
                    {/* ----- */}
                    <button onClick={handelAppliedJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
        
    );
};

export default JobDetails;
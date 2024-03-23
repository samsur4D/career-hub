import { MdLocationOn } from "react-icons/md";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id ,logo , job_title , company_name , remote_or_onsite , location ,  job_type , salary} = job;
    return (
        <div className="card  bg-base-100 shadow-xl mt-10 border border-[#e74c3c] p-10">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      
      {job_title}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p>{company_name}</p>
    <div className="">
          <button className="px-5 py-2 font-extrabold border rounded-2xl border-[#7E90FE] mr-3">{remote_or_onsite}</button>
          <button className="px-5 py-2 font-extrabold border rounded-2xl border-[#7E90FE] mr-3">{job_type}</button>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
        <button className="bg-purple-400 px-5 py-2 rounded-3xl">View Details</button>
        </Link>
    </div>
    <div className="flex gap-6">
    <div className="flex items-center">
          <h2><MdLocationOn className="text-2xl"/></h2>
          <p>{location}</p>
    </div>
    <div className="flex items-center">
          <h2><AiTwotoneDollarCircle className="text-3xl"></AiTwotoneDollarCircle></h2>
          <p>salary :{salary}</p>
    </div>
    </div>
  </div>
</div>
    );
};

export default Job;
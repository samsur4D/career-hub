import Banner from "../../Banner/Banner";
import CataList from "../../CataList/CataList";
import FetJObs from "../../FetJobs/FetJObs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CataList></CataList>
            <FetJObs></FetJObs>
            <h1>This Is Home</h1>
        </div>
    );
};

export default Home;
import { useParams } from "react-router-dom";
import RightSideNav from "../../components/Home/RightSideNav/RightSideNav";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";




const NewsDetails = () => {

    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const git = "https://github.com/joungjaehyun"
const notion ="https://www.notion.so/61b3512e47e148fc8226c443023e6ead"
const ContactPage = () => {
    return (  
        <div  className="bg-backImg bg-cover bg-no-repeat">
        <BasicLayout></BasicLayout>
        <div className=" text-center text-3xl font-bold font-serif">

            <Link to={git}>깃 허브로 바로가기 - {git}</Link>
            <br></br>
            <Link to={notion}>노션으로 바로가기 - {notion}</Link>
          <div className="flex justify-center items-center">
          <img  src={require('../image/backimage.jpg')} ></img>
          </div>
         </div>
      </div>
    );
}
 
export default ContactPage;
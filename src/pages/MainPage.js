import BasicLayout from "../layouts/BasicLayout";



const MainPage = () => {

    console.log("main go")
    return (
        <div  className="bg-backImg bg-cover bg-no-repeat">
          <BasicLayout></BasicLayout>
          <div className=" text-center text-3xl font-bold font-serif">
            <p>This is main Page</p>
            <p>It is Coding test assignment</p>
            <p>It has three page Main, About, and Contact </p>
            <p>When user clicks, page number and search URL is going to be changed </p>
            <p>About shows me who makes this program</p>
            <p>Conatact show link to my git and notion</p>
            <div className="flex justify-center items-center">
            <img  src={require('../image/backimage.jpg')} ></img>
            </div>
           </div>
        </div>
      );
}
 
export default MainPage;

import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    console.log("about go")
    return ( 
        <div  className="bg-backImg bg-cover bg-no-repeat">
        <BasicLayout></BasicLayout>
        <div className=" text-center text-3xl font-bold font-serif">
        
          <p>이름: 정재현 만 32세</p>
          <p>학력: 전문대졸 (캐나다) Seneca College Computer Programming & Analysis (CPA)</p>
          <p>성별: 남</p>
          <p>만든목적: 간단한 리액트 자기소개용 코드입니다. </p>
          <p>사용기술: react, react-router-dom, tailwind css</p>


          <div className="flex justify-center items-center">
          <img  src={require('../image/backimage.jpg')} ></img>
          </div>
         </div>
      </div>
     );
}
 
export default AboutPage;
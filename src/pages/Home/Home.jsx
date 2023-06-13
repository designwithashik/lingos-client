import CommonQuestions from "./CommonQuestions";
import Slider from "./Slider";
import TopClasses from "./TopClasses";
import TopInstructors from "./TopInstructors";

const Home = () => {
    
    return (
        <div>
           
            <Slider/>
            <div className="lg:px-11 px-7">
            <TopClasses />
            <TopInstructors />
            <CommonQuestions/>
            </div>
        </div>
    );
};

export default Home;
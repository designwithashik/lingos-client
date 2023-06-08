import PageTitle from "../../components/PageTitle";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
    const [allClasses] = useClasses()
            console.log(allClasses)
    return (
        
        <div>
            <PageTitle>Classes</PageTitle>
            
        </div>
    );
};

export default Classes;
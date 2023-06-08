import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
    const [allInstructors] = useInstructors();
    console.log(allInstructors)
    return (
        <div>
            
        </div>
    );
};

export default Instructors;
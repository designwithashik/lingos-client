import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
    const [allInstructors] = useInstructors();
    console.log(allInstructors)
    return (
        <div>
            {/* TODO: Hover effect */}
            <div className="flex justify-center items-center flex-wrap mx-auto gap-0">
            {allInstructors.map(instructor => {
                const {image, name, _id} = instructor
                return (<div key={_id}>
                    <img className="w-64 h-72 object-cover" src={image} alt="instructor" />
                    <h2>{name}</h2>
                </div>)
            })}
            </div>
        </div>
    );
};

export default Instructors;
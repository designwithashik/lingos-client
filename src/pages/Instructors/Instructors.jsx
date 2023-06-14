import { Slide } from "react-awesome-reveal";
import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
    const [allInstructors] = useInstructors();
    console.log(allInstructors)
    return (
        <div>
            <Slide>
                <h2 className="text-xl mb-7 text-center">Worldwide Famous Instructors</h2>
            </Slide>
            <div className="flex justify-center items-center flex-wrap mx-auto gap-3">
            {allInstructors.map(instructor => {
                const {image, name, _id, numClassesTaken} = instructor
                return (<div key={_id}>
                    <img className="w-64 h-72 object-cover" src={image} alt="instructor" />
                    <h2 className="text-lg">{name}</h2>
                    <p>Classes Taken: {numClassesTaken}</p>
                </div>)
            })}
            </div>
        </div>
    );
};

export default Instructors;
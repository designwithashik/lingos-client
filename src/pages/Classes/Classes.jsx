import PageTitle from "../../components/PageTitle";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
    const [allClasses] = useClasses()
    console.log(allClasses)
    return (

        <div>
            <PageTitle>Classes</PageTitle>

            <div className="flex justify-center items-center flex-wrap mx-auto gap-5">
                {allClasses.map(cls => {
                    const {image, name,instructor, _id}= cls
                    return ( <div key={_id} className="card w-96 h-72 image-full">
                    <figure><img src={image} alt="class" className="object-cover w-96 h-72" /></figure>
                    <div className="card-body">
                            <h2 className="card-title">{name}!</h2>
                            <p>{instructor}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>


        </div>
    );
};

export default Classes;
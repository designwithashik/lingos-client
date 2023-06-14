import useInstructors from "../../hooks/useInstructors";

const TopInstructors = () => {
    const [allInstructors] = useInstructors()
    return (
        <div className='mb-28 text-center'>
            <h2 className='text-3xl mb-3 font-bold '>Trending Instructors</h2>
            <p className='text-gray-500 mb-7'>A language class with learning capacity is a great thing for your summer time. Try any class at affordable price </p>

            <h2 className=' font-bold text-[#524fd5] text-xl mb-7'>Top Instructors</h2>
            <div className="carousel bg-[#524fd5] max-w-full carousel-center p-9 space-x-4 rounded-box text-[#524fd5]">
                {allInstructors.slice(0,6).map(instructor=><div key={instructor._id} className="carousel-item">
                    
                    <div>
                        <img  src={instructor.image} className="rounded-box h-[80%] w-72 object-cover" />
                        <p className={`p-5 mt-2 font-bold rounded-xl text-center bg-[#FFD6B0]`}>{instructor.name}
                            
                        </p>
                    </div>
   
  </div> )}
            </div>
        </div>
    );
};

export default TopInstructors;
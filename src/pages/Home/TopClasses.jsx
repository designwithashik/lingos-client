import useClasses from "../../hooks/useClasses";

const TopClasses = () => {
    const [allClasses] = useClasses()
    return (
        <div className='my-28'>
            <h2 className='text-3xl mb-3 font-bold text-center'>Trending Classes</h2>
            <p className='text-gray-500 mb-7 text-center'>A language class with learning capacity is a great thing for your summer time. Try any class at affordable price </p>

            <h2 className='text-center text-xl font-bold text-[#524fd5] '>Top Classes</h2>
            <div className="carousel max-w-full  carousel-center h-[500px] py-14 px-9 space-x-4 rounded-box ">
                {allClasses.slice(0,6).map(cls=><div key={cls._id} className="carousel-item">
                    
                    <div className="border-2 border-[#FFD6B0] rounded-box">
                        <img  src={cls.image} className="rounded-t-box h-[80%] w-72 object-cover" />
                        <p className={`p-5 font-bold rounded-b-box bg-[#FFD6B0]`}> <span className="text-lg text-[#524fd5]">{cls.name}</span>
                            <br />
                            Students: {cls.studentsEnrolled}
                            <br />
                            Price: {cls.price}</p>
                       
                    </div>
   
  </div> )}
            </div>
        </div>
    );
};

export default TopClasses;
import useClasses from "../../hooks/useClasses";

const TopClasses = () => {
    const [allClasses] = useClasses()
    return (
        <div className='my-28'>
            <h2 className='text-3xl mb-3 font-bold '>Trending Classes</h2>
            <p className='text-gray-500 mb-7'>A language class with learning capacity is a great thing for your summer time. Try any class at affordable price </p>

            <h2 className='text-center font-bold text-[#524fd5] mb-7'>Top Classes</h2>
            <div className="carousel bg-[#524fd5] max-w-full carousel-center p-9 space-x-4 rounded-box text-[#524fd5]">
                {allClasses.slice(0,6).map(cls=><div key={cls._id} className="carousel-item">
                    
                    <div>
                        <img  src={cls.image} className="rounded-box h-[80%] w-72 object-cover" />
                        <p className={`p-5 mt-2 font-bold rounded-box bg-[#FFD6B0]`}>{cls.name}</p>
                    </div>
   
  </div> )}
            </div>
        </div>
    );
};

export default TopClasses;

const PageBanner = () => {
    return (
        <div >
            <section className="flex font-bold text--500 bg-cover bg-center z-30 justify-center items-center  gap-5 p-5 " style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1521702813222-1943f3fb9c07?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c21pbGUsc3R1ZGVudHx8fHx8fDE2ODY1MDQ1MjQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800)`,
                backdropFilter: 'blur(10px)',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            
            }}>
                <div className="bg-slate-500 text-white bg-opacity-30 text-center gap-5 p-4 rounded-box">
                
                
               
            <p className="text-purple-600">Select your favorite classes</p>
            
            <p className="text-4xl w-full  mx-auto  border-y-4 p-6 my-5">Classes</p>

              
                </div>
            </section>
        </div>
    );
};

export default PageBanner;
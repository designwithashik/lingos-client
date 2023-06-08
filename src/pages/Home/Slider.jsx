
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://language-center.ancorathemes.com/wp-content/uploads/2016/10/01-home-1-slide3.jpg'} className="w-full" />
                    <div className="flex">
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle  bg-opacity-50 border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-opacity-50 border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={"https://language-center.ancorathemes.com/wp-content/uploads/2016/10/01-home-1-slide2.jpg"} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-opacity-50 border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-opacity-50 border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={"https://scuola.vamtam.com/wp-content/uploads/2019/11/Pic-17.jpg"} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-opacity-50 border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-opacity-50 border-none">❯</a>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Slider;
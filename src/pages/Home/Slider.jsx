const Slider = () => {
    return (
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full text-white">
            <div className=" font-normal lg:ml-11 absolute top-1/3">
                        <h2 className="text-5xl font-medium ">A <span className=" text-[#524FD5]">unique</span> approach <br /> to learning foreign <br /> languages online</h2>
                        <p className="my-4">Learn at your own pace, with lifetime <br /> access on mobile and desktop</p>
                        <p className="btn bg-[#524FD5] border-none text-white">Get Started</p>
            </div>
            <img
              src={'https://language-center.ancorathemes.com/wp-content/uploads/2016/10/01-home-1-slide3.jpg'}
              className="w-full"
            />
            <div className="flex"></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-opacity-50 border-none">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-opacity-50 border-none">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full text-white">
          <div className=" font-normal lg:ml-11 absolute top-1/3">
                        <h2 className="text-5xl font-medium ">Select <span className=" text-[#524FD5]">classes</span> from <br /> variant of teacher  <br />to learn foreign languages</h2>
                        <p className="my-4">Learn at your own pace, with lifetime <br /> access on mobile and desktop</p>
                        <p className="btn bg-[#524FD5] border-none text-white">Get Started</p>
            </div>
            <img
              src={'https://language-center.ancorathemes.com/wp-content/uploads/2016/10/01-home-1-slide2.jpg'}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-opacity-50 border-none">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-opacity-50 border-none">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className=" font-normal lg:ml-11 absolute top-1/3 text-[#524fd5]">
                        <h2 className="text-5xl font-medium">Practice <span className=" ">writing</span> from <br /> variant of exercises <br />to learn foreign languages</h2>
                        <p className="my-4 te">Learn at your own pace, with lifetime <br /> access on mobile and desktop</p>
                        <p className="btn bg-[#524FD5] border-none text-white">Get Started</p>
            </div>
            <img
              src={'https://scuola.vamtam.com/wp-content/uploads/2019/11/Pic-17.jpg'}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-opacity-50 border-none">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-opacity-50 border-none">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Slider;
  
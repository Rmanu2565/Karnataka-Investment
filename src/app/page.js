"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [hover, setHover] = useState(0)
  const [hover1, setHover1] = useState(0)
  const [clickVal, setClickVal] = useState(1)
  const carousel = [
    {
      image: "/image.png",
      text: "Karnataka: Hub of Innovation and Investment"
    },
    {
      image: "/image2.png",
      text: "Bengaluru Leads in Tech Startups and Funding"
    },
    {
      image: "/image3.png",
      text: "Karnataka’s Booming Industrial Growth"
    },
    {
      image: "/image4.png",
      text: "Investors Flock to Karnataka’s Thriving Ecosystem"
    },
    {
      image: "/image.png",
      text: "Karnataka: Hub of Innovation and Investment"
    },
    {
      image: "/image2.png",
      text: "Bengaluru Leads in Tech Startups and Funding"
    },
    {
      image: "/image3.png",
      text: "Karnataka’s Booming Industrial Growth"
    },
    {
      image: "/image4.png",
      text: "Investors Flock to Karnataka’s Thriving Ecosystem"
    },
  ]

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let direction = 1;
    const scrollStep = 5;
    const scrollDelay = 10;

    const maxScroll = () => container.scrollWidth - container.clientWidth - 10;

    const interval = setInterval(() => {
      const atEnd = container.scrollLeft >= maxScroll();
      const atStart = container.scrollLeft <= 5;


      if (atEnd) direction = -1;
      else if (atStart) direction = 1;

      container.scrollLeft += scrollStep * direction;
    }, scrollDelay);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (val) => {
    setClickVal(val)
    document.querySelector("#content")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>

      <div className="relative h-full w-full overflow-hidden ">

        <div>
          <video
            src="/Media5.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
        </div>
        <div className="absolute inset-0  -z-10" />

        <div className="bg-transparent py-5 px-20 relative z-10">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <div>
                <Image height={50}  width={50} src={"/Rectangle.png"} alt="Rect" />
              </div>
              <div>
                <Image height={200} width={130} src={"/logo 1.png"} alt="Logo" />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-full border-2 border-white px-2.5 py-2">
                <i className="fa-solid fa-magnifying-glass text-white"></i>
              </div>
              <div className="rounded-full border border-white px-10 py-2">
                <select disabled className="text-white bg-transparent">
                  <option>EN</option>
                </select>
              </div>
              <div className="rounded-full border border-white px-10 py-2">
                <p className="text-white"><i className="fa-solid fa-bars mr-2"></i>MENU</p>
              </div>
              <div className="rounded-full bg-white px-10">
                <button className="text-red-500 items-center mt-1 mb-2 font-semibold">Login</button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 my-20 mx-32 items-center">
            <div className="flex ">
              <div>
                <h1 className="text-6xl text-white font-bold leading-15">
                  Karnataka, India's <br /><span className="text-red-500">#1</span> Investment <br /> Destination
                </h1>
                <p className="text-white w-96 mt-10 text-lg leading-10">
                  Karnataka stands as India’s premier investment destination, offering unparalleled opportunities for growth and innovation.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div>
                <div onMouseEnter={(e) => { setHover(1) }} onMouseLeave={(e) => { setHover(0) }} onClick={(e) => { handleClick(1) }} className={`flex relative items-center px-10  ${hover == 1 ? "bg-red-500" : "bg-white/0"} backdrop-blur-xs rounded-3xl gap-8 border border-white w-[350px] py-10`}>
                  <div className={`rounded-full bg-red-500  ${hover == 1 ? "border border-white" : ""} w-16 h-16 flex justify-center items-center`}>
                    <Image height={25} width={25} src={'/Vector.png'} alt="Icon" />
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    About <br /> Karnataka
                  </h3>
                  <div className="border absolute top-2 right-2 w-8 h-8 flex justify-center items-center border-white rounded-full">
                    <i className="fa-solid fa-arrow-up text-white rotate-45 text-sm animate-bounce"></i>
                  </div>
                </div>


                <div onMouseEnter={(e) => { setHover(2) }} onMouseLeave={(e) => { setHover(0) }} onClick={(e) => { handleClick(2) }} className={`flex relative items-center mt-5 px-10 ${hover == 2 ? "bg-red-500" : "bg-white/20"} backdrop-blur-xs rounded-3xl gap-8 border border-white w-[350px] py-10`}>
                  <div className={`rounded-full bg-red-500 w-16  ${hover == 2 ? "border border-white" : ""} h-16 flex justify-center items-center`}>
                    <Image height={30} width={30} src={'/Vector1.png'} alt="Icon" />
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    Why invest in <br /> Karnataka?
                  </h3>
                  <div className="border absolute top-2 right-2 w-8 h-8 flex justify-center items-center border-white rounded-full">
                    <i className="fa-solid fa-arrow-up text-white rotate-45 text-sm animate-bounce"></i>
                  </div>
                </div>


                <div onMouseEnter={(e) => { setHover(3) }} onMouseLeave={(e) => { setHover(0) }} onClick={(e) => { handleClick(3) }} className={`flex relative items-center mt-5 px-10 ${hover == 3 ? "bg-red-500" : "bg-white/20"} backdrop-blur-xs rounded-3xl gap-8 border border-white w-[350px] py-10`}>
                  <div className={`rounded-full bg-red-500  ${hover == 3 ? "border border-white" : ""} w-16 h-16 flex justify-center items-center`}>
                    <Image height={30} width={30} src={'/Vector2.png'} alt="Icon" />
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    How to <br /> Invest?
                  </h3>
                  <div className="border absolute top-2 right-2 w-8 h-8 flex justify-center items-center border-white rounded-full">
                    <i className="fa-solid fa-arrow-up text-white rotate-45 text-sm animate-bounce"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >

      <div>
        <div className="relative">
          <div className="w-[1200px] absolute -top-16 left-1/2 -translate-x-1/2 mx-auto overflow-hidden py-3 border border-gray-700 bg-gray-900 rounded-xl">
            <div
              ref={containerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
            >
              {carousel.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[240px] bg-[#4E4E50] border border-white rounded-2xl flex  items-center gap-3 text-white font-semibold  transition-transform hover:scale-105 shadow-lg"
                >
                  <div className="w-full h-[120px] relative overflow-hidden rounded-l-2xl">
                    <Image
                      src={item.image}
                      alt={item.text}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-md text-center pr-3">{item.text}</p>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="content" className="m-20 mt-40 rounded-xl">
        <div className="relative  rounded-xl  px-20 py-20 bg-[url('/right.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-[#383838]/90" />
          <div className="relative z-10">
            <h2 className="text-3xl text-white font-bold leading-10 opacity-100">{clickVal == 1 ? "About" : clickVal == 2 ? "Why invest in" : "How to"} <br />{clickVal == 3 ? "Invest" : "Karnataka"}</h2>
            <p className="text-lg text-white font-light mt-5 w-1/2">
              Karnataka located in the south of India, is known for its rich heritage and tech innovation. It has made a global mark by creating opportunities and bringing India to the world stage.
            </p>
            <div className="mt-40 flex justify-between">
              <div onMouseEnter={(e) => { setHover1(1) }} onMouseLeave={(e) => { setHover1(0) }} className={`border border-white px-10 py-4 w-80 rounded-full ${hover1 == 1 ? "bg-red-500" : ""}`}>
                <div className="flex gap-8  ">
                  <p className="text-xl text-white text-center">State at a Glance </p>
                  <div className="border w-8 h-8 flex justify-center items-center border-white rounded-full">
                    <i className="fa-solid fa-arrow-up text-white rotate-45 text-sm animate-bounce"></i>
                  </div>
                </div>
              </div>
              <div onMouseEnter={(e) => { setHover1(2) }} onMouseLeave={(e) => { setHover1(0) }} className={`border border-white px-10 py-4 w-80 rounded-full ${hover1 == 2 ? "bg-red-500" : ""}`} >
                <div className="flex gap-8  ">
                  <p className="text-xl text-white text-center">History and Culture </p>
                  <div className="border w-8 h-8 flex justify-center items-center border-white rounded-full">
                    <i className="fa-solid fa-arrow-up text-white rotate-45 text-sm animate-bounce"></i>
                  </div>
                </div>
              </div>
              <div onMouseEnter={(e) => { setHover1(3) }} onMouseLeave={(e) => { setHover1(0) }} className={`${hover1 == 3 ? "bg-red-500" : ""} border border-white px-10 py-4 w-80 rounded-full`} >
                <div className="flex gap-3  ">
                  <p className="text-xl text-white text-center">Discover our Districts</p>
                  <div className="border w-8 h-8 flex justify-center items-center border-white rounded-full">
                    <i className="fa-solid fa-arrow-up text-white rotate-45 text-sm animate-bounce"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 rounded-bl-[100px] rounded-tr-[20px] shadow-[ -40px_40px_60px_-20px_rgba(0,0,0,0.5)] ">
            <Image className="rounded-bl-[100px]" alt="About US" height={450} width={450} src={'/7ed9791fecf086233b241e8d96679860d0102cdc.jpg'} />
          </div>
        </div>
      </div >

    </>
  );
}

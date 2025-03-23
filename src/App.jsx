import { useState, useEffect } from "react";
import { NavbarMobile } from "./Components/NavbarMobile";
import { CardsStep } from "./Components/CardsSteps/cardsStep";
import { Carousel } from "./Components/CarouselTestimonials/Carousel";
import { BtnStarted } from "./Components/ButtonStarted/BtnStarted";
import { Footer } from "./Components/Footer/Footer";

// Background Images
import bgTop from "./images/bg-tablet-pattern.svg";
import bgBottom from "./images/bg-tablet-pattern.svg";
import bgMobile from "./images/bg-simplify-section-mobile.svg";
import bgDesktop from "./images/bg-simplify-section-desktop.svg";
import imgIntro from "./images/illustration-intro.svg";
// Avatar Images
import avatarAnisha from "./images/avatar-anisha.png";
import avatarAli from "./images/avatar-ali.png";
import avatarRichard from "./images/avatar-richard.png";
import avatarShanai from "./images/avatar-shanai.png";

const testimonialsCarousel = [
  {
    avatar: avatarAnisha,
    name: "Anisha Li",
    description:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    avatar: avatarAli,
    name: "Ali Bravo",
    description:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    avatar: avatarRichard,
    name: "Richard Watts",
    description:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    avatar: avatarShanai,
    name: "Shanai Gough",
    description:
      " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

function App() {
  const [bgImage, setBgImage] = useState(bgMobile);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth < 1024 ? bgMobile : bgDesktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="w-full min-h-screen pt-9 font-primary overflow-hidden relative">
      <img
        className="absolute -top-12 -right-12 w-auto h-auto object-cover z-[-10] sm:max-w-[60%] lg:max-w-[35%]"
        src={bgTop}
        alt="Ilustración de fondo"
      />

      {/* Navbar Mobile */}
      <NavbarMobile />

      {/* Container Principal */}
      <div className="w-full relative mb-28 px-4 flex flex-col items-center justify-center md:px-40 lg:px-16 lg:flex-row-reverse lg:gap-x-14">
        <img
          className=" lg:max-w-[550px]"
          src={imgIntro}
          alt="Ilustración de fondo"
        />
        <div className="mt-9 text-center md:text-start p-2 lg:max-w-[450px]">
          <h1 className="text-3xl font-bold mb-3">
            Bring everyone together to build better products.
          </h1>
          <p className="text-GrayishBlue text-base mb-7">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <BtnStarted
            txtBtn="Get Started"
            style="bg-BrightRed text-VeryPaleRed py-3 px-7 hover:drop-shadow-3xl hover:opacity-75"
          />
        </div>
        <img
          className="absolute -bottom-24 -right-52 min-md:-left-60 w-auto h-auto object-cover z-[-10] sm:max-w-[60%] lg:max-w-[35%]"
          src={bgBottom}
          alt="Ilustración de fondo"
        />
      </div>

      {/* Container Secundario */}
      <div className="flex flex-col justify-center gap-14 my-20 md:flex-row px-4 lg:px-16">

        {/* Container What's different... */}
        <div className="text-center md:text-start p-2 lg:max-w-[450px]">
          <h2 className="text-3xl font-bold mb-3">
            What’s different about Manage?
          </h2>
          <p className="text-GrayishBlue text-base mb-6">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Container Steps */}
        <div className="flex flex-col gap-y-8 lg:max-w-[550px] md:px-4">
          <CardsStep
            txtNumber="01"
            txtTitle="Track company-wide progress"
            txtDescription="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <CardsStep
            txtNumber="02"
            txtTitle="Advanced built-in reports"
            txtDescription=" Set internal delivery estimates and track progress toward company 
          goals. Our customisable dashboard helps you build out the reports 
          you need to keep key stakeholders informed."
          />
          <CardsStep
            txtNumber="03"
            txtTitle="Everything you need in one place"
            txtDescription="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="px-5 text-center py-12">
        <h2 className="text-3xl font-bold mb-24">What they’ve said</h2>
        <Carousel slides={testimonialsCarousel} />
      </div>

      <BtnStarted
        txtBtn="Get Started"
        style="flex mx-auto bg-BrightRed py-3 px-7 text-VeryPaleRed hover:drop-shadow-3xl hover:opacity-75"
      />

      {/* Container Simplify... */}
      <div className="w-full h-[410px] lg:h-56 bg-BrightRed mt-20 text-center lg:text-start px-6 flex flex-col lg:flex-row lg:justify-between lg:px-40 justify-center items-center font-bold relative overflow-hidden">
        <h2 className="text-white text-5xl lg:w-[440px] lg:text-4xl">
          Simplify how your team works today.
        </h2>
        <BtnStarted
          txtBtn="Get Started"
          style="bg-white text-BrightRed py-3 px-7 hover:opacity-75 max-w-[135px] mt-8 z-10"
        />
        <img className="absolute left-0" src={bgImage} alt="Image background" />
        {/* <img className="absolute left-0 w-full" src={bgMobile}  srcSet={`${bgMobile} 768w, ${bgDesktop} 1024w`} sizes="(max-width: 1024px) 100vw, 100vw" alt="Image background"/> */}
        {/* <img className="absolute left-0 lg:hidden" src={bgMobile} alt="Image background Mobile" />
        <img className="absolute max-lg:hidden" src={bgDesktop} alt="Image background Desktop" /> */}
      </div>

      <Footer />
    </main>
  );
}

export default App;

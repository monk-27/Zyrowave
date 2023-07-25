import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative mt-12">
      <Hero />
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
       <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />

      <Feedback />
    </div>
    <div className="w-full h-72 mx-auto flex justify-center text-white text-lg font-bold pb-5">
      <Footer />
    </div>
  </div>
);

export default Page;

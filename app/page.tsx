import Image from "next/image";
import GradiantBackground from "./components/GradiantBackground";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative h-[860px]">
          <div className="absolute inset-0 h-[860px]">
            <GradiantBackground direction='right' height={860} />
          </div>
          <div className="z-[5] absolute inset-0 container mt-[69px]">
            <div className="flex gap-x-4">
              <div id="main" className="w-[895px]">
                <div className="py-[57px] flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26">
                    <path d="M 1.641 18.007 C 1.641 11.777 9.712 8.657 14.432 13.062 L 14.432 13.062 C 19.152 17.468 15.809 25 9.134 25 L 9.134 25 C 4.996 25 1.641 21.869 1.641 18.007 Z" fill="rgb(255, 255, 255)" strokeWidth="1.88" stroke="rgba(0,0,0,1)" strokeMiterlimit="10"></path>
                    <path d="M 15.97 14 C 10.77 9.203 14.453 1 21.806 1 L 21.806 1 C 26.365 1 30.061 4.409 30.061 8.615 L 30.061 8.615 C 30.061 15.4 21.17 18.797 15.97 14 Z" fill="rgb(0, 0, 0)"></path>
                  </svg>
                  <span className="text-[40px] leading-[27px] font-abel tracking-[.1em]">ARENA</span>
                </div>
                <div className="my-2.5 w-[567px]">
                  <div className="title">Discuss or Debate in Public via <span className="text-primary">Text</span></div>
                  <ul className="my-2.5 body list-disc ml-6">
                    <li> Create topic to discuss or debate in public </li>
                    <li> Invite or pay to anyone using Arena Links </li>
                    <li> Tap inot their Audience & let the public decide </li>
                    <li> Boost your reach by being on top of score board </li>
                    <li> Convert text into audio and video Podcast </li>
                  </ul>
                </div>
              </div>
              <div id="image" className="w-[300px] flex justify-center mt-10">
                <img src="/assets/Chatting.svg" className="h-[509px] " alt="Chatting" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-3 mt-32">
                <input type="email" name="email" id="email" className="px-3.5 py-3 border rounded-xl w-1/3 text-base" placeholder="Enter your email" />
                <button className="bg-primary text-white px-5 py-3 rounded-xl font-inter text-base">
                  Get Started
                </button>
              </div>
              <small className="font-inter text-sm text-secondary">Our Mission: Fight Misinformation and Promote Accountability</small>
            </div>
          </div>
        </div>

        <div className="relative h-[960px]">
          <div className="absolute inset-0 h-[960px]">
            <GradiantBackground direction='left' height={960} />
          </div>
          <div className="z-[5] absolute inset-0 container my-20 flex justify-between body">
            <div id="image" className="w-[400px] flex justify-center mt-10">
              <img src="/assets/Invite.svg" className="h-[800px] w-[360px]" alt="Invite" />
            </div>
            <div id="main" className="w-[795px] mt-40 flex items-center flex-col">
              <div className="title w-[438px] text-center">
                Invite anyone for <span className="text-primary">Free</span>
              </div>
              <ul className="my-[52px] body list-disc ml-6">
                <li>Select event type to time based or length based</li>
                <li>Request them to share the event in their social</li>
                <li>Make your offer irresistible by loading cash</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="relative h-[960px]">
          <div className="absolute inset-0 h-[960px]">
            <GradiantBackground direction='right' height={960} />
          </div>
          <div className="z-[5] absolute inset-0 container my-20 flex justify-between body">

            <div id="main" className="w-[795px] mt-40">
              <div className="title w-[581px]">
                Build your network, Boost your <span className="text-primary">Reach</span>
              </div>
              <ul className="my-[52px] body list-disc ml-6">
                <li>All texts will be available in each user profile</li>
                <li>Text can only be deleted if both parties aggree</li>
                <li>Find the cool people on hot topic</li>
              </ul>
              <div>
                <div className="flex items-center gap-x-3 mt-10">
                  <input type="email" name="email" id="email" className="px-3.5 py-3 border rounded-xl w-1/2 text-base" placeholder="Enter your email" />
                  <button className="bg-primary text-white px-5 py-3 rounded-xl font-inter text-base">
                    Get Started
                  </button>
                </div>
                <small className="font-inter text-sm text-secondary">Our Mission: Fight Misinformation and Promote Accountability</small>
              </div>
            </div>
            <div id="image" className="w-[400px] flex justify-center mt-10">
              <img src="/assets/Profile.svg" className="h-[800px] w-[360px]" alt="Profile" />
            </div>
          </div>
        </div>

        <div className="relative h-[445px]">
          <div className="absolute inset-0 h-[445px]">
            <GradiantBackground direction='left' height={445} />
          </div>
          
        </div>
      </div>
    </>
  );
}

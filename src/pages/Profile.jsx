import { Helmet } from "react-helmet";
import bobbywebb from "../assets/bobbywebb.jpg";
import davidharker from "../assets/davidharker.jpg";
import hannahwebster from "../assets/hannahwebster.jpg";
import heidiparker from "../assets/heidiparker.jpg";
import millieburton from "../assets/millieburton.jpg";
import johnharris from "../assets/johnharris.jpg";


function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Synapse Social - Bobby Webb</title>
        <meta
          name="description"
          content="Bobby Webb's profile page. Age: 32, Gender: Male, Occupation: Frontend Developer."
        />
        <meta
          name="keywords"
          content="HTML, Tailwind CSS, React, social media site,"
        />
        <meta name="author" content="Espen Henriksen Snerten" />
      </Helmet>


      <main className="bg-white p-4 flex flex-col min-h-screen items-center justify-center mx-auto max-w-7xl">
        <div className="flex flex-row w-full justify-start">
          <h3 className="text-2xl font-semibold text-black mb-4 tracking-wide">
            Bobby Webb
          </h3>
        </div>
        <div className="md:flex md:items-center justify-center gap-4 w-full">
          <div className="w-full md:w-4/5 relative">
            <img
              src={bobbywebb}
              alt="A picture of the man named Bobby Webb"
              className="rounded object-cover md:h-96"
            />
          </div>
          <div className="flex-col bg-slate-50 p-4 rounded w-full md:w-4/5 mt-4 md:mt-0 md:h-96">
            <h4 className="text-lg font-semibold">About me</h4>
            <p className="mt-4">Age: 32</p>
            <p className="mt-2">Gender: Male</p>
            <p className="mt-2">Occupation: Frontend Developer</p>
            <p className="mt-2">Email: <span className="text-blue-700 hover:font-semibold duration-100 transform cursor-pointer">bobbywebb@gmail.com</span></p>
            <div className="w-full md:w-full">
              <p className="mt-10 text-sm">
                Hi, my name is Bobby Webb. I am a versatile individual who finds
                his passion both in the world of technology and amidst the
                tranquility of nature. As a seasoned Frontend Developer, I have
                mastered the art of crafting seamless digital experiences that
                captivate users and bring their ideas to life.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:flex gap-8 w-full">
          <div className="space-y-4 bg-slate-50 p-4 rounded w-full md:w-96 md:-mb-0 mb-8">
            <h4 className="text-lg font-semibold">Contacts</h4>
            <div className="">
              <ul className="flex flex-row md:flex md:flex-col gap-8 md:gap-8 overflow-x-auto flex-nowrap ">
                <div className="flex flex-col md:flex md:flex-row items-center gap-2 cursor-pointer hover:font-semibold duration-100 transform">
                  <img
                    src={hannahwebster}
                    alt="A picture of the woman named Hannah Webster"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="truncate">Hannah Webster</p>
                </div>
                <div className="flex flex-col md:flex md:flex-row items-center gap-2 cursor-pointer hover:font-semibold duration-100 transform">
                  <img
                    src={heidiparker}
                    alt="A picture of the woman named Heidi Parker"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="truncate">Heidi Parker</p>
                </div>
                <div className="flex flex-col md:flex md:flex-row items-center gap-2 cursor-pointer hover:font-semibold duration-100 transform">
                  <img
                    src={millieburton}
                    alt="A picture of the woman named Millie Burton"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="truncate">Millie Burton</p>
                </div>
                <div className="flex flex-col md:flex md:flex-row items-center gap-2 cursor-pointer hover:font-semibold duration-100 transform">
                  <img
                    src={johnharris}
                    alt="A picture of the man named John Harris"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="truncate">John Harris</p>
                </div>
                <div className="flex flex-col md:flex md:flex-row items-center gap-2 cursor-pointer hover:font-semibold duration-100 transform">
                  <img
                    src={davidharker}
                    alt="A picture of the man named David Harker"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="truncate">David Harker</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="space-y-4 bg-slate-50 md:p-4 md:pr-20 md:pl-10 md:py-10 rounded flex flex-col  gap-4">
              <h4 className="text-lg font-semibold px-6 md:px-0 pt-4 md:pt-0">
                New posts
              </h4>
              <div className="space-y-2 border-2 border-t-blue-500 border-x-transparent border-b-transparent">
                <div className="flex items-center space-x-2 mt-4 px-4 md:px-0 cursor-pointer">
                  <img
                    src={hannahwebster}
                    alt="A picture of the woman named Hannah Webster"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <h5 className="font-semibold">Hannah Webster</h5>
                </div>
                <p className="px-6 md:px-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
              <div className="space-y-2 border-2 border-t-blue-500 border-x-transparent border-b-transparent">
                <div className="flex items-center space-x-2 mt-4 px-4 md:px-0 cursor-pointer">
                  <img
                    src={bobbywebb}
                    alt="A picture of the man named Bobby Webb"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <h5 className="font-semibold">Bobby Webb</h5>
                </div>
                <p className="px-6 md:px-0 pb-4">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className="flex mt-8 bg-slate-50 rounded">
              <form
                action=""
                className="md:flex md:flex-row flex flex-col items-center	 w-full"
              >
                <textarea
                  id="newpost"
                  rows="1"
                  className="w-11/12 md:mx-2 my-1 p-2 bg-gray-200 placeholder-black rounded align-middle	resize-none"
                  placeholder="What do you want to share..."
                ></textarea>
                <button className="w-11/12 md:w-2/5 my-1  md:mx-2 p-2 bg-blue-600 hover:bg-blue-700 duration-200 transform text-white rounded font-semibold">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;

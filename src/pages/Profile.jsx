import bobbywebb from "../assets/bobbywebb.jpg";
import davidharker from "../assets/davidharker.jpg";
import hannahwebster from "../assets/hannahwebster.jpg";
import heidiparker from "../assets/heidiparker.jpg";
import millieburton from "../assets/millieburton.jpg";
import johnharris from "../assets/johnharris.jpg";

function ProfilePage() {
  return (
    <>
      <main className="bg-white p-4 flex-col items-center justify-center mx-auto max-w-7xl">
        <h3 className="text-2xl font-bold text-black mb-4 tracking-wide	">
          Bobby Webb
        </h3>
        <div className="md:flex md:items-center justify-center">
          <img
            src={bobbywebb}
            alt="A picture of the man Bobby Webb"
            className="max-h-80 max-w-28 rounded md:mr-4 object-cover"
          />
          <div className="flex-col bg-slate-50 p-4 rounded">
            <h4 className="text-lg font-semibold">About me</h4>
            <p>Age: 32</p>
            <p>Gender: Male</p>
            <p>Occupation: Frontend Developer</p>
            <p className="text-sm">
              Hi, my name is Bobby Webb. I am a versatile individual who finds
              his passion both in the world of technology and amidst the
              tranquility of nature. As a seasoned Frontend Developer, I have
              mastered the art of crafting seamless digital experiences that
              captivate users and bring their ideas to life.
            </p>
          </div>
        </div>

        <div className="mt-16 md:flex gap-8">
          <div className="space-y-4 bg-slate-50 p-4 rounded w-full md:w-96 overflow-x-auto">
            <h4 className="text-lg font-semibold">Contacts</h4>

            <ul className="space-y-2 overflow-x-auto flex flex-row md:flex md:flex-col">
              <div className="flex flex-col md:flex md:flex-row items-center space-x-2">
                <img
                  src={hannahwebster}
                  alt="A picture of the woman Hannah Webster"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p>Hannah Webster</p>
              </div>
              <div className="flex flex-col md:flex md:flex-row items-center space-x-2">
                <img
                  src={heidiparker}
                  alt="A picture of the woman Heidi Parker"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p>Heidi Parker</p>
              </div>
              <div className="flex flex-col md:flex md:flex-row items-center space-x-2">
                <img
                  src={millieburton}
                  alt="A picture of the woman Millie Burton"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p>Millie Burton</p>
              </div>
              <div className="flex flex-col md:flex md:flex-row items-center space-x-2">
                <img
                  src={johnharris}
                  alt="A picture of the man John Harris"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p>John Harris</p>
              </div>
              <div className="flex flex-col md:flex md:flex-row items-center space-x-2">
                <img
                  src={davidharker}
                  alt="A picture of the man David Harker"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <p>David Harker</p>
              </div>
            </ul>
          </div>

          <div className="mt- flex-row">
            <div className="space-y-4 bg-slate-50 p-4 pr-20 pl-10 py-10 rounded flex flex-col  gap-4">
              <h4 className="text-lg font-semibold">New posts</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={hannahwebster}
                    alt=""
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <h5 className="font-semibold">Hannah Webster</h5>
                </div>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={bobbywebb}
                    alt=""
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <h5 className="font-semibold">Bobby Webb</h5>
                </div>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-200 rounded">
              <form action="" className="md:flex md:flex-row flex flex-col justify-center">
                <textarea
                  id="newpost"
                  rows="1"
                  className="w-11/12 md:mx-2 my-1 p-2 bg-gray-300 placeholder-black rounded align-middle	resize-none"
                  placeholder="What do you want to share..."
                ></textarea>
                <button className="w-11/12 md:w-2/5 my-1  md:mx-2 p-2 bg-blue-600 text-white rounded">
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

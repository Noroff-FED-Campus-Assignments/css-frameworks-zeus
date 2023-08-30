import bobbywebb from "../assets/bobbywebb.jpg";
import davidharker from "../assets/davidharker.jpg";
import hannahwebster from "../assets/hannahwebster.jpg";
import heidiparker from "../assets/heidiparker.jpg";
import millieburton from "../assets/millieburton.jpg";
import johnharris from "../assets/johnharris.jpg";

function ProfilePage() {
  return (
    <>
      <main className="bg-blue-200 p-4">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Bobby Webb</h3>
        <div className="space-y-6 md:space-y-0 md:flex md:items-center">
          <img
            src={bobbywebb}
            alt="A picture of the man Bobby Webb"
            className="w-40 h-40 md:w-32 md:h-32 rounded-full md:mr-4"
          />
          <div className="space-y-2">
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

        <div className="mt-8 md:mt-0 md:ml-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacts</h4>
            <ul className="space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src={hannahwebster}
                  alt="A picture of the woman Hannah Webster"
                  className="w-8 h-8 rounded-full"
                />
                <p>Hannah Webster</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={heidiparker}
                  alt="A picture of the woman Heidi Parker"
                  className="w-8 h-8 rounded-full"
                />
                <p>Heidi Parker</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={millieburton}
                  alt="A picture of the woman Millie Burton"
                  className="w-8 h-8 rounded-full"
                />
                <p>Millie Burton</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={johnharris}
                  alt="A picture of the man John Harris"
                  className="w-8 h-8 rounded-full"
                />
                <p>John Harris</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={davidharker}
                  alt="A picture of the man David Harker"
                  className="w-8 h-8 rounded-full"
                />
                <p>Hannah Webster</p>
              </div>
            </ul>
          </div>

          <div className="mt-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">New posts</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={hannahwebster}
                    alt=""
                    className="w-8 h-8 rounded-full"
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
                    className="w-8 h-8 rounded-full"
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
          </div>

          <div className="mt-8">
            <form action="">
              <textarea
                name="newpost"
                id=""
                placeholder="What do you want to share..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;

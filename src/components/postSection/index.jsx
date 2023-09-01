// import {useAllPosts} from "../../lib/my-api"
// import {fetchUser} from "../../lib/my-api"
import UserPic from "../../assets/profPic.jpeg"
import {  Link } from "@tanstack/react-router";
import { useUsersPosts } from "../../lib/my-api";




const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      `Water is life, yet millions face a growing water shortage crisis. Let's conserve, reuse, and protect this precious resource for a sustainable future. 💧 #WaterShortage #SaveWater #Sustainability`,
    date: 'Mar 15, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Damian Jackson',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      `What a thrilling game last night! The teams gave it their all, and the final score had us on the edge of our seats. Sports at its finest! 🏈 #BigGame #EpicMatchup`,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      `Excitement is building for tonight's live concert! 🎶 Join us for an unforgettable night filled with music, energy, and unforgettable moments. Grab your tickets and let's make memories! 🎤🤩 #LiveMusic #ConcertNight`,
    date: 'Mar 20, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Camron Dill',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]


function PostSection() {

  const userId = 2;
  const { status, error, data } = useUsersPosts(userId);
  const isLoading = status === "loading";

  
  if (isLoading) {
    return <span>Loading...</span>;
    }
  
    if (error) {
      return <span>Error: {error.message}</span>;
    }
    console.log(data.posts)
    return (
      <>
      <div className="flex form-control w-full flex-col items-center justify-center mt-3 mx-auto  max-w-3xl px-8">
        <div className="flex  gap-y-2 max-w-16 w-full gap-2 items-center ">
          <div role="profile-pic-container" className="flex flex-col items-center">
            <img src={UserPic} className="label-text-alt  w-24 rounded-full my-2"/>
            <Link to="/Profile" className=" py-0.5 px-3 text-sm rounded-sm bg-blue-100">Profile</Link>
          </div>
          <div className="flex flex-col w-full max-w-md items-end gap-y-2">
            <textarea name="" id="" cols="30" rows="2" placeholder="Whats on your mind?" className="input input-bordered w-full  p-2 border rounded-sm border-blue-300 focus:border-blue-500 focus:outline-blue-500"></textarea>
            <button className="bg-blue-500 py-1 px-3 w-20 max-w-sm rounded-sm text-white">Post</button>
          </div>
        </div>
      </div>
     <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">New Posts</h2>  
        </div>

        <div className="mx-auto mt-1 flex flex-col max-w-2xl  gap-x-8  py-3 sm:mt-1 lg:mx-0 lg:max-w-none ">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-3xl flex-col border-y border-gray-200 items-start justify-between py-6">
              <div className="text-sm leading-6">
                <div className="relative flex items-center gap-x-3">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <p className="font-semibold text-gray-900 hover:text-blue-500 ">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                </div>

                  <div className="flex justify-end gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                       {post.date}
                    </time>               
                  </div>
              </div>
              <div className="group border-1 relative">
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>            
            </article>
          ))}
        </div>
      </div>
    </div>
      </>
    )
  }

  export default PostSection;
  
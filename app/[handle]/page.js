export default async function Page({ params }) {
  const { handle } = params

  // Static demo data (later you will fetch from DB)
  const item2 = {
    link: [
      {
        link: "https://www.facebook.com",
        linktext: "Facebook"
      },
      {
        link: "https://www.instagram.com",
        linktext: "Instagram"
      }
    ],
    handle: "awais",
    profile:
      "https://easydrawingguides.com/wp-content/uploads/2023/08/Low-Res-Goku_goku-drawing-tutorial.png"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center px-4">
      
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-md text-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={item2.profile}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Username */}
        <h1 className="text-2xl font-bold text-white mt-4">
          @{item2.handle}
        </h1>

        {/* Links */}
        <div className="mt-6 flex flex-col gap-4">
          {item2.link.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="bg-white text-black py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
            >
              {item.linktext}
            </a>
          ))}
        </div>

      </div>

    </div>
  )
}
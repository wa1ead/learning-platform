export const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Master Full-Stack Development, Graphic Design & E-Commerce
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          A powerful learning platform built to help you grow, build, and
          succeed in the digital world.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition cursor-pointer">
            Explore Programs
          </button>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Program Card */}
          {[
            {
              title: "Full-Stack Development",
              description:
                "Build web apps using MERN stack, APIs, authentication & more.",
              color: "bg-blue-100 text-blue-800",
            },
            {
              title: "Graphic Design",
              description:
                "Master tools like Photoshop, Figma & Illustrator for creative projects.",
              color: "bg-pink-100 text-pink-800",
            },
            {
              title: "E-Commerce",
              description:
                "Launch and manage online stores with Shopify, WooCommerce, and custom solutions.",
              color: "bg-green-100 text-green-800",
            },
          ].map((program, i) => (
            <div key={i} className={`p-6 rounded-lg shadow ${program.color}`}>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

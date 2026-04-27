import { FaUsers, FaRocket, FaCode, FaPenNib, FaChartBar } from "react-icons/fa";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <section className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Careers at Dragon News
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Join us in building a modern, data-driven news platform that delivers
            fast, structured, and meaningful information to readers around the world.
            At Dragon News, we value simplicity, performance, and impact.
          </p>
        </section>

        {/* Why Join */}
        <section className="grid md:grid-cols-3 gap-8 mb-14">

          <div className="border rounded-xl p-6">
            <FaRocket className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Build Something Modern</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Work with modern tools and technologies to create a fast,
              scalable, and clean news platform.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <FaUsers className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Small & Focused Team</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Collaborate in a focused environment where ideas matter and
              contributions are visible.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <FaChartBar className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Impact Through Data</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Help shape how users interact with structured news data like
              ratings, trends, and engagement metrics.
            </p>
          </div>

        </section>

        {/* Roles */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">Open Roles</h2>

          <div className="space-y-6">

            {/* Developer */}
            <div className="border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaCode className="text-gray-700" />
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Build responsive and high-performance user interfaces using Next.js and Tailwind CSS.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Experience with React / Next.js</li>
                <li>• Strong understanding of UI/UX basics</li>
                <li>• Ability to work with API-driven data</li>
              </ul>
            </div>

            {/* Content Writer */}
            <div className="border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaPenNib className="text-gray-700" />
                <h3 className="text-xl font-semibold">Content Writer</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Create clear, engaging, and informative news content for a global audience.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Strong writing and editing skills</li>
                <li>• Ability to simplify complex topics</li>
                <li>• Interest in current events</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Culture */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Dragon News is built on simplicity and clarity — not just in product
            design, but in how we work. We focus on meaningful features, clean code,
            and thoughtful content. We value consistency over complexity and
            progress over perfection.
          </p>
        </section>

        {/* Future */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            As Dragon News grows, we aim to introduce smarter features like advanced
            filtering, personalized news feeds, and deeper data insights. We are
            looking for people who want to be part of building something impactful
            from the ground up.
          </p>
        </section>

        {/* CTA */}
        <section className="border rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Want to work with us?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            We are always open to talented people who are passionate about building
            modern web experiences.
          </p>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-700 transition">
            Contact Us
          </button>
        </section>

        {/* Footer */}
        <div className="border-t pt-6 mt-12">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dragon News. Build the future of news.
          </p>
        </div>

      </div>
    </main>
  );
}
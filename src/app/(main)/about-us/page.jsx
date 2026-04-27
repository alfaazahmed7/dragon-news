import React from 'react';
import { FaFire, FaGlobe, FaBolt, FaChartLine, FaLayerGroup } from "react-icons/fa";

const AboutUsPage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <section className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About Dragon News
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Dragon News is a modern, data-driven news platform designed to deliver
            structured, real-time information in a clean and readable format. 
            It focuses on clarity, performance, and helping users discover what truly matters.
          </p>
        </section>

        {/* Platform Explanation */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">How Dragon News Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dragon News organizes news content into structured categories, making it easy
            to explore topics that matter most to you. Each article is enriched with
            additional metadata such as author details, publish time, ratings, and
            total views — giving readers more context beyond just headlines.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The platform dynamically fetches and displays news from an API, ensuring that
            content stays updated and relevant. Features like trending indicators and
            today’s highlights help users quickly identify important stories.
          </p>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-8 mb-14">

          <div className="border rounded-xl p-6">
            <FaLayerGroup className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Categorized Content</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              News is grouped into categories, allowing users to easily navigate
              through different topics and find relevant stories faster.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <FaFire className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Trending & Picks</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Articles are tagged as trending or today’s picks, helping users stay
              updated with the most important and popular news.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <FaChartLine className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Ratings & Views</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each news article includes ratings and total views, giving insight
              into its credibility and popularity among readers.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <FaGlobe className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From international politics to local updates, Dragon News brings
              together stories from across the world in one place.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <FaBolt className="text-xl mb-3 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built with modern technologies, the platform ensures fast loading,
              smooth navigation, and a responsive experience.
            </p>
          </div>

        </section>

        {/* Data Insight Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Built Around Data</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Every news article on Dragon News is more than just text — it includes
            structured data such as unique IDs, category classification, author
            information, timestamps, and engagement metrics. This allows the platform
            to deliver smarter filtering, better organization, and a richer user experience.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Our mission is to simplify how people consume news by combining clean design
            with meaningful data. Dragon News aims to provide an experience where users
            can quickly understand not just the story, but its relevance and impact.
          </p>
        </section>

        {/* Footer */}
        <div className="border-t pt-6 mt-12">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dragon News. Built for clarity, speed, and insight.
          </p>
        </div>

      </div>
    </main>
    );
};

export default AboutUsPage;
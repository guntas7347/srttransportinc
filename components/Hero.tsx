import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Reliable <span className="text-blue-500">Trucking</span> Solutions
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          SRT Transport INC delivers exceptional freight transportation services
          across Toronto and beyond. Your cargo, our commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            Get Quote <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#services"
            className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

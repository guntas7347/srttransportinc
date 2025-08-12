import { FC, ReactNode } from "react";
import { Star } from "lucide-react";

interface WhyChooseItemProps {
  title: string;
  children: ReactNode;
}

const WhyChooseItem: FC<WhyChooseItemProps> = ({ title, children }) => (
  <div className="flex items-start">
    <Star className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm">{children}</p>
    </div>
  </div>
);

const About: FC = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About SRT Transport INC</h2>
          <p className="text-lg text-gray-300 mb-6">
            Based in Toronto, SRT Transport INC has been providing reliable
            trucking and logistics services to businesses across Ontario. Our
            commitment to excellence, safety, and customer satisfaction has made
            us a trusted partner in the transportation industry.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            With a modern fleet and experienced drivers, we ensure your cargo
            reaches its destination safely and on time, every time.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-gray-400">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-gray-400">Service Availability</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
          <div className="space-y-4">
            <WhyChooseItem title="Professional Service">
              Experienced team committed to excellence
            </WhyChooseItem>
            <WhyChooseItem title="Competitive Rates">
              Fair pricing without compromising quality
            </WhyChooseItem>
            <WhyChooseItem title="Reliable Delivery">
              On-time delivery you can count on
            </WhyChooseItem>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

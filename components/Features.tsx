import { FC, ReactNode } from "react";
import { Clock, MapPin, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, children }) => (
  <div className="text-center">
    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Features: FC = () => (
  <section className="py-16 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard icon={<Clock className="h-8 w-8" />} title="24/7 Service">
          Round-the-clock transportation services to meet your urgent delivery
          needs.
        </FeatureCard>
        <FeatureCard
          icon={<Shield className="h-8 w-8" />}
          title="Insured & Licensed"
        >
          Fully licensed and insured for your peace of mind and cargo
          protection.
        </FeatureCard>
        <FeatureCard
          icon={<MapPin className="h-8 w-8" />}
          title="Local Expertise"
        >
          Toronto-based with extensive knowledge of local routes and
          regulations.
        </FeatureCard>
      </div>
    </div>
  </section>
);

export default Features;

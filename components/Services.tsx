import { FC, ReactNode } from "react";
import { CheckCircle, Package, Truck, Users } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => (
  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors transform hover:-translate-y-2">
    {icon}
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-gray-300">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services: FC = () => (
  <section id="services" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-xl text-gray-400">
          Comprehensive trucking solutions for all your transportation needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Package className="h-12 w-12 text-blue-500 mb-4" />}
          title="Freight Transportation"
          description="Reliable freight delivery services for businesses of all sizes across the region."
          features={["Full Truckload (FTL)", "Less Than Truckload (LTL)"]}
        />
        <ServiceCard
          icon={<Truck className="h-12 w-12 text-blue-500 mb-4" />}
          title="Local Delivery"
          description="Fast and efficient local delivery services throughout Toronto and the GTA."
          features={["Same-day delivery", "Scheduled deliveries"]}
        />
        <ServiceCard
          icon={<Users className="h-12 w-12 text-blue-500 mb-4" />}
          title="Logistics Support"
          description="Complete logistics solutions including planning, coordination, and tracking."
          features={["Route optimization", "Real-time tracking"]}
        />
      </div>
    </div>
  </section>
);

export default Services;

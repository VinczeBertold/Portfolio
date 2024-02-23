import {
  faGlobe,
  faLayerGroup,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      icon: (
        <FontAwesomeIcon icon={faGlobe} size="2x" className="text-primary" />
      ),
      title: "Web Development",
      description:
        "I can help you build a website for your business or personal use. I can also help you maintain and update your existing website, and optimize it for search engines. (SEO)",
      transitionDuration: 1,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faLayerGroup}
          size="2x"
          className="text-primary"
        />
      ),
      title: "API Development",
      description:
        "I can help you build, or integrate RESTful APIs for your wbsite, desktop/mobile app. I am also experienced with implementing gRPC for your microservices architecture.",
      transitionDuration: 2,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          size="2x"
          className="text-primary"
        />
      ),
      title: "Mobile App Development",
      description:
        "I can help you build a mobile app for your business or personal use.",
      transitionDuration: 2.5,
    },
  ];

  return (
    <div className="container grid items-center justify-center gap-6 p-8 text-center md:gap-10 lg:gap-16 bg-base-100">
      <div className="space-y-3">
        <h2 className="text-5xl font-bold tracking-tighter ">
          My Services
        </h2>
        <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I can help you with the following services. I am also open to new
          challenges and learning new technologies. Feel free to contact me if
          you have any questions. I am happy to help myself or refer you to
          someone I trust who can help you.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

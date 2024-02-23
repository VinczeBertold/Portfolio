import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WorkAndEducation from "@/components/WorkAndEducation";
import { faEnvelope, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-base-200">
      <section className="grid grid-flow-col grid-rows-1 sm:grid-rows-1 sm:grid-cols-2 gap-4">
        <Hero />
      </section>

      <section
        className="flex flex-col lg:flex-row min-h-screen p-4 lg:px32 xl:px-40 md:py-16 gap-8 text-base-content"
        id="about"
      >
        <About />
      </section>

      <section
        className="flex flex-col min-h-screen p-4 lg:px32 xl:px-40 md:py-4 gap-8 text-base-content"
        id="work-education"
      >
        <WorkAndEducation />
      </section>
      <section
        className="flex flex-col min-h-screen justify-center items-center p-4 lg:px32 xl:px-40 md:py-4 gap-8 text-base-content"
        id="services"
      >
        <Services />
      </section>
      <section
        className="flex flex-col min-h-screen justify-center p-4 lg:px32 xl:px-40 md:py-4 gap-8 text-base-content"
        id="projects"
      >
        <Projects />
      </section>

      <section
        className="flex flex-col min-h-screen justify-center p-4 lg:px32 xl:px-40 md:py-4 gap-8 text-base-content"
        id="contact"
      >
        <Contact />
      </section>
    </main>
  );
}

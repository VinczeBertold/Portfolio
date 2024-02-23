export default function WorkAndEducation() {
  return (
    <>
      <div className="w-full bg-base-100 p-4 my-2">
        <h1 className="text-2xl font-bold">Work Experience</h1>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <hr />
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">04.2024 - </time>
            <div className="text-lg font-black">Foo Bar</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <div className="flex-row">
              Main Techs: Nest.js (TS), TypeScript, PostgreSQL, Docker,
              Kubernetes
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">10.2021 - </time>
            <div className="text-lg font-black">Benefit Büroservice </div>
            Maintained and developed new features for the company&apos;s application
            that handled call center operations. Took part in moving the
            application to a new architecture and to follow the DDD (Domain
            Driven Design) principles.
            <div className="flex-row">
              Main Techs: PHP8, Symfony, NodeJs (TS), MySQL, Vue.js, Docker, AWS
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">09.2020 - 10.2021</time>
            <div className="text-lg font-black">Robert Bosch</div>
            Maintained a desktop application that is being used by the biggest
            vehicle manufacturers worldwide to improve passive safety features
            such as Airbags. Created a tool for in-house use that could convert
            project files from an older version to a newer one, saving 1.5 hours
            for each project on average
            <div className="flex-row">
              Main Techs: .NET (WPF), C#, C++, SQL, NoSQL
            </div>
          </div>
          <hr />
        </li>
      </ul>
      <div className="w-full bg-base-100 p-4 my-2" id="education">
        <h1 className="text-2xl font-bold">Education</h1>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <hr />
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">09.2021 - 06.2024</time>
            <div className="text-lg font-black">
              University of Applied Sciences Krems
            </div>
            Bachelor of Science in Informatics
            <div className="flex-row">
              1st – 4th semester: Programming, Discrete Math, Calculus,
              Algorithms and Data structures, Law, Machine Learning, Buisiness
              classes
            </div>
            <div className="flex-row">
              5th – 6th semester: Specialization in Bio Informatics. This
              includes Image Processing, Bio Informatics, Bio Statistics, Bio
              Informatics Algorithms.
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
}

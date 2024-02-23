import Image from "next/image";

import main from "../../public/me.jpg";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="w-full lg:w-3/12 flex">
        <div className="card !rounded-md w-full bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-full rounded">
              <Image src={main} alt="hero" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl">Contact Information</h2>
            <div className="flex gap-2">
              <span className="font-bold">Name:</span>
              Bertold Vincze
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Location:</span>
              St Pölten, Austria
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Email:</span>
              <a
                href="mailto:career.bertold@gmail.com"
                className="link-secondary link"
              >
                career.bertold@gmail.com
              </a>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Phone:</span>
              <a href="tel:+36304567890" className="link-secondary link">
                +36 30 456 7890
              </a>
            </div>
            <div className="flex gap-4">
              <div className="font-bold">Languages:</div>
              <div className="flex flex-col">
                <p>English - Fluent</p>
                <p>Hungarian - Native</p>
                <p>German - Beginner</p>
              </div>
            </div>
            <div className="flex gap-4 my-4">
              <div className="font-bold">Look at my: </div>
              <div className="flex flex-col">
                <Link
                  href="https://github.com/VinczeBertold"
                  className="link-secondary link"
                >
                  GitHub profile
                </Link>
                <Link
                  href="https://medium.com/@p.vinczebertold"
                  className="link-secondary link"
                >
                  Medium articles
                </Link>
                <Link
                  href="https://about.me/bertoldvincze"
                  className="link-secondary link"
                >
                  About.me profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-9/12 flex flex-col gap-2">
        <div className="card !rounded-md w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">About me</h2>
            <p>
              Hello there! I am Bertold Vincze, a backend 23 years old developer
              and bio informatician. I was born and raised in Hungary and I am
              currently residing in St Pölten, Austria. I have a passion for
              coding and I am always eager to learn new things. I am a team
              player and I am always open to new ideas and suggestions. I am a
              hardworking and dedicated person and I always strive to achieve
              the best results in everything I do.
            </p>

            <p>
              <span className="text-primary">What am I proud of? </span>At
              Robert Bosch, my standalone project won the company&apos;s internal
              competition for the best in-house tool of the year.
            </p>
          </div>
        </div>
        <div className="card !rounded-md w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title pb-4">Strengths and expertise</h2>
            <div className="flex flex-col gap-6 my-2">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="font-bold w-2/12">BACKEND</div>
                <div className="flex flex-col items-center gap-1 w-full md:w-1/2">
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>Express </p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={90}
                        max="100"
                        title="4 years"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-info gap-2">TypeScript</div>
                    </div>
                  </div>
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>FastAPI</p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={75}
                        max="100"
                        title="2 years"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-accent gap-2">Python</div>
                    </div>
                  </div>
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>Symfony</p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={65}
                        max="100"
                        title="2 years"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-warning gap-2">PHP</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-2 border-base-300"></div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="font-bold w-2/12">FULLSTACK</div>
                <div className="flex flex-col items-center gap-1 w-full md:w-1/2">
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>Next.js</p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={90}
                        max="100"
                        title="2 years"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-info gap-2">TypeScript</div>
                    </div>
                  </div>
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>Nuxt.js</p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={50}
                        max="100"
                        title="1 year"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-accent gap-2">TypeScript</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-2 border-base-300"></div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="font-bold w-2/12">DATABASES AND ORMS</div>
                <div className="flex flex-col items-center gap-1 w-full md:w-1/2">
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>Postgre</p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={80}
                        max="100"
                        title="3 years"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-info gap-2">SQL</div>
                    </div>
                  </div>
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>MongoDB</p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={60}
                        max="100"
                        title="1 year"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-warning gap-2">NoSQL</div>
                    </div>
                  </div>
                  <div className="flex items-center flex-row gap-3 w-full">
                    <div className="w-2/6 md:w-1/6">
                      <p>Prisma</p>
                    </div>
                    <div className="w-4/6">
                      <progress
                        className="progress progress-primary w-full"
                        value={90}
                        max="100"
                        title="2 years"
                      ></progress>
                    </div>
                    <div className="hidden md:flex w-1/6">
                      <div className="badge badge-warning gap-2">ORM</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-2 border-base-300"></div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="font-bold w-2/12">OTHER</div>
                <div className="flex flex-col items-center gap-1 w-full md:w-1/2">
                  <div className="w-full">
                    Testing Tools (Jest, PHPUnit, PyTest) - 3 years | C# - 3
                    years | C++ - 2 years | React Native (Expo) - 1 year | Git |
                    Github Actions | Jenkins | Docker | Kubernetes | Linux |
                    Windows | Agile | Scrum | OOP | Design Patterns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

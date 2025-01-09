import Head from "next/head";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLogoTableau } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import matthew from "../public/heff.png";
import everfi1 from "../public/everfi_1.png";
import everfi2 from "../public/everfi_2.png";
import everfi3 from "../public/everfi_3.png";
import everfi4 from "../public/everfi_4.png";
import bunny1 from "../public/bunny_1.png";
import bunny2 from "../public/bunny_2.png";
import bunny3 from "../public/bunny_3.png";
import bunny4 from "../public/bunny_4.png";
import yt1 from "../public/yt_1.png";
import yt2 from "../public/yt_2.png";
import yt3 from "../public/yt_3.png";
import yt4 from "../public/yt_4.png";
import tds from "../public/tableau-desktop-specialist.png";
import md from "../public/meta-front-end-developer-certificate.png";
import gbi from "../public/google-business-intelligence-certificate.png";
import Link from "next/link";
import Confetti from "react-confetti";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Matthew Hefferon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"> </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/matthewhefferon/"
                  passHref={true}
                >
                  <div
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:brightness-95"
                    onMouseEnter={() => setShowConfetti(true)}
                    onMouseLeave={() => setShowConfetti(false)}
                  >
                    Connect{" "}
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5 py-2">
            <div className="mx-auto bg-gradient-to-b rounded-full w-60 h-60 relative overflow-hidden md:h-70 md:w-70">
              <Image
                src={matthew}
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Matthew Hefferon
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer Advocate
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I've spent the last 10+ years working in{" "}
              <span className="text-teal-500">data and analytics</span> and
              currently work as a{" "}
              <span className="text-teal-500">developer advocate</span> at{" "}
              Metabase.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <div className="hover:text-teal-500">
                <Link
                  href="https://www.linkedin.com/in/matthewhefferon/"
                  passHref={true}
                >
                  <AiFillLinkedin />
                </Link>
              </div>
              <div className="hover:text-teal-500">
                <Link
                  href="https://public.tableau.com/app/profile/matthewhefferon"
                  passHref={true}
                >
                  <IoLogoTableau />
                </Link>
              </div>
              <div className="hover:text-teal-500">
                <Link href="https://github.com/matthewhefferon" passHref={true}>
                  <AiFillGithub />
                </Link>
              </div>
              <div className="hover:text-teal-500">
                <Link
                  href="https://youtube.com/@matthewhefferon"
                  passHref={true}
                >
                  <AiFillYoutube />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Licenses & Certifications
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am <span className="text-teal-500">Tableau Certified</span> and
              have earned the{" "}
              <span className="text-teal-500">
                Google Business Intelligence
              </span>{" "}
              and{" "}
              <span className="text-teal-500">Meta Front End Developer</span>{" "}
              certifications. I also enjoy coding and experimenting with{" "}
              <span className="text-teal-500">data visualization</span>{" "}
              libraries like <span className="text-teal-500">D3.js</span>.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-10 py-10 md:flex-row md:flex-wrap ">
            <div>
              <Link
                href="https://www.credly.com/badges/bdd490c8-c317-48c5-ace0-0f2ff14d7bb9/public_url"
                passHref={true}
              >
                <Image
                  className="rounded-lg object-cover"
                  width={300}
                  height={300}
                  src={tds}
                  alt="Tableau desktop specialist badge"
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/8QJA2ZR4ZFEV"
                passHref={true}
              >
                <Image
                  className="rounded-lg object-cover"
                  width={300}
                  height={300}
                  src={gbi}
                  alt="Google Business Intelligence Certificate"
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/U3Y8VNA28HFQ"
                passHref={true}
              >
                <Image
                  className="rounded-lg object-cover"
                  width={300}
                  height={300}
                  src={md}
                  alt="Meta Front-End Developer Certificate"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Embedded Analytics at EVERFI
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I was tasked to help build the{" "}
              <span className="text-teal-500">customer-facing analytics</span>.
              I used the following technologies{" "}
              <span className="text-teal-500">Tableau</span>
              {", "}
              <span className="text-teal-500">Redshift</span> and{" "}
              <span className="text-teal-500">Snowflake</span>.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={everfi1}
                alt="EVERFI screenshot"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={everfi2}
                alt="EVERFI screenshot"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={everfi3}
                alt="EVERFI screenshot"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={everfi4}
                alt="EVERFI screenshot"
              />
            </div>
          </div>
        </section>

        <section className="py-5">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Embedded Analytics at Bunny
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I was hired as <span className="text-teal-500">employee #8</span>{" "}
              and tasked to build the{" "}
              <span className="text-teal-500">customer-facing analytics</span>.
              I used the following technologies{" "}
              <span className="text-teal-500">Metabase</span>
              {", "}
              <span className="text-teal-500">React</span> and{" "}
              <span className="text-teal-500">PostgreSQL</span>.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={bunny1}
                alt="Bunny screenshot"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={bunny2}
                alt="Bunny screenshot"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={bunny3}
                alt="Bunny screenshot"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={bunny4}
                alt="Bunny screenshot"
              />
            </div>
          </div>
        </section>
        <section className="py-5">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">YouTube Channel</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I started a YouTube channel to teach people about{" "}
              <span className="text-teal-500">data visualization</span>. I have{" "}
              <span className="text-teal-500">3.26K subscribers</span> with over{" "}
              <span className="text-teal-500">~876K views</span>. Here are some
              of my most viewed videos.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Link href="https://youtube.com/@matthewhefferon" passHref={true}>
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={yt1}
                  alt="YouTube screenshot"
                />
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="https://youtube.com/@matthewhefferon" passHref={true}>
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={yt2}
                  alt="YouTube screenshot"
                />
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="https://youtube.com/@matthewhefferon" passHref={true}>
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={yt3}
                  alt="YouTube screenshot"
                />
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="https://youtube.com/@matthewhefferon" passHref={true}>
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={yt4}
                  alt="YouTube screenshot"
                />
              </Link>
            </div>
          </div>
          <div className="py-5 text-center text-2xl dark:text-white md:text-3xl">
            <p>Cheers 🍻</p>
          </div>
        </section>
      </main>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </div>
  );
}

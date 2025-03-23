import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { IoLogoTableau } from "react-icons/io5";
import matthew from "../public/heff.png";

export default function Hero() {
  return (
    <section className="h-screen max-h-[800px]" aria-label="Introduction">
      <div className="text-center p-5 py-2">
        <div className="mx-auto bg-gradient-to-b rounded-full w-60 h-60 relative overflow-hidden md:h-70 md:w-70">
          <Image
            src={matthew}
            alt="Matthew Hefferon - Developer Advocate at Metabase"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 240px, 280px"
          />
        </div>
        <h1 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Matthew Hefferon
        </h1>
        <h2 className="text-2xl py-2 dark:text-white md:text-3xl">
          Developer Advocate
        </h2>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          I've spent the last 10+ years working in{" "}
          <span className="text-teal-500">data and analytics</span> and
          currently work as a{" "}
          <span className="text-teal-500">developer advocate</span> at{" "}
          Metabase.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400" aria-label="Social Links">
          <div className="hover:text-teal-500">
            <Link
              href="https://www.linkedin.com/in/matthewhefferon/"
              passHref={true}
              aria-label="Visit Matthew's LinkedIn Profile"
            >
              <AiFillLinkedin />
            </Link>
          </div>
          <div className="hover:text-teal-500">
            <Link
              href="https://public.tableau.com/app/profile/matthewhefferon"
              passHref={true}
              aria-label="View Matthew's Tableau Public Profile"
            >
              <IoLogoTableau />
            </Link>
          </div>
          <div className="hover:text-teal-500">
            <Link 
              href="https://github.com/matthewhefferon" 
              passHref={true}
              aria-label="Check out Matthew's GitHub Projects"
            >
              <AiFillGithub />
            </Link>
          </div>
          <div className="hover:text-teal-500">
            <Link
              href="https://youtube.com/@matthewhefferon"
              passHref={true}
              aria-label="Subscribe to Matthew's YouTube Channel"
            >
              <AiFillYoutube />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
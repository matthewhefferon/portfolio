import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { IoLogoTableau } from "react-icons/io5";
import matthew from "../public/heff.png";

export default function Hero() {
  return (
    <section className="h-screen max-h-[800px]">
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
  );
} 
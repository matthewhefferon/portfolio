import Image from "next/image";
import Link from "next/link";
import tds from "../public/tableau-desktop-specialist.png";
import md from "../public/meta-front-end-developer-certificate.png";
import gbi from "../public/google-business-intelligence-certificate.png";

export default function Certifications() {
  return (
    <section className="pt-0 pb-5">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">
          Licenses & Certifications
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I'm <span className="text-teal-500">Tableau Certified</span> and
          received the{" "}
          <span className="text-teal-500">Google Business Intelligence</span>{" "}
          and{" "}
          <span className="text-teal-500">Meta Front End Developer</span>{" "}
          certifications.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-10 py-10 md:flex-row md:flex-wrap">
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
  );
} 
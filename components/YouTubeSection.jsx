import Image from "next/image";
import Link from "next/link";
import yt1 from "../public/yt_1.png";
import yt2 from "../public/yt_2.png";
import yt3 from "../public/yt_3.png";
import yt4 from "../public/yt_4.png";

const youtubeImages = [yt1, yt2, yt3, yt4];

export default function YouTubeSection() {
  return (
    <section className="py-5">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">YouTube Channel</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I started a YouTube channel to teach people about{" "}
          <span className="text-teal-500">data visualization</span>. I have{" "}
          <span className="text-teal-500">3.42K subscribers</span> with over{" "}
          <span className="text-teal-500">~936K views</span>. Here are some
          of my most viewed videos.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {youtubeImages.map((image, index) => (
          <div key={index} className="basis-1/3 flex-1">
            <Link href="https://youtube.com/@matthewhefferon" passHref={true}>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={image}
                alt={`YouTube screenshot ${index + 1}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 
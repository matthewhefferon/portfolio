import Image from "next/image";

export default function ProjectSection({ title, description, images, technologies }) {
  return (
    <section className="py-5">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">{title}</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 
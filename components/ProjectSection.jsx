import Image from "next/image";

export default function ProjectSection({ title, description, images, technologies }) {
  return (
    <section className="py-5" aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div>
        <h2 
          id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-3xl py-1 dark:text-white"
        >
          {title}
        </h2>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div 
        className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
        role="group"
        aria-label={`${title} project screenshots`}
      >
        {images.map((image, index) => (
          <div key={index} className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={800}
              height={600}
              src={image}
              alt={`${title} - ${technologies.join(", ")} implementation screenshot ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
} 
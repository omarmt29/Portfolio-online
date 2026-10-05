import { FaLink } from "react-icons/fa6";

export function ProjectCard({ title, description, image, url, stack = [] }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3"
    >
      <div className="aspect-[16/10] w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-md object-cover border-2 border-yellow-500 shadow-md shadow-purple-500 p-1"
        />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-black/60 dark:text-white/60 line-clamp-3">
            {description}
          </p>
          {stack.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {stack.map((item) => (
                <img
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  className={`h-6 w-6 object-contain ${item.className || ""}`}
                />
              ))}
            </div>
          )}
        </div>

        <span className="shrink-0 inline-flex items-center gap-1 rounded-xl bg-purple-400 px-2.5 py-1 text-xs font-medium text-white transition-transform duration-300 group-hover:scale-105">
          <FaLink className="text-[0.7rem]" />
          Live
        </span>
      </div>
    </a>
  );
}

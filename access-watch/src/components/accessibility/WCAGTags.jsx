import { wcagLinks } from "../utils/wcagLinks";

function WCAGTags({ tags }) {

  return (
    <div>

      <p className="font-semibold mb-2">
        
      </p>
        <span>WCAG Success Criteria : </span>
        {tags.map((tag) => {

          const wcag = wcagLinks[tag];

          if (!wcag) return null;

          return (
            <a
              key={tag}
              href={wcag.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 whitespace-nowrap"
            >
              {wcag.label}
            </a>
          );
        })}
    
    </div>
  );
}

export default WCAGTags;
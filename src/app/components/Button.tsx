
export default function Button({ href, label }: { href: string; label: string }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block italic text-primary border border-primary rounded-full px-3 py-1 text-sm transition-colors duration-200 hover:bg-primary hover:text-white"
      >
        {label}
      </a>
    );
  }
  
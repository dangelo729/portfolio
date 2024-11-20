import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="p-8 pb-4 bg-offwhite w-full">
        <h1 className="text-4xl font-bold">Peter D'Angelo</h1>
        <p className="text-lg mt-2">inventor, software engineer, and musician</p>
        {/* Links */}
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Button href="#" label="About" />
            </li>
            <li>
              <Button href="https://www.linkedin.com/in/peter-dangelo/" label="LinkedIn" />
            </li>
            <li>
              <Button href="https://github.com/dangelo729" label="GitHub" />
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Prototypes Column */}
        <div className="w-1/2 overflow-y-auto">
          <ColumnHeader title="Prototypes" bgColor="#d7a64b" />
          <div className="p-4 space-y-4">
            {/* RTC */}
            <div className="flex items-center justify-center">
              <Image
                src="/rtc/ReverseTheCurse_Green-removebg-preview-2.png"
                alt="Reverse The Curse Prototype"
                width={200} 
                height={200}
                objectFit="contain"
              />
            </div>
            {/* Remaining placeholder items */}
            {[...Array(11)].map((_, index) => (
              <div key={index} className="h-32 flex items-center justify-center">
                Prototype {index + 2}
              </div>
            ))}
          </div>
        </div>

        {/* Software Column */}
        <div className="w-1/2 overflow-y-auto">
          <ColumnHeader title="Software" bgColor="#e06236" />
          <div className="p-4 space-y-4">
            {/* Placeholder items */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className="h-32 flex items-center justify-center">
                Software {index + 1}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* Button Component */
function Button({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-block italic text-primary border border-primary rounded-full px-3 py-1 text-sm transition-colors duration-200 hover:bg-primary hover:text-white"
    >
      {label}
    </a>
  );
}

/* ColumnHeader Component */
function ColumnHeader({ title, bgColor }: { title: string; bgColor: string }) {
  return (
    <div className="sticky top-0 z-10 flex justify-center bg-[var(--background)]">
      <div
        className="rounded-full px-4 py-2 mt-4"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="text-2xl font-semibold italic text-white">{title}</h2>
      </div>
    </div>
  );
}

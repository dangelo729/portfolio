export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="p-8 pb-4 bg-offwhite w-full">
        <h1 className="text-4xl font-bold">Peter D'Angelo</h1>
        <p className="text-lg mt-2">
          inventor, software engineer, and musician
        </p>
        {/* Links */}
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Prototypes Column */}
        <div className="w-1/2 overflow-y-auto">
          <ColumnHeader title="Prototypes" />
          <div className="p-4 space-y-4">
            {/* Placeholder items */}
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 h-32 flex items-center justify-center"
              >
                Prototype {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Software Column */}
        <div className="w-1/2 overflow-y-auto">
          <ColumnHeader title="Software" />
          <div className="p-4 space-y-4">
            {/* Placeholder items */}
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 h-32 flex items-center justify-center"
              >
                Software {index + 1}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* ColumnHeader Component */
function ColumnHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 bg-offwhite z-10 p-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}

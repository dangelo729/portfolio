
/* ColumnHeader Component */
export default function ColumnHeader({
    title,
    bgColor,
    shimmer = false,
    isFilled = true,
    borderRadius = 20,
    thickness = 2,
  }: {
    title: string;
    bgColor?: string;
    shimmer?: boolean;
    isFilled?: boolean;
    borderRadius?: number;
    thickness?: number;
  }) {
    return (
      <div className="sticky top-0 z-10 flex justify-center bg-[var(--background)]">
        <div
          className={`rounded px-5 py-2 mt-4 ${shimmer ? 'gradient-bg animate-gradient' : ''}`}
          style={{
            backgroundColor: !shimmer && isFilled ? bgColor : 'transparent',
            border: !isFilled ? `${thickness}px solid ${bgColor || 'white'}` : undefined,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <h2 className="text-2xl italic text-white">{title}</h2>
        </div>
      </div>
    );
  }
  
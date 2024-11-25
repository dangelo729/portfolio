/* ColumnHeader Component */
import { motion } from 'framer-motion';

export default function ColumnHeader({
  title,
  bgColor,
  shimmer = false,
  isFilled = true,
  borderRadius = 20,
  thickness = 2,
  onClick,
  isExpanded,
}: {
  title: string;
  bgColor?: string;
  shimmer?: boolean;
  isFilled?: boolean;
  borderRadius?: number;
  thickness?: number;
  onClick?: () => void;
  isExpanded: boolean;
}) {
  return (
    <div
      className="sticky top-0 z-10 flex justify-center bg-[var(--background)] cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        className={`relative mt-4 ${
          shimmer ? 'gradient-bg animate-gradient' : ''
        }`}
        style={{
          backgroundColor: !shimmer && isFilled ? bgColor : 'transparent',
          border: !isFilled ? `${thickness}px solid ${bgColor || 'white'}` : undefined,
          width: '150px',
          overflow: 'hidden',
        }}
        animate={{
          borderRadius: isExpanded ? '5%' : '50%',
          height: isExpanded ? '60px' : '150px',
        }}
        initial={{
          height: isExpanded ? '60px' : '150px',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Text Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            className="italic text-white"
            style={{
              fontSize: '1.5rem',
              textAlign: 'center',
              lineHeight: '1.1',
            }}
          >
            {title}
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

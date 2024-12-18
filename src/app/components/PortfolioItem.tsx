
import Image from 'next/image';
import Link from 'next/link';

/* PortfolioItem Component */
export default function PortfolioItem({
  imageSrc,
  altText,
  caption,
  imageWidth = 300,
  imageHeight = 300,
  captionClassName = '',
  separatorWidth = 'w-1/2',
  left = '25%',
  href,
}: {
  imageSrc?: string;
  altText?: string;
  caption: React.ReactNode;
  imageWidth?: number;
  imageHeight?: number;
  captionClassName?: string;
  separatorWidth?: string;
  left?: string;
  href: string;
}) {
  return (
    <Link href={href} className="relative flex flex-col items-center justify-center">
      {/* Image */}
      {imageSrc && altText && (
        <Image
          src={imageSrc}
          alt={altText}
          width={imageWidth}
          height={imageHeight}
          objectFit="contain"
        />
      )}

      {/* Caption */}
      <div className={`relative text-center ${captionClassName}`}>
        {caption}
      </div>

      {/* Horizontal Separator */}
      <div className={`mt-0 ${separatorWidth} h-[1px]`} />
    </Link>
  );
}

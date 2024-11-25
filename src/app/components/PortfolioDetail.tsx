/* PortfolioDetail Component */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface PortfolioDetailProps {
  title: string;
  images: { src: string; alt: string }[];
  date: string;
  description: string[];
  learnMoreLink?: string;
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ title, images, date, description, learnMoreLink }) => {
  return (
    <div className="p-20 relative">
      {/* Home Link */}
      <div className="absolute top-8 left-8">
        <Link href="/" className="text-[#535248] text-xl no-underline hover:underline italic">
          Home
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">{title}</h1>

      {/* Date */}
      <p className="text-gray-600 mb-4 italic">{date}</p>

      {/* Images */}
      <div className="flex space-x-4 mb-4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            style={{
              width: '300px',
              aspectRatio: '1 / 1',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="contain" 
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="text-base leading-relaxed text-left mb-8 space-y-4">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Learn More Button */}
      {learnMoreLink && (
        <div className="flex justify-center mt-8">
          <Button href={learnMoreLink} label="Learn More" />
        </div>
      )}
    </div>
  );
};

export default PortfolioDetail;

import Image from 'next/image';
import SolarSystem from './components/SolarSystem';
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="p-8 pb-4 bg-offwhite w-full flex items-start">
        {/* Left Section: Header Information */}
        <div className="flex-wrap">
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
        </div>

        {/* Right Section: Solar System */}
        <div className="justify-center item-center mt-[-40px]">
          <SolarSystem />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Prototypes Column */}
        <div className="w-1/3 overflow-y-auto">
          <ColumnHeader title="Prototypes" bgColor="#d7a64b" />
          <div className="p-4 space-y-4">
            {/* Reverse The Curse */}
            <PortfolioItem
              imageSrc="/rtc/ReverseTheCurse_Green-removebg-preview-2.png"
              altText="Reverse The Curse"
              caption={
                <div>
                  <div className="italic">Reverse The Curse</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-4">
                    <li>Principal software designer for BrandNewNoise's new flagship product</li>
                    <li>1k+ units sold, $100k+ in revenue</li>
                    <li>Clean digital signal processing in a resource-limited embedded system</li>
                    <li>Robust, low-level power saving techniques</li>
                  </ul>
                </div>
              }
              imageWidth={200}
              imageHeight={200}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left='55%'
            />

            {/* Sol */}
            <PortfolioItem
              imageSrc="/sol/noBGSynth.png"
              altText="Sol"
              caption={
                <div>
                  <div className="italic">Sol+Serenade</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-4">
                    <li>2-engine digital synthesizer(planetary/vocal synthesis)</li>
                    <li> 4-voice polyphony</li>
                    <li>Satisfying, seamless OLED integration</li>
                  </ul>
                </div>
              }
              imageWidth={300}
              imageHeight={300}
              captionClassName="bottom-8 mb-6"
              separatorWidth="w-2/3"
              left='50%'
            />

            {/* DVD */}
            <PortfolioItem
              imageSrc="/dvd/dvdSynth.png"
              altText="DVD"
              caption={
                <div>
                  <div className="italic">DVD Synth</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-4">
                    <li> Digital sequencer + synthesizer</li>
                    <li>Custom DVD screensaver animations</li>
                    <li>Intuitive knob + button controls</li>
                  </ul>
                </div>
              }
              imageWidth={300}
              imageHeight={300}
              captionClassName="bottom-12 mb-20"
              separatorWidth="w-1/2"
              left='40%'
            />

            {/* Analog */}
            <PortfolioItem
              imageSrc="/analog/analogsynth.png"
              altText="Analog"
              caption={
                <div>
                  <div className="italic">Analog Synthesizer</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-4">
                    <li>Fully analog</li>
                    <li>8-key individually tunable keyboard</li>
                    <li>Photodiode-LED tremelo</li>
                    <li>Wave-inverting overdrive with mix knob</li>
                  </ul>
                </div>
              }
              imageWidth={300}
              imageHeight={300}
              captionClassName="bottom-8 mb-6"
              separatorWidth="w-full"
              left='50%'
            />
          </div>
        </div>


        {/* Cicada Column */}
        <div className="w-1/3 overflow-y-auto">
          <ColumnHeader title="Cicada" shimmer />
          <div className="p-4 space-y-4">
            {/* Placeholder items */}
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-32 flex items-center justify-center">
                Cicada {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Software Column */}
        <div className="w-1/3 overflow-y-auto">
          <ColumnHeader title="Software" bgColor="#e06236" />
          <div className="p-4 space-y-4">
            {/* Live Scrubber */}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif" // Update this path to your actual image
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">Custom Teensy Audio Library Object: Live Scrubber</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Popular and modular embedded scrubbing software for the Teensy Audio Library</li>
                    <li>Adjustable scrubbing rate, change audio files on the fly</li>
                    <li>Complex DSP, yet easy to use and implement in projects</li>
                  </ul>
                </div>
              }
              imageWidth={100}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
            {/* Embedded TF */}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif" // Update this path to your actual image
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">Custom Teensy Audio Library Object: Live Scrubber</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Clean sounding, adjustable live scrubber</li>
                    <li>Adjustable scrubbing rate, change audio files on the fly</li>
                    <li>Complex DSP, yet easy to use and implement in projects</li>
                  </ul>
                </div>
              }
              imageWidth={200}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
            {/* Live Scrubber */}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif" // Update this path to your actual image
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">Custom Teensy Audio Library Object: Live Scrubber</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Clean sounding, adjustable live scrubber</li>
                    <li>Adjustable scrubbing rate, change audio files on the fly</li>
                    <li>Complex DSP, yet easy to use and implement in projects</li>
                  </ul>
                </div>
              }
              imageWidth={200}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
            {/* Live Scrubber */}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif" // Update this path to your actual image
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">Custom Teensy Audio Library Object: Live Scrubber</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Clean sounding, adjustable live scrubber</li>
                    <li>Adjustable scrubbing rate, change audio files on the fly</li>
                    <li>Complex DSP, yet easy to use and implement in projects</li>
                  </ul>
                </div>
              }
              imageWidth={200}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

/* PortfolioItem Component */
function PortfolioItem({
  imageSrc,
  altText,
  caption,
  imageWidth = 300,
  imageHeight = 300,
  captionClassName = '',
  separatorWidth = 'w-1/2',
  left = '25%',
}: {
  imageSrc: string;
  altText: string;
  caption: React.ReactNode;
  imageWidth?: number;
  imageHeight?: number;
  captionClassName?: string;
  separatorWidth?: string;
  left?: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Image */}
      <Image
        src={imageSrc}
        alt={altText}
        width={imageWidth}
        height={imageHeight}
        objectFit="contain"
      />

      {/* Caption */}
      <div
        className={`relative lefgt text-center ${captionClassName}`}
        style={{}}
      >
        {caption}
      </div>

      {/* Horizontal Separator */}
      <div className={`mt-0 ${separatorWidth} h-[1px]`} />
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
function ColumnHeader({
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


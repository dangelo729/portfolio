
import SolarSystem from './components/SolarSystem';
import ColumnHeader from './components/ColumnHeader';
import PortfolioItem from './components/PortfolioItem';

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
            {/* Live Scrubber */}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif"
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">CICADA</div>
                </div>
              }
              imageWidth={100}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
          </div>
        </div>




        {/* Software Column */}
        <div className="w-1/3 overflow-y-auto">
          <ColumnHeader title="Software" bgColor="#e06236" />
          <div className="p-4 space-y-4">
            {/* Live Scrubber */}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif"
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">Custom Teensy Audio Library Object: Live Scrubber</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Modular embedded scrubbing software for the Teensy Audio Library</li>
                    <li>Adjustable scrubbing rate, change audio files on the fly</li>
                    <li>Complex DSP, yet easy to use and implement in projects</li>
                    <li>Gained popularity within the teensy open source community</li>
                  </ul>
                </div>
              }
              imageWidth={100}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
            {/* Sound identifier*/}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif"
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">SOUND IDENTIFYING WEB APP </div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Uses Docker to integrete machine learning, Flask-based web app, and MongoDB containers</li>
                    <li>Allows for quick identification of sounds through microphone imput using Librosa</li>
                    <li>Built under a strict deadline using Agile methodology</li>
                  </ul>
                </div>
              }
              imageWidth={100}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
            {/* Embedded TF Model */}
            <PortfolioItem
              imageSrc="/ETF/home.gif"
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">EMBEDDED TENSORFLOW MODEL</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Custom designed and trained sequential model</li>
                    <li>Intelligently outputs midi notes to harmonize with a user's melody in real time</li>
                    <li>Low latency and power consumption, running on a Teensy 4.1 microcontroller</li>
                  </ul>
                </div>
              }
              imageWidth={100}
              imageHeight={300}
              captionClassName="bottom-0 mb-0"
              separatorWidth="w-3/4"
              left="55%"
            />
            {/* Library DB */}
            <PortfolioItem
              imageSrc="/scrub/scrub.gif"
              altText="Live Scrubber"
              caption={
                <div>
                  <div className="italic">LIBRARY DATABASE WEB APP</div>
                  <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                    <li>Created in an agile methodology with a tight team of 3 others</li>
                    <li>Integrates Flash, MongoDB, HTML, and CSS</li>
                    <li>Logs lent books, due dates, and available stock</li>
                    <li>Main app logic coded in Python</li>
                  </ul>
                </div>
              }
              imageWidth={100}
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

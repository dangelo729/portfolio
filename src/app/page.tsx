"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SolarSystem from './components/SolarSystem';
import ColumnHeader from './components/ColumnHeader';
import PortfolioItem from './components/PortfolioItem';

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

export default function Home() {
  const [isPrototypesExpanded, setIsPrototypesExpanded] = useState(false);
  const [isCicadaExpanded, setIsCicadaExpanded] = useState(false);
  const [isSoftwareExpanded, setIsSoftwareExpanded] = useState(false);

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
        <div className="w-1/3 overflow-y-auto  space-y-4">
          <ColumnHeader
            title="Prototypes"
            bgColor="#d7a64b"
            onClick={() => setIsPrototypesExpanded(!isPrototypesExpanded)}
            isExpanded={isPrototypesExpanded}
          />
          <AnimatePresence>
            {isPrototypesExpanded && (
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Portfolio Items */}
                {/* Reverse The Curse */}
                <PortfolioItem
                  imageSrc="/rtc/ReverseTheCurse_Green-removebg-preview-2.png"
                  altText="Reverse The Curse"
                  caption={
                    <div>
                      <div className="italic font-bold">Reverse The Curse</div>
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
                  left="55%"
                />

                {/* Sol */}
                <PortfolioItem
                  imageSrc="/sol/noBGSynth.png"
                  altText="Sol"
                  caption={
                    <div>
                      <div className="italic font-bold">Sol+Serenade</div>
                      <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-4">
                        <li>2-engine digital synthesizer (planetary/vocal synthesis)</li>
                        <li>4-voice polyphony</li>
                        <li>Satisfying, seamless OLED integration</li>
                      </ul>
                    </div>
                  }
                  imageWidth={300}
                  imageHeight={300}
                  captionClassName="bottom-8 mb-6"
                  separatorWidth="w-2/3"
                  left="50%"
                />

                {/* DVD */}
                <PortfolioItem
                  imageSrc="/dvd/dvdSynth.png"
                  altText="DVD"
                  caption={
                    <div>
                      <div className="italic font-bold">DVD Synth</div>
                      <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-4">
                        <li>Digital sequencer + synthesizer</li>
                        <li>Custom DVD screensaver animations</li>
                        <li>Intuitive knob + button controls</li>
                      </ul>
                    </div>
                  }
                  imageWidth={300}
                  imageHeight={300}
                  captionClassName="bottom-12 mb-20"
                  separatorWidth="w-1/2"
                  left="40%"
                />

                {/* Analog */}
                <PortfolioItem
                  imageSrc="/analog/analogsynth.png"
                  altText="Analog"
                  caption={
                    <div>
                      <div className="italic font-bold">Analog Synthesizer</div>
                      <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-4">
                        <li>Fully analog</li>
                        <li>8-key individually tunable keyboard</li>
                        <li>Photodiode-LED tremolo</li>
                        <li>Wave-inverting overdrive with mix knob</li>
                      </ul>
                    </div>
                  }
                  imageWidth={300}
                  imageHeight={300}
                  captionClassName="bottom-8 mb-6"
                  separatorWidth="w-full"
                  left="50%"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cicada Column */}
        <div className="w-1/3 overflow-y-auto space-y-4">
          <ColumnHeader
            title="Cicada"
            shimmer
            onClick={() => setIsCicadaExpanded(!isCicadaExpanded)}
            isExpanded={isCicadaExpanded}
          />
          <AnimatePresence>
            {isCicadaExpanded && (
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Cicada Item */}
                <PortfolioItem
                  imageSrc="/cicada/cicada_round.gif"
                  altText="Cicada"
                  caption={
                    <div className="space-y-4">
                      <ul className="text-center font-bold">
                        Cicada is a portable, powerful, and intuitive art-synth
                      </ul>
                      <ul className="text-center italic text-sm">
                        Designed, engineered, and built by Peter D'Angelo.
                      </ul>
                      <ul className="text-center">
                        <Button href="https://www.linkedin.com/in/peter-dangelo/" label="Learn More" />
                      </ul>
                    </div>
                  }
                  imageWidth={100}
                  imageHeight={300}
                  captionClassName="bottom-0 mb-0"
                  separatorWidth="w-3/4"
                  left="55%"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Software Column */}
        <div className="w-1/3 overflow-y-auto  space-y-4">
          <ColumnHeader
            title="Software"
            bgColor="#e06236"
            onClick={() => setIsSoftwareExpanded(!isSoftwareExpanded)}
            isExpanded={isSoftwareExpanded}
          />
          <AnimatePresence>
            {isSoftwareExpanded && (
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Software Items */}
                {/* Live Scrubber */}
                <PortfolioItem
                  caption={
                    <div>
                      <div className="italic font-bold">
                        Custom Teensy Audio Library Object: LIVE SCRUBBER
                      </div>
                      <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                        <li>Modular embedded scrubbing software for the Teensy Audio Library</li>
                        <li>Adjustable scrubbing rate, change audio files on the fly</li>
                        <li>Complex DSP, yet easy to use and implement in projects</li>
                        <li>Gained popularity within the Teensy open source community</li>
                      </ul>
                    </div>
                  }
                  imageWidth={100}
                  imageHeight={300}
                  captionClassName="bottom-0 mb-0"
                  separatorWidth="w-3/4"
                  left="55%"
                />
                {/* Sound Identifier */}
                <PortfolioItem
                  caption={
                    <div>
                      <div className="italic font-bold">SOUND IDENTIFYING WEB APP</div>
                      <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                        <li>
                          Uses Docker to integrate machine learning, Flask-based web app, and MongoDB containers
                        </li>
                        <li>
                          Allows for quick identification of sounds through microphone input using Librosa
                        </li>
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
                  caption={
                    <div>
                      <div className="italic font-bold">EMBEDDED TENSORFLOW MODEL</div>
                      <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                        <li>Custom designed and trained sequential model</li>
                        <li>
                          Intelligently outputs MIDI notes to harmonize with a user's melody in real-time
                        </li>
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
                {/* Library Database */}
                <PortfolioItem
                  caption={
                    <div>
                      <div className="italic font-bold">LIBRARY DATABASE WEB APP</div>
                      <ul className="icon-list list-disc list-inside text-sm mt-1 text-left space-y-2">
                        <li>Created using Agile methodology with a team of 3 others</li>
                        <li>Integrates Flask, MongoDB, HTML, and CSS</li>
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

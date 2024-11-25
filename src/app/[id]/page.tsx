// src/app/[id]/page.tsx

import { notFound } from 'next/navigation';
import PortfolioDetail from '../components/PortfolioDetail';

interface PortfolioItemData {
  id: string;
  title: string;
  images: { src: string; alt: string }[];
  date: string;
  description: string;
  learnMoreLink?: string;
}

const portfolioItems: { [key: string]: PortfolioItemData } = {
'reverse-the-curse': {
  id: 'reverse-the-curse',
  title: 'Reverse The Curse',
  images: [
    { src: '/rtc/ReverseTheCurse_Green-removebg-preview-2.png', alt: 'Reverse The Curse Image 1' },
    { src: '/rtc/ReverseTHEcurse_1296x-removebg-preview-2.png', alt: 'Reverse The Curse Image 2' },
  ],
  date: 'Summer 2023',
  description: [
    `BrandNewNoise is an innovative musical toy company owned and operated by Richard Upchurch in Dallas, Texas. During my internship there, I was responsible for designing and engineering the software for their new product, Reverse the Curse.`,
    `While I can’t share the proprietary code, the design process involved exploration into creating robust production firmware. This required attention to every small detail, including but not limited to: Power saving measures, performance on resource-limited embedded systems, clean signal flow, understanding and extension of a robust state-machine, and intuitivity in the hands of customers.`,
  ],
  learnMoreLink: 'https://www.brandnewnoise.com/collections/full-collection/products/reverse-the-curse',
},

  'sol': {
    id: 'sol',
    title: 'Sol + Serenade',
    images: [
      { src: '/sol/noBgSideView.png', alt: 'sol1' },
      { src: '/sol/noBGSynth.png', alt: 'sol2' },
    ],
    date: 'Winter 2022',
    description:[ `
Serenade and Sol are two synthesizer engines built on Teensy 4.1 based hardware. It includes a custom designed PCB, two SMD encoders, a 96x128 OLED screen, a built-in speaker, a Lipo battery, and a 13 key pushbutton keyboard with octave keys.`,

`Sol is a 4-voice planetary synthesizer. The user is given a solar system and allowed to change the mass of the sun and aspects of the planets orbiting it, affecting the sound in various ways. This instrument is an exploration in sound design. The joy comes through building a unique solar system and hearing it come to life.`,

`Serenade is a 4-voice vocal synthesizer. It is built around four visually pleasing on-screen singers, with simple controls to change mouth shape and the distance between them. Serenade is designed for  simple, easily accessible fun for anyone picking up this synth, while still having robust and complex DSP in the backend.
    `],
    learnMoreLink: 'https://www.youtube.com/watch?v=78bMoYuz5h8',
  },
  'dvd': {
    id: 'dvd',
    title: 'DVD Synthesizer',
    images: [
      { src: '/dvd/dvdSynth.png', alt: 'dvd1' },
      { src: '/dvd/dvdSynthSide.png', alt: 'dvd2' },
    ],
    date: 'Winter 2021',
    description:[ `
      This simple yet fun DVD sequencer/synth utilizes an OLED screen and simple potentiometer/pushbutton controls to create a fun and intuitive experience. Utilizing the common “DVD screensaver” UI, it allows the user to control and tune individual balls bouncing around the screen to synthesize fascinating rhythms, with the capability to synthesize sounds from the musical to the abstract.`,

`It runs on a Teensy 3.5, with two potentiometers and two pushbuttons as the controls, and a 128x128 pixel OLED for the screen`,
    ],
    learnMoreLink: 'https://www.youtube.com/watch?v=uWRDKAKuR1U',
  },
  'analog': {
    id: 'analog',
    title: 'Analog Synthesizer',
    images: [
      { src: '/analog/analogsynth.png', alt: 'ana1' },
      { src: '/analog/analogSynthside.png', alt: 'ana2' },
    ],
    date: 'Spring 2021',
    description: [`
This fully analog synth, running on two 9v batteries, has a wide array of features. It has an 8-key individually-tunable keyboard, a switchable waveform-driven by an op-amp oscillator, a photodiode-LED tremelo with adjustable rate and depth (controlled by the LED’s brightness), and a unique waveform-flipping overdrive, which inverts the negative portion of the wave to the positive while also dirtying up the sound. This can be crossfaded with the dry signal to create a wide array of unique synthesized sounds. 
    `],
    learnMoreLink: 'https://www.youtube.com/watch?v=kkzXT29sErE',
  },
  'scrubber': {
    id: 'scrubber',
    title: 'Custom Teensy Audio Library Object: LIVE SCRUBBER',
    images: [
      { src: '/scrub/scrub.gif', alt: 'ana2' },
    ],
    date: 'Spring 2024',
    description: [`
This is a custom audio object for the teensy audio library that implements a complicated yet fundamental utility for digital audio projects: live scrubbing. It allows the user to scrub through an audio file as if they were scratching through a vinyl record on a turntable. While the underlying logic is complex, the object is intuitive, fun, and easy to use.
    `,
    `The technical challenges of this object included creating a circular buffer to continuously store and read data quickly from an SD card, efficient DMA memory management, and clean sample interpolation for a smooth audio output.`,
  ],
    learnMoreLink: 'https://github.com/dangelo729/teensy_audio_library_scrubber',
  },
  'sound': {
    id: 'sound',
    title: 'Sound Identifying Web App',
    images: [
    ],
    date: 'Fall 2024',
    description: [
`This is a web app created as part part of a school project with a team of 3 other students using an Agile methodology.`,
`I was primarily respoinsibly for building out the front end, and configuring docker to allow all the components to run together seamlessly.`,
`Additionally, I was resposnibly for refining the machine learning backend to improve output accuracy, as well as building out the pipeline to store the results in a local MongoDB Database.`,
    ],
    learnMoreLink: 'https://github.com/software-students-fall2024/4-containers-super-awesome-team-name',
  },
  'tf': {
    id: 'tf',
    title: 'Emdedded Tensorflow Machine Learning Model',
    images: [
    ],
    date: 'Fall 2024',
    description: [
`This is a custom trained TensorFlow Lite model. It was trained on floating point values using quantization aware training, and later quantized to use 8-bit integer values, in order to conserve space and limit latency when later deployed on a microcontroller. It allows a user to play a piano keyboard and automatically have 3 voices accompany them.`,
`It was trained on the js-fakes midi dataset, a collection of midi files generated to imitate four-voice Bach chorales.`,
`It it currently undergoing active development, and will be present on my upcoming project, Cicada.`,
    ],
    learnMoreLink: 'https://github.com/dangelo729/Tensorflow_Lite_Harmonizer',
  },
  'website': {
    id: 'website',
    title: 'This Website, My Portfolio',
    images: [
    ],
    date: 'Fall 2024',
    description: [
`This website is a dynamic portfolio built with React.js, Next.js, and Tailwind CSS. It features a modular design that allows for smooth scalability and future enhancements, with a strong emphasis on responsive layouts and clean user interactions. The site showcases a variety of projects, each with dedicated pages designed to highlight their unique features and contributions, ensuring a seamless and intuitive browsing experience.`,
`The design is inspired by clarity and functionality, incorporating animation with Framer Motion to bring a sense of depth and engagement to the user interface. This portfolio was built to explore the integration of lovely design with modern web development practices, blending performance optimization with aesthetic appeal. It is currently live and actively maintained as a central hub for my work.`,

    ],
    learnMoreLink: 'https://github.com/dangelo729/portfolio',
  },
  'lib': {
    id: 'lib',
    title: 'Library Database Web App',
    images: [
    ],
    date: 'Fall 2024',
    description: [
`Created with a team of 4 classmates, this library database web app is was created as an excercise to create a multi-faceted yet tightly-interated app using Flask, MongoDB, and Python.`,
`Additionally, all work had to be coordinated and structured using Git for version control and the agile developement method throughout.`,

    ],
    learnMoreLink: 'https://github.com/software-students-fall2024/2-web-app-superteam',
  },
};

interface PortfolioItemPageProps {
  params: { id: string };
}

export default function PortfolioItemPage({ params }: PortfolioItemPageProps) {
  const item = portfolioItems[params.id];

  if (!item) {
    notFound();
  }

  return (
    <PortfolioDetail
      title={item.title}
      images={item.images}
      date={item.date}
      description={item.description}
      learnMoreLink={item.learnMoreLink}
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(portfolioItems).map((id) => ({ id }));
}

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';
import { Oval } from 'react-loader-spinner';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion';

const heroImages = [
  { src: '/_MG_1293.jpg', pos: 'center' },
  { src: '/_MG_1330.jpg', pos: 'top' },
  { src: '/_MG_1343.jpg', pos: 'top' },
  { src: '/hero-image.png', pos: 'center' },
];

const logoSlides = [
  '/pawel-chu-ULh0i2txBCY-unsplash.jpg',
  '/kenny-eliason-Wp7t4cWN-68-unsplash.jpg',
  '/r3.png',
  '/dennis-schmidt-dcW_2gu5vh4-unsplash.jpg',
  '/chastity-cortijo-M8iGdeTSOkg-unsplash.jpg',
];

const services = [
  'Property management',
  'Property appraisal & sales',
  'House furnishing',
  'Property development',
  'Title document perfection',
  'Architectural drawing',
  'Construction management',
  'Real estate consultancy',
  'Decluttering',
];

const ROWS = 2;
const SLIDE_DURATION = 25;

export default function SaulltechHero() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(
      () => setHeroIndex((i) => (i + 1) % heroImages.length),
      5000
    );
    const logoTimer = setInterval(
      () => setLogoIndex((i) => (i + 1) % logoSlides.length),
      5000
    );
    return () => {
      clearInterval(heroTimer);
      clearInterval(logoTimer);
    };
  }, []);

  const rows = Array.from({ length: ROWS }, (_, i) =>
    services.filter((_, idx) => idx % ROWS === i)
  );

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <img
          src={heroImages[heroIndex].src}
          className={`h-[92vh] w-full object-cover ${
            heroImages[heroIndex].pos === 'top'
              ? 'object-top'
              : 'object-center'
          }`}
        />
        <div className="absolute inset-0 bg-[#001f3f]/75" />

        <div className="absolute inset-0 z-10 flex items-center px-6 lg:px-16">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-white">

            {/* TEXT */}
            <div className="max-w-xl text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Discover <br />
                <span className="bg-orange-600 px-4 py-1 rounded-xl inline-block">
                  Properties
                </span>{' '}
                that suits
              </h1>

              <div className="mt-4 text-xl sm:text-2xl font-light">
                <Typewriter
                  options={{
                    strings: [
                      ' your Status...',
                      ' your Family...',
                      ' your Lifestyle...',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            {/* LOGO CARD */}
            <LogoCard logoIndex={logoIndex} />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#f4f4f4] py-24 overflow-hidden">
        <h2 className="text-center text-4xl font-semibold text-[#003366] mb-16">
          Our Services
        </h2>

        <div className="space-y-12">
          {rows.map((row, i) => (
            <SlidingRow key={i} row={row} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#f4f4f4] pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Stat value={<CountUp end={2000} />} label="Happy Customers" />
          <Stat value={<CountUp end={9000} />} label="Premium Products" />
          <Stat value={<CountUp end={20} />} label="Award Winnings" />
        </div>
      </section>
    </>
  );
}

/* ================= COMPONENTS ================= */

function LogoCard({ logoIndex }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      className="w-full max-w-[380px] h-[380px] sm:h-[420px] relative perspective-1000"
    >
      <div className="absolute mt-10 inset-0 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">

        {/* WATERMARK */}
        <img
          src="/logo2.png"
          className="absolute inset-0 m-auto w-48 opacity-4"
        />

        {/* ROTATING IMAGE */}
        <AnimatePresence mode="wait">
          <motion.img
            key={logoIndex}
            src={logoSlides[logoIndex]}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function SlidingRow({ row, reverse }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: reverse ? ['0%', '100%'] : ['0%', '-100%'],
      transition: {
        repeat: Infinity,
        duration: SLIDE_DURATION,
        ease: 'linear',
      },
    });
  }, []);

  return (
    <motion.div
      className="flex gap-6 w-[200%]"
      animate={controls}
      onHoverStart={() => controls.stop()}
      onHoverEnd={() =>
        controls.start({
          x: reverse ? ['0%', '100%'] : ['0%', '-100%'],
          transition: {
            repeat: Infinity,
            duration: SLIDE_DURATION,
            ease: 'linear',
          },
        })
      }
    >
      {row.concat(row).map((service, i) => (
        <div
          key={i}
          className="min-w-[220px] bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
        >
          <p className="text-[#003366] font-medium text-lg">{service}</p>
        </div>
      ))}
    </motion.div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
      <div className="text-3xl font-bold text-[#003366]">{value}+</div>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

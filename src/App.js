import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.svg';
import './App.css';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";
import Marquee from 'react-fast-marquee';

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
  </svg>
);

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('soon...');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const springConfig = { stiffness: 300, damping: 30 };

  return (
    <motion.div>
      <motion.div className="h-screen w-screen flex justify-center items-center bg-[#F7EAD8]">
        <div className="absolute top-7 right-7 flex flex-col items-center z-10">
          <div className="flex flex-row">
            <motion.a 
              href="https://x.com/" 
              className="p-2"
              whileHover={{ scale: 1.1 }}
              transition={springConfig}
            >
              <img src={Xlogo} alt="Xlogo" className="w-12 h-12 rounded-md" />
            </motion.a>
            <motion.a 
              href="https://t.me/" 
              className="p-2"
              whileHover={{ scale: 1.1 }}
              transition={springConfig}
            >
              <img src={TG} alt="Tg logo" className="w-12 h-12" />
            </motion.a>
          </div>
        </div>
        <div className='absolute top-[12.5%] md:top-[7.5%] text-6xl md:text-9xl font-custom'>
          <div className='relative'>smarty
            <img className='absolute -top-8 -left-10 h-[10vh] md:h-[15vh]' src="grade.png" alt="Grade" />
          </div>
        </div>
        <motion.img
          className='h-[50%]'
          src="smarty.png"
          alt="Smarty"
          whileHover={{ scale: 1.07, rotate: 7 }}
          transition={springConfig}
        />
        <motion.div 
          className='absolute bottom-10 flex justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className='flex flex-col sm:flex-row justify-center bg-slate-100 rounded-xl md:rounded-full z-10 items-center gap-1 md:gap-3 px-5 py-3 max-w-full border-2 border-slate-400'>
            <motion.button
              onClick={handleCopy}
              className="text-sm bg-green-600 text-white py-2 px-4 rounded-full border-2 border-white z-10 whitespace-nowrap"
              whileHover={{ scale: 1.05, backgroundColor: '#16a34a' }}
              whileTap={{ scale: 0.95 }}
              transition={springConfig}
            >
              {copied ? 'Copied!' : <CopyIcon />}
            </motion.button>
            <div className='text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap font-custom'>
              coming soon...
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className='h-screen w-screen flex justify-center items-center bg-[#f9f5f0]'>
        <img className='w-[60%]' src="memess.png" alt="Memes" />
      </div>
      <div className='h-screen w-screen flex justify-center items-center bg-[#F7EAD8]'>
        <img className='h-[75%]' src="report.png" alt="Report" />
      </div>
    </motion.div>
  );
}

export default App;
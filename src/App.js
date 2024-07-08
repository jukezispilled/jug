import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.svg';
import './App.css';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";
import Marquee from 'react-fast-marquee';
import backgroundImage from './bg4.jpeg';

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
  </svg>
);

function App() {
  const [copied, setCopied] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText('2n9nLiE4Fw35fUCLELBxxCRDhcNEMciMJmpzb3wApump');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEnter = () => {
    setModalVisible(false);
  };

  const springConfig = { stiffness: 300, damping: 30 };

  return (
    <motion.div>
      <motion.div className="h-screen w-screen flex justify-center items-center bg-[#F7EAD8]"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}>
                      {modalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-xl text-center">
                <h1 className="text-3xl mb-4 font-bold">Commandments</h1>
                <div className="text-left mb-4">
                  <p>1. Thou shall not jeet</p>
                  <p>2. Thou shall not farm</p>
                  <p>3. Thou shall not swingtrade</p>
                  <p>4. Thou shall not fud</p>
                  <p>5. Thou shall work for your bags</p>
                  <p>6. Thou shall raid</p>
                  <p>7. Thou shall be active in the community</p>
                  <p>8. Thou shall pray to $ACAT</p>
                  <p>9. Thou shall shill $ACAT</p>
                  <p>10. Thou shall hold $ACAT till the gates of heaven</p>
                </div>
                <button 
                  onClick={handleEnter} 
                  className="bg-yellow-400 text-white py-2 px-4 rounded-full text-xl font-semibold"
                >
                  ENTER
                </button>
              </div>
            </div>
          )}
        <div className="absolute top-5 right-5 md:top-7 md:right-7 flex flex-col items-center z-10">
          <div className="flex flex-row">
            <motion.a 
              href="https://x.com/AngelCatCTO" 
              className="p-1 md:p-2"
              whileHover={{ scale: 1.1 }}
              transition={springConfig}
            >
              <img src={Xlogo} alt="Xlogo" className="w-10 h-10 md:w-12 md:h-12 rounded-md" />
            </motion.a>
            <motion.a 
              href="https://t.me/angelcatsol" 
              className="p-1 md:p-2"
              whileHover={{ scale: 1.1 }}
              transition={springConfig}
            >
              <img src={TG} alt="Tg logo" className="w-10 h-10 md:w-12 md:h-12" />
            </motion.a>
          </div>
        </div>
        <div className='absolute top-[12.5%] md:top-[7.5%] text-7xl md:text-[150px] font-bold text-white font-custom'>
          <div className='relative'>Angel Cat</div>
        </div>
        <motion.img
          className='h-[40%] rounded-xl border-yellow-300 border-4'
          src="ACAT4.jpg"
          alt="ACAT"
          whileHover={{ scale: 1.07, rotate: 7 }}
          transition={springConfig}
        />
        <motion.div 
          className='absolute bottom-10 flex justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className='flex flex-col sm:flex-row justify-center bg-slate-100 rounded-xl md:rounded-full z-10 items-center gap-1 md:gap-3 px-5 py-3 max-w-full border-2 border-yellow-300'>
            <button
              onClick={handleCopy}
              className="text-sm bg-yellow-400 md:hover:bg-yellow-500 transition duration-150 ease-in-out text-white py-2 px-4 rounded-full border-2 border-yellow-300 z-10 whitespace-nowrap"
            >
              {copied ? 'Copied!' : <CopyIcon />}
            </button>
            <div className='text-xs md:text-xl overflow-x-auto whitespace-nowrap'>
              2n9nLiE4Fw35fUCLELBxxCRDhcNEMciMJmpzb3wApump
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;
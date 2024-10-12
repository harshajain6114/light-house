// TrustedBy.js
import React from 'react';

const TrustedBy = () => {
  return (
    <div className="bg-black p-6">
      <h1 className="text-white text-4xl font-normal mt-8 text-center">TRUSTED BY</h1>

      {/* Logo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 w-full max-w-5xl mx-auto">
        {/* Repeating Logo Items */}
        {[
          { src: "https://gateway.lighthouse.storage/ipfs/QmNiJJTjDs7r4KEbGo6JyxbS3WPR4LY1dgQL5oB1YVMiM1", delay: '0.2s' },
          { src: "https://www.lighthouse.storage/_next/image?url=https%3A%2F%2Fgateway.lighthouse.storage%2Fipfs%2FQmNwGq4kLHHrdCvW2EPH4e3nXvadHGpAnkjLA5ZoGUWB8R&w=1920&q=75", delay: '0.4s' },
          { src: "https://www.lighthouse.storage/_next/image?url=https%3A%2F%2Fgateway.lighthouse.storage%2Fipfs%2FQmf3QKQasp4U1FcafBk5rzt4craEjAjZXfpsYR6joBFCA4&w=1920&q=75", delay: '0.6s' },
          { src: "https://www.lighthouse.storage/client/mask.svg", delay: '0.8s' },
          { src: "https://www.lighthouse.storage/client/filemarket.svg", delay: '1s' },
          { src: "https://www.lighthouse.storage/client/filecoin.svg", delay: '1.2s' },
          { src: "https://www.lighthouse.storage/client/silence.svg", delay: '1.4s' },
          { src: "https://www.lighthouse.storage/client/nft_storage.svg", delay: '1.6s' },
          { src: "https://www.lighthouse.storage/client/Aethir.svg", delay: '1.8s' },
          { src: "https://www.lighthouse.storage/client/singularity.svg", delay: '2s' }
        ].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt="Lighthouse Logo"
            className="animate-slideUp w-auto h-auto max-w-[100px] mx-auto"
            style={{ animationDelay: logo.delay }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

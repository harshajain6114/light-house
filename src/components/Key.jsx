import React from 'react'

const Key = () => {
  return (
    <>
      <h1 className="text-white text-4xl font-normal mt-8">KEY FEATURES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl w-full px-6">
        {/* Card 1 */}
        <div className="bg-gray-800 p-4 rounded-2xl w-80 h-[500px]">
          <div className="bg-black relative rounded-2xl mt-8 p-5 h-[450px] flex flex-col items-center justify-center hover:bg-purple-700 transition duration-300 ease-in-out">
            <h1 className="absolute top-0 text-3xl text-wrap text-white mt-2 p-4 text-left">
              Perpetual Storage for a One-Time Investment
            </h1>
            <div className="mb-4 flex justify-center mt-20">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                <img
                  src="https://lhprotocol.com/featureIcon/feature_5.svg"
                  alt="Feature 1"
                  className="w-24 h-24"
                />
              </div>
            </div>
            <p className="text-zinc-400 text-lg">
              Embrace perpetual storage with IPFS and Filecoin's advanced services.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-4 rounded-2xl w-80 h-[500px]">
          <div className="bg-black relative rounded-2xl mt-8 p-5 h-[450px] flex flex-col hover:bg-purple-700 transition duration-300 ease-in-out items-center justify-center">
            <h1 className="absolute top-0 text-3xl text-wrap text-white mt-2 p-4 text-left">
              Decentralized Storage Solutions for Your Files
            </h1>
            <div className="mb-4 flex justify-center mt-20">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                <img
                  src="https://lhprotocol.com/featureIcon/feature_1.svg"
                  alt="Feature 2"
                  className="w-24 h-24"
                />
              </div>
            </div>
            <p className="text-zinc-400 text-lg">
              Harness the power of IPFS and Filecoin to securely store your files on a decentralized network.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-4 rounded-2xl w-80 h-[500px]">
          <div className="bg-black relative rounded-2xl mt-8 p-5 h-[450px] flex hover:bg-purple-700 transition duration-300 ease-in-out flex-col items-center justify-center">
            <h1 className="absolute top-0 text-3xl text-wrap text-white mt-2 p-4 text-left">
              Encryption & Access control functionality
            </h1>
            <div className="mb-4 flex justify-center mt-20">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                <img
                  src="https://lhprotocol.com/featureIcon/feature_4.svg"
                  alt="Feature 3"
                  className="w-24 h-24"
                />
              </div>
            </div>
            <p className="text-zinc-400 text-lg">
              Keep your data safe with token-gated access on a public network.
            </p>
          </div>
        </div>

        {/* Card 4 */}
<div className="bg-gray-800 p-4 rounded-2xl w-80 h-[500px]">
  <div className="bg-black relative rounded-2xl hover:bg-purple-700 transition duration-300 ease-in-out mt-8 p-5 h-[450px] flex flex-col items-center justify-center">
    <h1 className="absolute top-0 text-3xl text-wrap text-white mt-2 p-4 text-left">
      Dedicated IPFS gateways for fast retrievals
    </h1>
    <div className="mb-4 flex justify-center mt-20">
      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
        <img
          src="https://lhprotocol.com/featureIcon/feature_3.svg"
          alt="Feature 4"
          className="w-24 h-24"
        />
      </div>
    </div>
    <p className="text-zinc-400 text-lg">
      Experience lightning-fast retrievals with our dedicated IPFS Gateways.
    </p>
  </div>
</div>

{/* Card 5 */}
<div className="bg-gray-800 p-4 rounded-2xl w-80 h-[500px]">
  <div className="bg-black relative rounded-2xl mt-8 p-5 h-[450px] hover:bg-purple-700 transition duration-300 ease-in-out flex flex-col items-center justify-center">
    <h1 className="absolute top-0 text-3xl text-wrap text-white mt-2 p-4 text-left">
      Decentralized image resizing
    </h1>
    <div className="mb-4 flex justify-center mt-20">
      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
        <img
          src="https://lhprotocol.com/featureIcon/feature_2.svg"
          alt="Feature 5"
          className="w-24 h-24"
        />
      </div>
    </div>
    <p className="text-zinc-400 text-lg">
      Save bandwidth, optimize with blockchain-powered solutions seamlessly without sacrificing image quality.
    </p>
  </div>
</div>

{/* Card 6 */}
<div className="bg-gray-800 p-4 rounded-2xl w-80 h-[500px]">
  <div className="bg-black relative rounded-2xl mt-8 p-5 h-[450px] flex flex-col hover:bg-purple-700 transition duration-300 ease-in-out items-center justify-center">
    <h1 className="absolute top-0 text-3xl text-wrap text-white mt-2 p-4 text-left">
      High-Speed IPFS Video Gateway
    </h1>
    <div className="mb-4 flex justify-center mt-20">
      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
        <img
          src="https://lhprotocol.com/featureIcon/feature_6.svg"
          alt="Feature 6"
          className="w-24 h-24"
        />
      </div>
    </div>
    <p className="text-zinc-400 text-lg">
      Enjoy 4k video streaming at lightning speed with our decentralized storage and dedicated IPFS gateway.
    </p>
  </div>
</div>


      </div>
    </>
  );
}

export default Key;

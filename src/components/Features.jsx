
import React from 'react';

const Features = () => {
  return (
    <>
     <h1 className="text-white text-4xl font-normal mt-10 mb-1 text-center">
  EMPOWERING THE DATA ECONOMY
</h1>


<div className="flex flex-col md:flex-row mt-10 bg-black items-center justify-center w-full h-full p-6">
  {/* Left Side - Text */}
  <div className="md:w-1/2 w-full">
    <h1 className="text-purple-900 text-2xl font-semibold mb-4">DATA DAOs</h1>
    <p className="text-white text-3xl font-bold mb-4">
      Setup and Utilize Smart <br /> Contracts to spin up Data DAOs
    </p>
    <p className="text-white text-lg font-light mb-4">
      Data DAOs that generate yield and ensure long-term preservation<br /> of data with governance.
    </p>
    <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out mb-4">
      LEARN MORE
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-[500px] w-full flex justify-center md:mt-0 mt-6">
    <img
      src="https://lhprotocol.com/suitsIcon/data_daos.png"
      alt="Data DAOs"
      className="shadow-lg rounded w-full max-w-[300px]"
    />
  </div>
</div>

{/* Features Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-12 max-w-6xl w-full px-6">
  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center ">
    <h1 className="text-xl text-white p-0 m-0">Endowment Pool</h1>
    <p className="text-white text-sm mt-1">
      Resilient pool of funds with multiple currency and access to DeFi
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center ">
    <h1 className="text-xl text-white p-0 m-0">Verifiable Proofs</h1>
    <p className="text-white text-sm mt-1">
      Proof of Space Time and PoDSI to ensure continuous availability
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center ">
    <h1 className="text-xl text-white p-0 m-0">Programmability</h1>
    <p className="text-white text-sm mt-1">
      Fine grain control over replications, storage providers, SLA & costs
    </p>
  </div>
</div>

      <hr className="border-t-2 border-white w-full mt-12" />

      {/* Web Application Section */}
      <div className="flex flex-col md:flex-row mt-10 bg-black items-center justify-center w-full h-full p-6">
  {/* Left Side - Text */}
  <div className="w-full sm:w-1/2">
    <h1 className="text-purple-900 text-2xl font-semibold mb-4">WEB APPLICATION</h1>
    <p className="text-white text-3xl font-bold mb-4">
      Secure and Simplify Your File <br /> Storage and Sharing
    </p>
    <p className="text-white text-lg font-light mb-4">
      Log in and access your files with ease. Our web application provides <br />
      a user-friendly interface to store, retrieve, and share files on <br />
      popular decentralized storage networks - IPFS and Filecoin.
    </p>
    <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out mb-4">
      LEARN MORE
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="w-full sm:w-[500px] flex justify-center mt-6 sm:mt-0">
    <img
      src="https://lhprotocol.com/suitsIcon/web_app.png"
      alt="Web Application"
      className="shadow-lg rounded w-full max-w-[300px]"
    />
  </div>
</div>

{/* Additional Features Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-6xl w-full px-6">
  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Seamless Access</h1>
    <p className="text-white text-sm mt-1">
      Easily login via your favourite social login or wallets supported across multiple networks.
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Advanced Sharing Capabilities</h1>
    <p className="text-white text-sm mt-1">
      Don't use cryptocurrency throughout the website. Better use "tokens" or "assets."
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Diverse Payment Options</h1>
    <p className="text-white text-sm mt-1">
      Pay via credit card, debit card or popular tokens on-chain via our flexible annual or lifetime plans.
    </p>
  </div>
</div>



      <hr className="border-t-2 border-white w-full mt-12" />

      {/* SDK & CLI Section */}
      <div className="flex flex-col md:flex-row mt-10 bg-black items-center justify-center w-full h-full p-6">
  {/* Left Side - Text */}
  <div className="md:w-1/2 w-full">
    <h1 className="text-purple-900 text-2xl font-semibold mb-4">Encryption SDK & Token Gating</h1>
    <p className="text-white text-3xl font-bold mb-4">
      Secure Your Data with Advanced<br />Encryption and Access Controls
    </p>
    <p className="text-white text-lg font-light mb-4">
      Use our encryption SDK to easily store private files and token gate<br />
      them with on-chain NFT, Token Ownership, and much more.
    </p>
    <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out mb-4">
      LEARN MORE
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-[500px] w-full flex justify-center md:mt-0 mt-6">
    <img
      src="https://lhprotocol.com/suitsIcon/encryption.png"
      alt="SDK & CLI"
      className="shadow-lg rounded w-full max-w-[300px]"
    />
  </div>
</div>

{/* SDK & CLI Feature Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-6xl w-full px-6">
  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Threshold Encryption</h1>
    <p className="text-white text-sm mt-1">
      Protect your data with Lighthouse Kavach, utilizing top-tier encryption techniques such as BLS Threshold Cryptography to ensure maximum security.
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Token Gating</h1>
    <p className="text-white text-sm mt-1">
      Implement access control and token gating using signatures from EVM, Solana, Cosmos, Passkeys, and zkTLS.
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Multiple Networks Supported</h1>
    <p className="text-white text-sm mt-1">
      Easily manage access permissions and authenticate user identities using a variety of wallets and networks.
    </p>
  </div>
</div>

      <hr className="border-t-2 border-white w-full mt-12" />
     
      <div className="flex flex-col md:flex-row mt-10 bg-black items-center justify-center w-full h-full p-6">
  {/* Left Side - Text */}
  <div className="md:w-1/2 w-full">
    <h1 className="text-purple-900 text-2xl font-semibold mb-4">SDK & CLI</h1>
    <p className="text-white text-3xl font-bold mb-4">
      Integrate Lighthouse into your <br />project with our popular <br />development tools
    </p>
    <p className="text-white text-lg font-light mb-4">
      Developers can easily integrate our SDK & CLI into their application <br />
      pipeline in the language of their choice.
    </p>
    <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out mb-4">
      LEARN MORE
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-[500px] w-full flex justify-center md:mt-0 mt-6">
    <img
      src="https://lhprotocol.com/suitsIcon/sdk_cli.png"
      alt="SDK & CLI"
      className="shadow-lg rounded w-full max-w-[300px]"
    />
  </div>
</div>

{/* SDK & CLI Feature Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-6xl w-full px-6">
  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Lighthouse SDK</h1>
    <p className="text-white text-sm mt-1">
      A developer-friendly toolkit that offers libraries, APIs, and extensive documentation to seamlessly integrate Lighthouse.
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Lighthouse CLI</h1>
    <p className="text-white text-sm mt-1">
      CLI that provides developers with full control over file management directly from your terminal with simple commands.
    </p>
  </div>

  <div className="bg-gray-800 p-4 rounded-2xl w-full h-32 flex flex-col justify-center">
    <h1 className="text-xl text-white p-0 m-0">Cross-Platform Flexibility</h1>
    <p className="text-white text-sm mt-1">
      Whether you're building web apps, mobile applications, or desktop solutions, the SDK and CLI ensure compatibility across various platforms.
    </p>
  </div>
</div>


      <hr className="border-t-2 border-white w-full mt-12" />

    </>
  );
};

export default Features;


import React from 'react'

const Testimonials = () => {
  return (
    <div>
      <h1 className="text-white text-4xl font-normal mt-8 text-center">TESTIMONIALS</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl w-full px-6">
    {/* Card 1 */}
    <div className="bg-black border border-slate-700 relative rounded-2xl mt-8 p-5 h-[400px] flex flex-col items-center justify-start ">
      {/* Image and Name */}
      <div className="flex items-center justify-start w-full mb-4">
        <img
          src="https://www.lighthouse.storage/_next/image?url=%2Ftestimonial%2Fsaksham.jpg&w=1920&q=75" // Add your image URL here
          alt="Profile"
          className="w-12 h-12 rounded-full" // Change w-12 and h-12 to adjust the size of the profile image
        />
        <div className="ml-4">
          <h2 className="text-white font-semibold text-lg">
          Saksham</h2> {/* Name */}
          <p className="text-gray-400 text-sm">MetaWork Labs</p> {/* Job Title */}
        </div>
      </div>
      {/* Testimonial Text */}
      <p className="text-white text-base mt-5 ">
        Lighthouse with Macha delivers optimal Decentralized Storage on IPFS and Filecoin. The seamless integration and exceptional speed make it our top pick for Web3 Storage. As a reliable Filecoin Storage Provider, Lighthouse stands out for NFT Data Security, solidifying its role in our decentralized storage infrastructure for Web3.
      </p>
    </div>
    <div className="bg-black border  border-slate-700 relative rounded-2xl mt-8 p-5 h-[400px] flex flex-col items-center justify-start ">
      {/* Image and Name */}
      <div className="flex items-center justify-start w-full mb-4">
        <img
          src="https://www.lighthouse.storage/_next/image?url=%2Ftestimonial%2Fjagdeep.jpg&w=1920&q=75" // Add your image URL here
          alt="Profile"
          className="w-12 h-12 rounded-full" // Change w-12 and h-12 to adjust the size of the profile image
        />
        <div className="ml-4">
          <h2 className="text-white font-semibold text-lg">
          Jagdeep sidhu</h2> {/* Name */}
          <p className="text-gray-400 text-sm">Syscoin</p> {/* Job Title */}
        </div>
      </div>
{/* Testimonial Text */}
      <p className="text-white text-base mt-5">
      Lighthouse, with its incentivized storage, fuels data availability market competition in the realm of modular blockchains like Syscoin. It stands as a more affordable and secure choice compared to cloud storage, ensuring extended data liveness guarantees for participants in the network. Embrace decentralized storage solutions for heightened security and efficiency in blockchain data management. </p>
    </div>
    <div className="bg-black border border-slate-700 relative rounded-2xl mt-8 p-5 h-[400px] flex flex-col items-center justify-start ">
      {/* Image and Name */}
      <div className="flex items-center justify-start w-full mb-4">
        <img
          src="https://www.lighthouse.storage/_next/image?url=%2Ftestimonial%2FQibing.jpg&w=1920&q=75" // Add your image URL here
          alt="Profile"
          className="w-12 h-12 rounded-full" // Change w-12 and h-12 to adjust the size of the profile image
        />
        <div className="ml-4">
          <h2 className="text-white font-semibold text-lg">
          Qibing Li</h2> {/* Name */}
          <p className="text-gray-400 text-sm">DataverseOS</p> {/* Job Title */}
        </div>
      </div>
      {/* Testimonial Text */}
      <p className="text-white text-base mt-5">
      Lighthouse perpetual storage is the best practice in the FVM community. By integrating Lighthouse SDK, DataverseOS ecosystem dApps can access functions of programmable storage and store user files on Filecoin and customize payment solutions easily!
      </p>
    </div>
    <div className="bg-black border border-slate-700 relative rounded-2xl mt-8 p-5 h-[400px] flex flex-col items-center justify-start ">
      {/* Image and Name */}
      <div className="flex items-center justify-start w-full mb-4">
        <img
          src="https://www.lighthouse.storage/_next/image?url=%2Ftestimonial%2Fkaren.png&w=1920&q=75" // Add your image URL here
          alt="Profile"
          className="w-12 h-12 rounded-full" // Change w-12 and h-12 to adjust the size of the profile image
        />
        <div className="ml-4">
          <h2 className="text-white font-semibold text-lg">
          Karen</h2> {/* Name */}
          <p className="text-gray-400 text-sm">Daln</p> {/* Job Title */}
        </div>
      </div>
    {/* Testimonial Text */}
      <p className="text-white text-base mt-5">
      The encryption and on-chain access control mechanism enabled by Lighthouse is instrumental to our design and engineering work at Daln. Integrating the SDK into our UI was a breeze.
      </p>
    </div>
    <div className="bg-black border border-slate-700 relative rounded-2xl mt-8 p-5 h-[400px] flex flex-col items-center justify-start ">
      {/* Image and Name */}
      <div className="flex items-center justify-start w-full mb-4">
        <img
          src="https://www.lighthouse.storage/_next/image?url=%2Ftestimonial%2Fhenri.jpg&w=1920&q=75" // Add your image URL here
          alt="Profile"
          className="w-12 h-12 rounded-full" // Change w-12 and h-12 to adjust the size of the profile image
        />
        <div className="ml-4">
          <h2 className="text-white font-semibold text-lg">
          Henri</h2> {/* Name */}
          <p className="text-gray-400 text-sm">OKContract</p> {/* Job Title */}
        </div>
      </div>
      {/* Testimonial Text */}
      <p className="text-white text-base mt-5">
      Lighthouse is the missing piece in the web3 ecosystem that enables OKcontract users to directly upload and pin to IPFS transparently and permanently.
      </p>
    </div>
    <div className="bg-black border border-slate-700 relative rounded-2xl mt-8 p-5 h-[400px] flex flex-col items-center justify-start ">
      {/* Image and Name */}
      <div className="flex items-center justify-start w-full mb-4">
        <img
          src="https://www.lighthouse.storage/_next/image?url=%2Ftestimonial%2Flya.png&w=1920&q=75" // Add your image URL here
          alt="Profile"
          className="w-12 h-12 rounded-full" // Change w-12 and h-12 to adjust the size of the profile image
        />
        <div className="ml-4">
          <h2 className="text-white font-semibold text-lg">
          lya Orlov</h2> {/* Name */}
          <p className="text-gray-400 text-sm">FileMarket</p> {/* Job Title */}
        </div>
      </div>
      {/* Testimonial Text */}
      <p className="text-white text-base mt-5">
      Great product, inspired team with clear vision. Their permanent storage functionality is one of a kind scaling quickly with demands of FileMarket user growth
      </p>
    </div>
  </div>
    </div>
  )
}

export default Testimonials

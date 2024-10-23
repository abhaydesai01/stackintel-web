// pages/index.js
import Image from "next/image";
import cardImage1 from "../assets/services/services1.png";
import cardImage2 from "../assets/services/services2.png";
import cardImage3 from "../assets/services/services3.png";

const Mid = () => {
  return (
    <div>
      {/* Cards Section */}
      <section className="max-w-7xl mx-auto py-16 bg-transparent">
        <div className="">
          {/* Section Heading */}
          <div className="flex px-4 lg:flex-row items-center flex-col justify-center  lg:justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-left text-gray-900 mb-4">
                The issuer-processor with <br /> the widest global reach
              </h2>
              <p className="text-left text-gray-600">
                We are committed to transforming the way people interact with
                their
              </p>
              <p className="text-left text-gray-600">
                finances, making it simpler, smarter, and more inclusive for
                everyone.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-gray-700 px-6 py-2 rounded-full border border-gray-600 hover:text-gray-900 text-lg font-medium transition"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-6 text-left ">
              <div className="bg-[#CCF6EA] group overflow-hidden cursor-pointer border border-emerald-300 rounded-[10px]">
                <Image
                  src={cardImage1}
                  alt="Prepaid and Debit Cards"
                  className="h-auto w-[100%] pt-10 pl-12 group-hover:scale-110 transition-all duration-200 ease-in-out"
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
                Prepaid and debit cards
              </h3>
              <p className="text-gray-600">
                Rapidly and easily issue branded single-use, or multi-use,
                virtual cards to create secure, customizable payments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 text-left">
              <Image
                src={cardImage2}
                alt="Contactless Payments"
                className="mx-auto mb-4"
                width={400}
                height={400}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Contactless payments
              </h3>
              <p className="text-gray-600">
                Push cards to digital wallets for immediate access, and to
                enable contactless payments in-person.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 text-left">
              <div className="bg-[#FFD5BF33] group overflow-hidden cursor-pointer border border-orange-300 rounded-[10px]">
                <Image
                  src={cardImage3}
                  alt="Most Powerful APIs"
                  className="h-auto w-[100%] pl-10 pt-14 group-hover:scale-110 transition-all duration-200 ease-in-out"
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
                The most powerful APIs
              </h3>
              <p className="text-gray-600">
                We build the world’s most powerful APIs, in-house from the
                ground up. This creates seamless, modular flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mid;

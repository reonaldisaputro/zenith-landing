import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="bg-black p-10 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/img-1.png"
            alt="Project Image"
            width={500}
            height={300}
            className="rounded-lg w-full md:w-1/2"
          />
          <div>
            <h3 className="text-yellow-400 font-semibold">
              Product Designer @ ND
            </h3>
            <h2 className="text-white text-xl font-bold mt-2">
              Sharing a Window into the Real Classroom
            </h2>
            <p className="text-gray-300 mt-2">UX/UI, Front End, Branding</p>
            <a href="#" className="text-blue-400 mt-3 inline-block">
              Explore the Case Study...
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div>
            <h3 className="text-yellow-400 font-semibold">
              Product Designer @ ND
            </h3>
            <h2 className="text-white text-xl font-bold mt-2">
              Sharing a Window into the Real Classroom
            </h2>
            <p className="text-gray-300 mt-2">UX/UI, Front End, Branding</p>
            <a href="#" className="text-blue-400 mt-3 inline-block">
              Explore the Case Study...
            </a>
          </div>
          <Image
            src="/img-2.png"
            alt="Project Image"
            width={500}
            height={300}
            className="rounded-lg w-full md:w-1/2"
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/img-1.png"
            alt="Project Image"
            width={500}
            height={300}
            className="rounded-lg w-full md:w-1/2"
          />
          <div>
            <h3 className="text-yellow-400 font-semibold">
              Product Designer @ ND
            </h3>
            <h2 className="text-white text-xl font-bold mt-2">
              Sharing a Window into the Real Classroom
            </h2>
            <p className="text-gray-300 mt-2">UX/UI, Front End, Branding</p>
            <a href="#" className="text-blue-400 mt-3 inline-block">
              Explore the Case Study...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image"
export default function Project({ project }) {
  const { id, title, desc, img, code } = project;
  return (
    <div
      className="md:p-1 rounded-3xl h-[425px]  lg:h-[450px] w-[290px] lg:w-[370px] shadow-cus 
    col-span-6 md:col-span-3 justify-self-center"
    >
      {/* <Image src={img} width={300} height={400}/> */}
      <div className="w-full h-3/5 rounded-t-3xl overflow-hidden">
        <img src={img} alt="error" className="w-full h-full" />
      </div>
      <div className="pt-3 pb-5 px-3 flex flex-col justify-between h-2/5">
        <h2 className="text-center text-2xl">
          ({id}) {title}
        </h2>
        <p className="text-gray-500 text-base text-center">{desc}</p>
        <div className="flex justify-between">
          <button
            onClick={() => (window.location = code)}
            className="btn px-4 py-2 text-base font-medium"
          >
            Go to Code
          </button>
          <button
            onClick={() =>
              (window.location =
                "https://github.com/moaaze151?tab=repositories")
            }
            className="btn px-4 py-2 text-base font-medium"
          >
            Go to Repos
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image"

const Materials = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col md:py-20 xl:py-16 mb-14 xl:mb-4">
      <div className="hide-scrollbar flex h-[300px] items-center justify-start md:justify-between lg:justify-start lg:h-[350px] lg:ml-20"> 
          <Image 
            src="/materials.jpg"
            alt="materials"
            width={700}
            height= {500}
            className="lg:rounded-[50px]"
          />
      </div>
      <div className= "flexEnd px-6 mt-[50px] xl:mt-[-100px] xl:mr-36 2xl:mr-64 2xl:mt-[-50px]">
        <div className="bg-blue-950 p-4 lg:max-w-[425px] xl:max-w-[600px] lg:px-10 lg:py-10 relative overflow-hidden rounded-3xl">
          <p className="regular-16 xl:regular-20 text-white">
            We are Engaged in Manufacturing and Sales of Recycled Plastic Granules. Through our State of Art Manufacturing Facility along with a well Equiped Laboratory We Produce Recycled Plastic Granules Mainly.
          </p>
          <Image 
            src="/quote.svg"
            alt="quotes"
            width={50}
            height={50}
            className="absolute -right-1 bottom-50 w-[75px] md:bottom-32 xl:bottom-28 xl:-right-2 xl:w-[150px] 3xl:right-0"
          />
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col w-full bg-red-500 p-4 lg:px-4 lg:py-4 relative overflow-hidden rounded-3xl border-2 border-black shadow-xl">
              <p className="text-white bold-16">
                Commercial Plastic : 
              </p>
              <p className="text-white regular-16">
                PP , LDPE , HDPE , etc.
              </p>
            </div>
            <div className="flex flex-col w-full bg-red-500 p-4 lg:px-4 lg:py-4 relative overflow-hidden rounded-3xl border-2 border-black shadow-xl">
              <p className="text-white bold-16">
                Engineering Plastic :
              </p>
              <p className="text-white regular-16">
                ABS , HIPS , Polycarbonate , PC-ABS , etc.
              </p>
            </div>
            <div className="flex flex-col w-full bg-red-500 p-4 lg:px-4 lg:py-4 relative overflow-hidden rounded-3xl border-2 border-black shadow-xl">
              <p className="text-white bold-16">
                Compounded Plastic :  
              </p>
              <p className="text-white regular-16">
                PPGF , PPTF , Nylon GF , PPU , PPE , etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials
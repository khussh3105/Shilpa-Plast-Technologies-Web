import Image from "next/image"
import Button from "./Button"
import Link from "next/link"

const Hero = () => {
  return (
    <section className= "max-container px-6 lg:px-20 3xl:px-0 flex flex-col gap-5 py-10 pb-16 xl:gap-6 lg:py-20 xl:flex-row lg:mb-8 2xl:mb-20">
      
      <div className="relative z-20 flex flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-64">Shilpa Plast Technologies</h1>
        <p className="regular-16 mt-6 text-gray-90 xl:max-w-[475px]">A Trustworthy and Renowned Plastic Recycling Unit Serving the Industry since the last <strong>Two Decades</strong> , Located in the heart of Pune's Industrial Township. Since Inception Customer Satisfaction has been out MOTO.</p>

        <div className=" my-5 flex flex-col w-full gap-3 sm:flex-row">
          <Link href='mailto:samirkothari@hotmail.com'>
           <Button 
              type="button"
              title="Know More"
              variant="btn_blue"
            />
          </Link>    
        </div>

      </div>

      <div className="relative w-full flex flex-1 items-start h-full">
        <Image 
          src="/industry.jpg" 
          alt="factory" 
          height={800} 
          width={800}
          className="rounded-[50px]"
        />
      </div>
    </section>
  )
}

export default Hero
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <section className="flexCenter flex-col lg:mb-6 ">
      <div className="px-6 lg:px-20 3xl:px-0 max-container w-full pb-12">
        <Image 
          src="/logo.jpg"
          alt="factory"
          width={35}
          height={35}
        />
        <p className="capitalize regular-12 -mt-1 mb-3 text-blue-950">
          house of plastic raw materials
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-32 lg:bold-40 lg:max-w-[350px]">
            Shilpa Plast Technologies
          </h2>
          <p className="regular-14 text-gray-600 xl:max-w-[600px]">
          <strong>Shilpa Plast Technologies</strong> and <strong>Shilpa Plastic (India)</strong> a joint venture driven by environmental responsibility, we're redefining the way plastic is managed, one granule at a time. Our mission is to transform waste plastic into a valuable resource. Through our meticulous manufacturing process, we convert plastic scrap into reusable plastic granules. 
          <br /><br />
          <strong>Machinery : </strong>
          <br />
          Plastic Recycling Extrusion Line - 2 Set
          <br />
          Plastic Grinder machines used in crushing plastic scrap.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-[1200px]">
        <Image
          src= "/about.jpg"
          alt="about"
          width={1200}
          height={400}
          className="w-full xl:rounded-[50px] object-cover object-center"
        />

        <div className="absolute flex left-5 top-5 bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <div className="flexBetween flex-col gap-5">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-12 text-gray-800">Established in:</p>
              </div>
              <p className="bold-16 mt-1">October 2005</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-12 text-gray-800">Location:</p>
              <Link href='https://maps.app.goo.gl/L7zginepTuz85tM29'> <p className="bold-16 mt-1 whitespace-nowrap">MIDC Bhosari</p> </Link>
            </div>
          </div>
          
        </div>  
      </div>
    </section>
  )
}

export default About
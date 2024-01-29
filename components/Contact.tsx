import Image from "next/image"
import Button from "./Button"
import Link from "next/link"

const Contact = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden mb-6">
      <div className="px-6 lg:px-20 3xl:px-0 max-container w-full pb-2">
        <Image 
          src="/logo.jpg"
          alt="factory"
          width={35}
          height={35}
        />
        <p className="capitalize regular-12 -mt-1 mb-3 text-blue-950">
          house of plastic raw materials
        </p>
        <h2 className="bold-32 lg:bold-40 lg:max-w-[350px]">
            Contact Us
          </h2>
      </div>
      <div className="max-container px-6 lg:px-20 3xl:px-0 relative flex-col w-full flex flexCenter">
        <div className="flex flex-1 lg:w-[50%] ">
          <form action="mailto:khusshkothari@gmail.com" className="py-4 mt-4 border-t flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="Name">Name : </label>
              <input type="text" id="name" placeholder="Enter Your Name" className="shadow-md px-6 py-2 border border-slate-300"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email : </label>
              <input type="text" id="email" placeholder="Enter Your Email" className="shadow-md px-6 py-2 border border-slate-300"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message : </label>
              <textarea id="message" placeholder="Type Your Message" className="h-32 shadow-md px-6 py-2 border border-slate-300"></textarea>
            </div>
            <Button 
              type="submit"
              title="Submit"
              variant="btn_blue"
            />
          </form>
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[50%]">
          <h2 className="bold-16 lg:bold-20 flexCenter mt-4">Quick Links</h2>
          <div className="flex mt-5 flex-row flexCenter gap-5">
            <Link href="/">
              <Image 
                src="/instagram.svg" 
                alt="logo" 
                width={25} 
                height={25}
              /> 
            </Link>
            <Link href="/">
              <Image 
                src= "/linkedin.svg"
                alt="linkedin"
                width={25}
                height={25}
              />
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=919890270985&text&type=phone_number&app_absent=0">
              <Image 
                src= "/whatsapp.svg"
                alt="whatsapp"
                width={25}
                height={25}
              />
            </Link>
            <Link href="mailto:samirkothari@hotmail.com">
              <Image 
                src= "/email.svg"
                alt="email"
                width={25}
                height={25}
              />
            </Link>
            <Link href="https://maps.app.goo.gl/L7zginepTuz85tM29">
              <Image 
                src= "/location2.svg"
                alt="location"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
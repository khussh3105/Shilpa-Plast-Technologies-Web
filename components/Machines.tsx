import { FEATURES } from "@/constants"
import Image from "next/image"

const Machines = () => {
  return(
    <section className="flex-col flexCenter overflow-hidden py-16">
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
        <h2 className="bold-32 lg:bold-40 lg:max-w-[350px]">
            Our Services
          </h2>
      </div>
      <div className="max-container px-6 lg:px-20 3xl:px-0 relative w-full flex flexCenter">
        <div className="z-20 flex w-full flex-col lg:w-[75%]">
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-10">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-2 lg:p-4 bg-blue-950">
        <Image src={icon} alt="map" width={20} height={20} />
      </div>
      <h2 className="bold-16 lg:bold-20 mt-2 capitalize">
        {title}
      </h2>
      <p className="regular-12 mt-2 text-black lg:mt-[15px]">
        {description}
      </p>
    </li>
  )
}

    
export default Machines
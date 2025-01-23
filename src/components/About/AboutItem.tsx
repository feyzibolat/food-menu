import Image from 'next/image';
import React from 'react'

export interface AboutItemProps {
    id: number;
    image: string;
    title: string;
    description: string;
    icon: string;
}

const AboutItem = ({ id, image, icon, title, description }: AboutItemProps) => {
    return (
        <div key={id} className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            {/* image  */}
            <div className="overflow-hidden rounded-2xl flex flex-grow">
                <Image className="transform transition duration-700 hover:scale-125" src={image} alt={title} width={1184} height={1182}/>
            </div>
            {/* other info  */}
            <div className="flex mt-6 space-x-3 ">
                {/* icon  */}
                <div>
                    <Image src={icon} alt={title} width={1184} height={1182} className="w-36"  />
                </div>
                {/* description  */}
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl text-gray-800 poppins">{title}</h1>
                    <p className="text-sm text-gray-500 poppins">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutItem

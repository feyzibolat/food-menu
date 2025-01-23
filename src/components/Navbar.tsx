"use client"
import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    const router = useRouter();

    const user = {
        photoURL: "https://avatars.githubusercontent.com/u/37486885?v=4",
        displayName: "fbolat"
    }
    const order = {
        length: 2,
    }

    const signOutUser = () => {
        console.log("signout")
    }

    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }


    useEffect(() => {
        if (typeof window !== "undefined") {
            // Client-side-only code
            //change header by scrolling
            window.addEventListener('scroll', onChangeHeader)
        }
    }, [])


    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-black bg-opacity-10 fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                {/* left  */}
                <div className="flex flex-grow">
                    <Image className="cursor-pointer w-20" src={"/assets/logo2.png"} width={400} height={400} alt="logo" onClick={() => router.push('/')} />
                </div>
                {/* right  */}
                {user.displayName ? (
                    <>
                        <div className="flex items-center justify-end space-x-4">
                            <Link href="/admin" className="text-gray-600">Admin</Link>
                            <div className="relative flex cursor-pointer" onClick={() => router.push('/orders')}>
                                <span className="bg-primary w-4 h-4 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2 text-xs">
                                    {order.length}
                                </span>
                                <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
                            </div>
                            <Image src={user.photoURL} alt={user.displayName} width={50} height={50} className="w-10 h-10 rounded-full" />
                            <p className="text-gray-700 poppins hidden md:block lg:block">{user.displayName}</p>
                            <FiLogOut className="cursor-pointer w-6 h-6 text-gray-700" onClick={signOutUser} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-end space-x-6">
                            <button className="poppins" onClick={() => router.push('/signin')}>Sign In</button>
                            <button className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                                onClick={() => router.push('/signup')}>Sign Up</button>
                        </div>
                    </>
                )}

            </nav>
        </header>
    )
}

export default Navbar

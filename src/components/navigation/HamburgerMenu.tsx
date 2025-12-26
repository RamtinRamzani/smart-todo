"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChartSvg } from "@/assets/icons"
import profilePic from "@/assets/Picture/DSC07502_733815.jpg"
import { MAIN_MENU } from "@/config/menu"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer h-10 w-10 flex flex-col items-center justify-center gap-1.5"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block h-0.5 w-6 bg-white rounded"
        />

        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-6 bg-white rounded"
        />

        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block h-0.5 w-6 bg-white rounded"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-2/3 bg-purple800 text-white z-50 rounded-tr-xl border-r border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-6 flex flex-col gap-4 px-10">
                {/* <h2 className="text-xl">TO-DO List</h2> */}
                <div className="relative w-16 h-16">
                  <Image
                    src={profilePic}
                    fill
                    className="object-cover rounded-full border-2 border-border"
                    alt="Your Profile Picture"
                    quality={30}
                  />
                </div>

                <h2 className="text-3xl font-bold w-2/3">Ramtin Ramezani</h2>
              </div>

              <nav className="flex flex-col gap-4 mt-6 px-8">
                {MAIN_MENU.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <button className="flex p-2 justify-center gap-4 items-center text-purple300 hover:text-purple100 transition-all duration-300 hover:bg-purple700 rounded-lg cursor-pointer">
                      <span>{item.icon}</span>
                      <p>{item.label}</p>
                    </button>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 pl-10">
                <ChartSvg />
              </div>

              <div className="flex flex-col gap-1 mt-4 px-10 text-purple300 text-xs">
                <span>Good</span>
                <span className="text-purple100">Consistancy</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default HamburgerMenu

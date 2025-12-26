"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

import { ChartSvg } from "@/assets/icons"
import profilePic from "@/assets/Picture/DSC07502_733815.jpg"
import MenuList from "../ui/MenuList"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const closeMenu = () => {
    setIsOpen(false)
    setOpenSubMenu(null)
  }

  const toggleSubMenu = (id: string) => {
    setOpenSubMenu((current) => (current === id ? null : id))
  }

  const closeAnySubMenu = () => {
    setOpenSubMenu(null)
  }

  const closeEverything = () => {
    setOpenSubMenu(null)
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
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
              onClick={closeMenu}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-2/3 bg-purple800 text-white z-50 rounded-tr-xl border-r border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="pt-6 flex flex-col gap-4 px-10">
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

              {/* Extracted Menu List */}
              <MenuList
                openSubMenu={openSubMenu}
                onToggleSubMenu={toggleSubMenu}
                onCloseAnySubMenu={closeAnySubMenu}
                onCloseEverything={closeEverything}
              />

              {/* Footer Content */}
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

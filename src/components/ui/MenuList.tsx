"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { MAIN_MENU } from "@/config/menu"
import type { MenuListProps } from "@/types/types"

export default function MenuList({
  openSubMenu,
  onToggleSubMenu,
  onCloseAnySubMenu,
  onCloseEverything,
}: MenuListProps) {
  return (
    <ul className="flex flex-col gap-4 mt-6 px-8">
      {MAIN_MENU.map((item) => {
        const hasSub = !!item.task?.length
        const isSubOpen = openSubMenu === item.id

        return (
          <li key={item.id} className="relative">
            {/* Main Item */}
            {hasSub ? (
              <button
                type="button"
                onClick={() => {
                  onToggleSubMenu(item.id)
                }}
                className="w-full flex items-center gap-4 p-2 rounded-lg text-purple300 hover:text-hover:bg-purple700 transition-colors duration-300 cursor-pointer"
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="text-lg font-medium">{item.label}</span>
              </button>
            ) : (
              <Link
                href={item.href}
                onClick={() => {
                  onCloseAnySubMenu() // Close any open submenu
                  onCloseEverything() // Close the whole menu
                }}
                className="flex items-center gap-4 p-2 rounded-lg text-purple300
                           hover:text-purple100 hover:bg-purple700
                           transition-colors duration-300"
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            )}

            {/* Submenu */}
            <AnimatePresence>
              {hasSub && isSubOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-24 top-full
                             bg-purple700 rounded-tr-4xl rounded-b-md shadow-lg
                             flex flex-col gap-2 p-3 z-50"
                >
                  {item.task?.map((task) => (
                    <li key={task}>
                      <Link
                        href={`${item.href}?type=${task}`}
                        onClick={onCloseEverything}
                        className="block text-sm text-purple200
                                   hover:text-white transition"
                      >
                        {task}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

"use client"

import { useEffect, useState } from "react"
import LoadingSpinner from "@/components/ui/LoadingSpinner"

interface LoadingData {
  message: string
}

const loading = () => {
  const [data, setData] = useState<LoadingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Data loaded successfully!" })
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="p-4">
      <h2 className="text-xl">{data?.message}</h2>
    </div>
  )
}

export default loading

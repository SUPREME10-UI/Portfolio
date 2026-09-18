"use client"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  className?: string
}

export default function ShaderBackground({ className = "" }: ShaderBackgroundProps) {
  return (
    <div
      className={`fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
        speed={0.3}
        // @ts-expect-error - compatibility with shader library
        backgroundColor="#000000"
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
        speed={0.2}
        // @ts-expect-error - compatibility with shader library
        wireframe="true"
        backgroundColor="transparent"
      />
    </div>
  )
}

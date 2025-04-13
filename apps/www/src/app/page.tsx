import NextLink from "next/link"
import { Button } from "@bun-ui/react"

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Bun-UI</h1>
          <p className="mt-4 text-lg">
            Build beautiful, accessible, and reusable components effortlessly.
          </p>
          <div className="mt-6">
            <Button asChild>
              <NextLink href="/docs">Get Started</NextLink>
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Why Choose Our Library?</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Feature
              title="Customizable"
              description="Easily adapt components to your design system."
            />
            <Feature
              title="Accessible"
              description="Built with accessibility in mind for all users."
            />
            <Feature
              title="Performant"
              description="Optimized for fast rendering and responsiveness."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="py-8 text-white">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">
            Ready to build amazing UIs? Start now!
          </p>
          <Button>
            <NextLink href="/docs">Explore Documentation</NextLink>
          </Button>
        </div>
      </footer>
    </div>
  )
}

const Feature = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className="rounded border p-4 shadow">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
)

export default LandingPage

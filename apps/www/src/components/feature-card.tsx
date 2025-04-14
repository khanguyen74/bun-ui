interface FeatureCardProps {
  title: string
  description: string
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="rounded border p-4 shadow">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
)

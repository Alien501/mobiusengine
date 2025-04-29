import { CheckIcon } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  isPopular?: boolean
  badge?: string
}

export default function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
  return (
    <div className="relative rounded-3xl border-2 border-blue-light p-8 flex flex-col h-full">
      {isPopular && (
        <div className="absolute top-8 right-8">
          <span className="inline-block py-1 px-4 rounded-full text-sm bg-blue-light/20 border border-blue-light bg-opacity-10 text-blue-light">
            Popular
          </span>
        </div>
      )}

      <h2 className="text-2xl font-medium text-blue-light mb-4">{title}</h2>

      <div className="mb-6">
        <span className="text-6xl font-semibold text-blue-light">${price}</span>
        <span className="text-xl text-blue-light">/week</span>
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <ul className="space-y-4 mb-8 flex-grow text-blue-light">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {index === 0 && !feature.startsWith("All") && !feature.startsWith("Everything") ? (
              <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            ) : index === 0 ? (
              <span className="w-5"></span>
            ) : (
              <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            )}
            <span className={`${index === 0 && feature.startsWith("All") || feature.startsWith("Everything")? 'font-medium': ''} text-sm`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="bg-blue-light hover:bg-blue-dark text-white font-medium py-3 px-6 w-max rounded-full mt-auto flex items-center justify-center">
        Get Started <span className="ml-1">→</span>
      </button>
    </div>
  )
}

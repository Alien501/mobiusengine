import { CheckIcon } from "lucide-react"

interface ResumeServiceCardProps {
  title: string
  subtitle: string
  price: string
  oneTime?: boolean
  features: string[]
}

export default function ResumeServiceCard({
  title,
  subtitle,
  price,
  oneTime = false,
  features,
}: ResumeServiceCardProps) {
  return (
    <div className="rounded-3xl w-[340px] border-2 border-blue-light p-8 flex flex-col h-full mx-auto">
      <h3 className="text-2xl font-medium text-blue-light mb-1">{title}</h3>
      <p className="text-xs text-blue-light font-medium mb-6">{subtitle}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold text-blue-light">${price}</span>
        {oneTime && <span className="text-2xl text-blue-light ml-2">one time</span>}
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="bg-blue-light hover:bg-blue-dark text-sm text-white font-normal py-3 px-6 rounded-full mt-auto flex items-center justify-center w-fit">
        Get Started <span className="ml-1">→</span>
      </button>
    </div>
  )
}

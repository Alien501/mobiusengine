import { CheckIcon } from "lucide-react"

export default function AdvanceTier() {
  return (
    <div className="rounded-3xl bg-blue-light p-8 text-white font-dmn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Advance</h2>
          <p className="text-sm mb-6 md:mb-0">Top-tier support for serious job hunters:</p>
        </div>
        <div className="mb-6 md:mb-0">
          <span className="text-6xl font-medium">$150</span>
          <span className="text-xl">/week</span>
        </div>
      </div>

      <div className="border-t border-blue-400 my-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-sm font-light">Everything in Plus</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-sm font-light">20 fully customized applications/week</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-sm font-light">Access to senior resume experts, Founder & Exec Coaches</span>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-sm font-light">Custom Resumes & Cover Letters</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-sm font-light">Help with complex job searches</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-end -mb-10">
        <button className="bg-white hover:text-white text-blue-light hover:bg-blue-light font-medium py-3 px-6 rounded-full flex items-center justify-center mb-10">
          Get Started <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  )
}
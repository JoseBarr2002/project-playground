interface BenefitsListProps {
    benefits: string[]
  }
  
  export function BenefitsList({ benefits }: BenefitsListProps) {
    return (
      <ul className="space-y-3 text-gray-600">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    )
  }
  
  
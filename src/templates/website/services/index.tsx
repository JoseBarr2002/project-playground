import { VideoPlayer } from "@templates/website/services/videoPlayer"
import { ContentCard } from "@templates/website/services/contentCard"
import { BenefitsList } from "@templates/website/services/benefitsList"
import { CTAButtons } from "@templates/website/services/ctaButtons"

export default function AdditionalServicesTemplate() {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-8">Additional Services</h1>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">SEO & Online Marketing Service</h2>

          <VideoPlayer title="SEO and Digital Marketing Overview" duration="03:45" progress={33} />

          <ContentCard title="What We Offer">
            <p className="text-gray-600 leading-relaxed">
              We provide a comprehensive{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Search Engine Optimization (SEO) and Online Marketing Service
              </a>{" "}
              tailored for self-storage businesses. Our goal is to boost your Google search rankings, increase website
              traffic, and ultimately, help you rent more units.
            </p>
          </ContentCard>

          <ContentCard title="Key Benefits">
            <BenefitsList
              benefits={[
                "Higher search engine rankings",
                "Increased website visitors",
                "More effective than traditional advertising",
                "Cost-effective marketing solution",
                "Detailed monthly performance reports",
                "Hands-off management of your online presence",
              ]}
            />
          </ContentCard>

          <ContentCard title="Get Started">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let us handle your online marketing efforts while you focus on your business. We'll provide detailed
              monthly reports to keep you informed of our progress and the return on your investment.
            </p>
            <CTAButtons />
          </ContentCard>
        </div>
      </div>
  )
}


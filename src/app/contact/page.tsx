import ContactForm from "@/components/contact/ContactForm"
import Hero from "@/components/contact/Hero"
import InvestmentMap from "@/components/contact/InvestmentMap"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
      <div className="mt-16 border-t border-gray-200 dark:border-gray-800">
        <InvestmentMap />
      </div>
    </main>
  )
}
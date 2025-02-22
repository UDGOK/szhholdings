import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SZH Holdings has been instrumental in our growth journey. Their strategic guidance and operational expertise helped us scale our technology platform and expand into new markets.",
      author: "Sarah Chen",
      role: "CEO, TechVision Solutions",
      image: "/images/testimonials/sarah-chen.jpg"
    },
    {
      quote: "The team's deep healthcare expertise and extensive network have been invaluable. They've helped us navigate complex regulatory environments and accelerate our product development.",
      author: "Dr. Michael Roberts",
      role: "Founder, MedCore Innovations",
      image: "/images/testimonials/michael-roberts.jpg"
    },
    {
      quote: "Beyond capital, SZH Holdings brought strategic insights and industry connections that were crucial for our expansion. They truly understand the infrastructure sector.",
      author: "James Wilson",
      role: "CEO, GreenEnergy Systems",
      image: "/images/testimonials/james-wilson.jpg"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Partner Testimonials
          </h2>
          <p className="mt-4 text-gray-400">
            Hear from the leaders of our portfolio companies about their experience working with SZH Holdings
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
              <div className="relative p-8 bg-gray-900 border border-white/10 rounded-lg">
                <div className="flex flex-col h-full">
                  <svg className="w-8 h-8 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="flex-1">
                    <p className="text-gray-400 italic mb-8">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
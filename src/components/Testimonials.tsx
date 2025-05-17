"use client";

import { Quote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "EaseCiti",
      content:
        "NSNR FUTUR transformed our digital presence. Their Facebook ad campaigns increased our leads by 300% in just three months!",
      avatar: "/avtar.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Networty",
      content:
        "The Google Ads strategy developed by NSNR FUTUR helped us dominate our niche. Our ROI has never been better.",
      avatar: "/avtar2.jpg",
    },
    {
      id: 3,
      name: "David Rodriguez",
      company: "Networty Ideas",
      content:
        "Working with NSNR FUTUR was a game-changer for our e-commerce store. Their conversion optimization techniques boosted our sales by 150%.",
      avatar: "/avtar3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#f0dcc0] via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Client Testimonials</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Hear what our clients say about our digital marketing services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg relative shadow-lg">
                  <div className="absolute top-6 left-6 text-black">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-lg text-black italic mb-6 pl-10">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="rounded-full"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-black">
                        {testimonial.name}
                      </h4>
                      <p className="text-black">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowLeft, ArrowRight, Heart, CheckCircle } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah M.",
      age: 32,
      service: "Individual Therapy",
      rating: 5,
      text: "Mind Haven completely transformed my life. After struggling with anxiety for years, the therapists here helped me develop coping strategies that actually work. I feel like myself again.",
      outcome: "Reduced anxiety by 80%",
      duration: "6 months of therapy"
    },
    {
      name: "David & Lisa K.",
      age: "28 & 30",
      service: "Couples Therapy", 
      rating: 5,
      text: "We were on the verge of divorce when we came to Mind Haven. The couples therapy sessions taught us how to communicate effectively. We're stronger than ever now.",
      outcome: "Saved our marriage",
      duration: "8 months of therapy"
    },
    {
      name: "Michael R.",
      age: 45,
      service: "Addiction Recovery",
      rating: 5,
      text: "The specialized addiction program at Mind Haven gave me the tools and support I needed to overcome my substance abuse. I've been sober for 2 years now.",
      outcome: "2 years sober",
      duration: "1 year intensive program"
    },
    {
      name: "Jennifer T.",
      age: 29,
      service: "Family Therapy",
      rating: 5,
      text: "Our family was falling apart. The therapists helped us rebuild trust and learn to support each other. My teenage daughter actually talks to me now!",
      outcome: "Improved family relationships",
      duration: "10 months of therapy"
    },
    {
      name: "Robert L.",
      age: 55,
      service: "Depression Treatment",
      rating: 5,
      text: "I had lost all hope when I started therapy here. The combination of individual sessions and group therapy helped me find purpose again. I'm grateful every day.",
      outcome: "Overcame severe depression",
      duration: "1 year of treatment"
    },
    {
      name: "Anna P.",
      age: 26,
      service: "Trauma Therapy",
      rating: 5,
      text: "After my accident, I couldn't function normally. The EMDR therapy at Mind Haven helped me process my trauma. I'm back to living my life fully.",
      outcome: "Processed traumatic memories",
      duration: "9 months of EMDR"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "500+", label: "Lives Transformed" },
    { number: "95%", label: "Treatment Success Rate" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const quickReviews = [
    {
      name: "Mark S.",
      text: "Professional, caring, and effective. Highly recommend!",
      service: "Group Therapy"
    },
    {
      name: "Emma W.",
      text: "The teletherapy option was perfect for my busy schedule.",
      service: "Individual Therapy"
    },
    {
      name: "Carlos M.",
      text: "Finally found therapists who understand my cultural background.",
      service: "Family Therapy"
    },
    {
      name: "Rebecca H.",
      text: "24/7 crisis support saved my life during my darkest moment.",
      service: "Crisis Intervention"
    },
    {
      name: "Thomas J.",
      text: "The workshops provided practical tools I use daily.",
      service: "Wellness Workshops"
    },
    {
      name: "Maria G.",
      text: "Affordable therapy that doesn't compromise on quality.",
      service: "Sliding Scale Program"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hero-green to-hero-green/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Stories</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Real stories from real people who found hope, healing, and transformation at Mind Haven.
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Over 500 Success Stories
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These detailed stories showcase the transformative power of mental health care.
            </p>
          </div>

          <div className="relative">
            <Card className="max-w-4xl mx-auto p-8 shadow-xl">
              <CardHeader className="text-center pb-6">
                <Quote className="w-12 h-12 text-hero-green mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-xl md:text-2xl text-muted-foreground mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="border-t pt-6">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-muted-foreground">Age {testimonials[currentTestimonial].age}</p>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className="mb-2">{testimonials[currentTestimonial].service}</Badge>
                      <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].duration}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-medium text-green-700">{testimonials[currentTestimonial].outcome}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prevTestimonial}
                className="border-hero-green text-hero-green hover:bg-hero-green hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Previous
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextTestimonial}
                className="border-hero-green text-hero-green hover:bg-hero-green hover:text-white"
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-hero-green" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-16 bg-hero-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              These statistics represent real lives changed and families healed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick thoughts from clients across all our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {renderStars(5)}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{review.text}"
                  </blockquote>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{review.name}</span>
                    <Badge variant="outline" className="text-xs">{review.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Clients Trust Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Heart className="w-12 h-12 text-hero-green mx-auto" />
              <h3 className="text-xl font-semibold">Compassionate Care</h3>
              <p className="text-muted-foreground">Every client receives personalized, empathetic treatment tailored to their unique needs.</p>
            </div>
            <div className="space-y-4">
              <CheckCircle className="w-12 h-12 text-hero-green mx-auto" />
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p className="text-muted-foreground">Our evidence-based approaches have helped hundreds of clients achieve lasting positive change.</p>
            </div>
            <div className="space-y-4">
              <Star className="w-12 h-12 text-hero-green mx-auto" />
              <h3 className="text-xl font-semibold">5-Star Experience</h3>
              <p className="text-muted-foreground">From your first contact to ongoing support, we're committed to excellence in every interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of clients who have transformed their lives with our compassionate, professional mental health care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-hero-green text-white px-8 py-3 text-lg hover:bg-hero-green/90">
              Start Your Journey Today
            </Button>
            <Button variant="outline" className="border-hero-green text-hero-green px-8 py-3 text-lg hover:bg-hero-green/10">
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import teamSupportImage from "@/assets/team-support.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Section */}
      <div className="w-full md:w-1/2 bg-primary text-text-light flex flex-col justify-center items-center p-8 md:p-12">
        <div className="max-w-md text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Butterfly/flower logo design */}
              <div className="w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-text-light">
                  <path
                    d="M30 20 Q15 10 10 25 Q15 40 30 30 Q35 35 40 45 Q45 50 50 50 Q55 50 60 45 Q65 35 70 30 Q85 40 90 25 Q85 10 70 20 Q65 25 60 35 Q55 30 50 25 Q45 30 40 35 Q35 25 30 20 Z"
                    fill="currentColor"
                  />
                  <circle cx="35" cy="35" r="3" fill="currentColor" />
                  <circle cx="65" cy="35" r="3" fill="currentColor" />
                  <path
                    d="M45 55 Q40 65 35 75 Q40 85 50 80 Q60 85 65 75 Q60 65 55 55 Q50 60 45 55 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mind Haven</h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Helping You Heal and Grow
          </p>

          {/* Business Card Section */}
          <div className="bg-hero-green p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-text-light rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-hero-green transform rotate-45 rounded-sm relative">
                  <div className="absolute inset-1 bg-text-light transform -rotate-45 rounded-sm"></div>
                </div>
              </div>
              <div className="text-text-light font-bold text-lg">Mind Haven</div>
            </div>
            <div className="bg-text-light p-4 rounded">
              <h3 className="font-bold text-text-dark text-lg mb-2">Matthew Wilson</h3>
              <p className="text-sm text-text-dark mb-2">012 345 6789</p>
              <p className="text-sm text-text-dark mb-1">youremail@mindhaven.com</p>
              <p className="text-sm text-text-dark">www.MindHaven.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content Section */}
      <div className="w-full md:w-1/2 bg-background flex flex-col justify-center p-8 md:p-12">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8">
            Welcome to Mind Haven Counseling Service
          </h2>
          
          <div className="space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              At Mind Haven, we offer a safe and supportive environment for individuals seeking 
              counseling services in Sydney. Our experienced therapists are here to help you navigate 
              through life's challenges.
            </p>
            
            <p>
              Whether you are struggling with anxiety, depression, relationship issues, or any other 
              mental health concerns, our team is dedicated to providing personalized therapy to meet 
              your unique needs.
            </p>
            
            <p>
              Take the first step towards a healthier mind and a happier life. Contact us today to schedule 
              a consultation and start your journey towards mental wellness.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-text-light px-8 py-3 rounded-full">
              Schedule a Consultation
            </Button>
            
            <div className="flex items-center space-x-2 text-text-dark">
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-lg">0123456789</span>
            </div>
          </div>

          {/* Support Image */}
          <div className="mt-12">
            <img 
              src={teamSupportImage} 
              alt="Group of people supporting each other"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
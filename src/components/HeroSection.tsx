import { Button } from "@/components/ui/button";
import { Phone, Calendar, Award, Heart, Shield, MapPin } from "lucide-react";
import teamSupportImage from "@/assets/team-support.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Section */}
      <div className="w-full md:w-1/2 bg-primary text-text-light flex flex-col justify-center items-center p-8 md:p-12">
        <div className="max-w-md text-center">
          {/* Professional Photo Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-hero-green rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                DR
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2">
                <Award className="w-6 h-6 text-hero-green" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Dr. Sarah Rodriguez
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Licensed Clinical Psychologist
          </p>
          <p className="text-lg mb-8 opacity-80">
            PhD in Clinical Psychology • 15+ Years Experience
          </p>

          {/* Credentials Card */}
          <div className="bg-hero-green p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-text-light rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-hero-green" />
              </div>
              <div className="text-text-light font-bold text-lg">
                Compassionate Care
              </div>
            </div>
            <div className="bg-text-light p-4 rounded">
              <h3 className="font-bold text-text-dark text-lg mb-2">
                Specializing In
              </h3>
              <div className="text-sm text-text-dark space-y-1">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-hero-green mr-2" />
                  <span>Anxiety & Depression</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-hero-green mr-2" />
                  <span>Trauma & PTSD</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-hero-green mr-2" />
                  <span>Women's Mental Health</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content Section */}
      <div className="w-full md:w-1/2 bg-background flex flex-col justify-center p-8 md:p-12">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8">
            Welcome to My Practice
          </h2>

          <div className="space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              <strong>Hello, I'm Dr. Sarah Rodriguez.</strong> I'm a licensed
              clinical psychologist with over 15 years of experience helping
              individuals navigate life's challenges and achieve lasting
              positive change.
            </p>

            <p>
              My approach combines evidence-based therapies with genuine
              compassion, creating a safe space where healing can begin. I
              specialize in treating anxiety, depression, trauma, and women's
              mental health issues.
            </p>

            <div className="bg-hero-green/10 p-4 rounded-lg">
              <p className="font-semibold text-hero-green mb-2">
                My Therapeutic Approach:
              </p>
              <ul className="space-y-1 text-sm">
                <li>✓ Cognitive Behavioral Therapy (CBT)</li>
                <li>✓ EMDR for Trauma Processing</li>
                <li>✓ Mindfulness-Based Interventions</li>
                <li>✓ Person-Centered Therapy</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-text-light px-8 py-3 rounded-full"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full"
              >
                Learn More About Me
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-text-dark">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Beverly Hills, CA</span>
              </div>
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

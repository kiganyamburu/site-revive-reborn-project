import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  MessageCircle,
  Family,
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Brain className="w-12 h-12 text-hero-green" />,
      title: "Individual Therapy",
      description: "One-on-one counseling sessions tailored to your unique needs and goals.",
      features: ["Anxiety & Depression Treatment", "Trauma & PTSD Therapy", "Stress Management", "Personal Growth"],
      duration: "50 minutes",
      pricing: "Starting at $120/session"
    },
    {
      icon: <Users className="w-12 h-12 text-hero-green" />,
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive group environment.",
      features: ["Support Groups", "Skills Building", "Peer Connection", "Shared Experiences"],
      duration: "90 minutes",
      pricing: "Starting at $60/session"
    },
    {
      icon: <Heart className="w-12 h-12 text-hero-green" />,
      title: "Couples Therapy",
      description: "Strengthen your relationship with evidence-based couples counseling.",
      features: ["Communication Skills", "Conflict Resolution", "Intimacy Building", "Trust Rebuilding"],
      duration: "75 minutes",
      pricing: "Starting at $150/session"
    },
    {
      icon: <Family className="w-12 h-12 text-hero-green" />,
      title: "Family Therapy",
      description: "Improve family dynamics and resolve conflicts with professional guidance.",
      features: ["Family Communication", "Behavioral Issues", "Parenting Support", "Sibling Conflicts"],
      duration: "60 minutes",
      pricing: "Starting at $140/session"
    },
    {
      icon: <Shield className="w-12 h-12 text-hero-green" />,
      title: "Crisis Intervention",
      description: "Immediate support and stabilization during mental health emergencies.",
      features: ["24/7 Crisis Line", "Emergency Sessions", "Safety Planning", "Rapid Response"],
      duration: "As needed",
      pricing: "Insurance covered"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-hero-green" />,
      title: "Specialized Programs",
      description: "Targeted treatment programs for specific mental health conditions.",
      features: ["Addiction Recovery", "Eating Disorders", "OCD Treatment", "Bipolar Support"],
      duration: "Varies",
      pricing: "Custom pricing"
    }
  ];

  const additionalServices = [
    {
      icon: <MessageCircle className="w-8 h-8 text-hero-green" />,
      title: "Teletherapy",
      description: "Convenient online therapy sessions from the comfort of your home."
    },
    {
      icon: <Clock className="w-8 h-8 text-hero-green" />,
      title: "24/7 Support",
      description: "Round-the-clock crisis support and emergency intervention services."
    },
    {
      icon: <Star className="w-8 h-8 text-hero-green" />,
      title: "Wellness Workshops",
      description: "Educational workshops on mental health topics and coping strategies."
    }
  ];

  const treatmentApproaches = [
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavior Therapy (DBT)",
    "Eye Movement Desensitization and Reprocessing (EMDR)",
    "Acceptance and Commitment Therapy (ACT)",
    "Mindfulness-Based Therapy",
    "Psychodynamic Therapy",
    "Solution-Focused Brief Therapy",
    "Trauma-Informed Care"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hero-green to-hero-green/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive mental health services designed to support your journey to wellness and personal growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Licensed Professionals
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Evidence-Based Treatment
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Insurance Accepted
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of mental health services to meet your unique needs and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-hero-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span><strong>Duration:</strong> {service.duration}</span>
                    </div>
                    <div className="text-sm mt-1">
                      <strong>Pricing:</strong> {service.pricing}
                    </div>
                  </div>
                  <Button className="w-full bg-hero-green hover:bg-hero-green/90">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond traditional therapy, we offer these specialized services to support your mental health journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Treatment Approaches</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our therapists are trained in various evidence-based therapeutic approaches to provide you with the most effective treatment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatmentApproaches.map((approach, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-hero-green/10 transition-colors">
                <span className="text-sm font-medium">{approach}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Pricing */}
      <section className="py-16 bg-hero-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Insurance & Pricing</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              We believe mental health care should be accessible to everyone. We work with most major insurance providers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Most Insurance</div>
              <div className="opacity-90">Plans Accepted</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Sliding Scale</div>
              <div className="opacity-90">Fees Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Free</div>
              <div className="opacity-90">Initial Consultation</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="mb-6 opacity-90">
              Contact us to verify your insurance coverage and discuss payment options.
            </p>
            <Button variant="secondary" className="bg-white text-hero-green hover:bg-white/90">
              Check Insurance Coverage
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards better mental health. Schedule your free consultation today and let us help you find the right treatment approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-hero-green text-white px-8 py-3 text-lg hover:bg-hero-green/90">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-hero-green text-hero-green px-8 py-3 text-lg hover:bg-hero-green/10">
              Call Us: 0123456789
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  Calendar,
  DollarSign,
  Shield,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Award,
  CheckCircle,
  TrendingUp,
  Heart,
} from "lucide-react";

const Therapists = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-hero-green" />,
      title: "Expand Your Client Base",
      description:
        "Connect with clients actively seeking your specific expertise and therapy approach.",
      detail: "Access a steady stream of pre-qualified leads",
    },
    {
      icon: <Calendar className="w-8 h-8 text-hero-green" />,
      title: "Flexible Scheduling",
      description:
        "Manage your availability and book appointments on your terms with our integrated calendar.",
      detail: "Set your own hours and availability",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-hero-green" />,
      title: "Competitive Earnings",
      description:
        "Set your own rates and keep 85% of your session fees. No hidden charges or surprise deductions.",
      detail: "Transparent pricing with low platform fees",
    },
    {
      icon: <Shield className="w-8 h-8 text-hero-green" />,
      title: "Secure Platform",
      description:
        "HIPAA-compliant platform with secure messaging, video calls, and payment processing.",
      detail: "Bank-level security for all transactions",
    },
    {
      icon: <Star className="w-8 h-8 text-hero-green" />,
      title: "Build Your Reputation",
      description:
        "Showcase your expertise through detailed profiles, client reviews, and success metrics.",
      detail: "Professional profile with verification badges",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-hero-green" />,
      title: "Practice Growth Tools",
      description:
        "Access analytics, marketing tools, and resources to grow your practice effectively.",
      detail: "Data-driven insights for practice optimization",
    },
  ];

  const features = [
    "Professional Profile Creation",
    "Verified Credentials Display",
    "Client Matching Algorithm",
    "Integrated Video Sessions",
    "Secure Messaging System",
    "Automated Scheduling",
    "Payment Processing",
    "Review & Rating System",
    "Practice Analytics",
    "Marketing Support",
    "24/7 Technical Support",
    "HIPAA Compliance",
  ];

  const requirements = [
    "Licensed Mental Health Professional",
    "Valid State License(s)",
    "Professional Liability Insurance",
    "Completed Clinical Training",
    "Background Check Clearance",
    "Continuing Education Credits",
  ];

  const steps = [
    {
      number: "1",
      title: "Apply & Verify",
      description:
        "Submit your application with credentials for our verification process.",
    },
    {
      number: "2",
      title: "Create Profile",
      description:
        "Build your professional profile showcasing your expertise and approach.",
    },
    {
      number: "3",
      title: "Start Connecting",
      description:
        "Begin receiving client matches and booking sessions immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hero-green to-hero-green/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join TherapyConnect
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Grow your practice by connecting with clients who need your
              expertise. Join 500+ verified mental health professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Verified Platform
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <DollarSign className="w-4 h-4 mr-2" />
                85% Commission
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Users className="w-4 h-4 mr-2" />
                Active Client Base
              </Badge>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-hero-green hover:bg-white/90 text-xl px-8 py-4"
            >
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Therapists Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a platform designed by mental health professionals, for
              mental health professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-muted-foreground">{benefit.description}</p>
                  <div className="bg-hero-green/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-hero-green">
                      {benefit.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps and begin connecting with
              clients today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hero-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Requirements
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-hero-green flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-hero-green/10 rounded-lg">
                <h3 className="font-semibold text-hero-green mb-3">
                  Professional Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our team helps with credential verification, profile
                  optimization, and ongoing support to ensure your success on
                  the platform.
                </p>
              </div>
            </div>

            {/* Platform Features */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Platform Features
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-hero-green flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-3">
                  Technology Integration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seamlessly integrate with your existing practice management
                  tools and EHR systems for a streamlined workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Start Your Application
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step to expand your practice. Complete this form to
              begin the verification process.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Professional Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@domain.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="license">License Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lcsw">
                        LCSW - Licensed Clinical Social Worker
                      </SelectItem>
                      <SelectItem value="lmft">
                        LMFT - Licensed Marriage & Family Therapist
                      </SelectItem>
                      <SelectItem value="lpcc">
                        LPCC - Licensed Professional Clinical Counselor
                      </SelectItem>
                      <SelectItem value="psychologist">
                        Licensed Psychologist
                      </SelectItem>
                      <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="state">Licensed State(s) *</Label>
                  <Input id="state" placeholder="e.g., CA, NY, TX" />
                </div>
              </div>

              <div>
                <Label htmlFor="specializations">Specializations *</Label>
                <Textarea
                  id="specializations"
                  placeholder="List your areas of expertise (e.g., Anxiety, Depression, Trauma, Couples Therapy...)"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="11-15">11-15 years</SelectItem>
                    <SelectItem value="16+">16+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell potential clients about your approach to therapy, background, and what makes you unique..."
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1" />
                <Label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the Terms of Service and Privacy Policy. I confirm
                  that all information provided is accurate and I have the
                  necessary licenses and credentials to practice mental health
                  services.
                </Label>
              </div>

              <Button className="w-full bg-hero-green hover:bg-hero-green/90 text-lg py-6">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-hero-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Therapist Success Stories
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              See how mental health professionals are growing their practices
              with TherapyConnect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">150%</div>
              <div className="opacity-90">
                Average client growth in first 6 months
              </div>
            </div>
            <div>
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">$85K</div>
              <div className="opacity-90">
                Average additional annual revenue
              </div>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">72 hrs</div>
              <div className="opacity-90">
                Average time to first client booking
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of mental health professionals who are building
            successful practices through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-hero-green text-white px-8 py-3 text-lg hover:bg-hero-green/90">
              Start Application Now
            </Button>
            <Button
              variant="outline"
              className="border-hero-green text-hero-green px-8 py-3 text-lg hover:bg-hero-green/10"
            >
              Schedule Information Call
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Questions? Contact our therapist success team at
            therapists@therapyconnect.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Therapists;

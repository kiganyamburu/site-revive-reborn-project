import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  FileText,
  Shield,
  Heart,
  Headphones,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "",
    serviceInterest: "",
    urgency: "",
    insurance: "",
    message: "",
    agreeToTerms: false,
    agreeToContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-hero-green" />,
      title: "Call Dr. Rodriguez",
      description: "Speak directly with Dr. Rodriguez or her assistant",
      contact: "(555) 123-4567",
      availability: "Monday - Friday, 8 AM - 6 PM",
      action: "Call Now",
    },
    {
      icon: <Mail className="w-8 h-8 text-hero-green" />,
      title: "Email Dr. Rodriguez",
      description: "Send your questions or schedule a consultation",
      contact: "drrodriguez@therapypractice.com",
      availability: "Response within 24 hours",
      action: "Send Email",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-hero-green" />,
      title: "Secure Messaging",
      description: "Send secure messages through patient portal",
      contact: "Available after consultation",
      availability: "Monday - Friday, 9 AM - 5 PM",
      action: "Learn More",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Crisis Support",
      description: "24/7 emergency mental health support",
      contact: "(555) 911-HELP",
      availability: "24/7 Emergency Line",
      action: "Call Emergency Line",
    },
  ];

  const officeHours = [
    {
      location: "Beverly Hills Office",
      hours: "Mon-Thu: 9 AM - 7 PM, Fri: 9 AM - 5 PM",
    },
    {
      location: "Santa Monica Office",
      hours: "Tue, Thu: 10 AM - 6 PM, Sat: 9 AM - 3 PM",
    },
    {
      location: "Telehealth Sessions",
      hours: "Mon-Fri: 8 AM - 8 PM, Sat: 9 AM - 4 PM",
    },
  ];

  const faqs = [
    {
      question: "How do I schedule my first appointment with Dr. Rodriguez?",
      answer:
        "You can schedule by calling my office, filling out the contact form below, or emailing me directly. I offer free 15-minute consultations to discuss your needs and determine if we're a good fit.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, I accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealth. I also offer sliding scale fees and payment plans for those with financial constraints.",
    },
    {
      question: "What should I expect during my first session?",
      answer:
        "Your first 90-minute session will focus on understanding your concerns, mental health history, and goals. We'll develop a personalized treatment plan together. Please arrive 15 minutes early for intake paperwork.",
    },
    {
      question: "Do you offer telehealth services?",
      answer:
        "Yes, I offer secure video therapy sessions that are just as effective as in-person meetings. My telehealth platform is HIPAA-compliant and accessible from any device with internet.",
    },
    {
      question: "What if I'm having a mental health crisis?",
      answer:
        "If you're experiencing a crisis, call our 24/7 crisis line at (555) 911-HELP. For life-threatening emergencies, please call 911 or go to your nearest emergency room. I also provide same-day crisis appointments when possible.",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-6">
          <Card className="max-w-2xl mx-auto text-center p-8">
            <CardContent>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your message has been received successfully. Dr. Rodriguez or
                her assistant will contact you within 24 hours to discuss your
                needs and schedule your consultation.
              </p>
              <div className="space-y-3 text-left bg-gray-50 p-4 rounded-lg mb-6">
                <p>
                  <strong>What happens next:</strong>
                </p>
                <p>• Dr. Rodriguez's office will call you within 24 hours</p>
                <p>• We'll discuss your needs and answer any questions</p>
                <p>• Schedule your initial consultation at your convenience</p>
                <p>• Receive intake paperwork via secure email if needed</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-hero-green hover:bg-hero-green/90"
                >
                  Submit Another Request
                </Button>
                <Button
                  variant="outline"
                  className="border-hero-green text-hero-green"
                >
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hero-green to-hero-green/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Dr. Rodriguez
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to begin your healing journey? I'm here to help you take the
              first step toward positive change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Phone className="w-4 h-4 mr-2" />
                24/7 Crisis Support
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Same-Day Appointments
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Free Consultations
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you. I'm committed
              to responding quickly and compassionately to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{method.icon}</div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                  <div className="font-semibold text-primary">
                    {method.contact}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {method.availability}
                  </div>
                  <Button
                    className={`w-full ${
                      method.title === "Crisis Support"
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-hero-green hover:bg-hero-green/90"
                    }`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Send Me a Message
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and I'll contact you within 24 hours to
              discuss your needs and schedule your consultation.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Preferences */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">
                      Preferred Contact Method
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("preferredContact", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="How would you like us to contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceInterest">Service Interest</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("serviceInterest", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="What service are you interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">
                          Individual Therapy
                        </SelectItem>
                        <SelectItem value="emdr">EMDR Therapy</SelectItem>
                        <SelectItem value="womens">
                          Women's Mental Health
                        </SelectItem>
                        <SelectItem value="telehealth">
                          Telehealth Sessions
                        </SelectItem>
                        <SelectItem value="anxiety">
                          Anxiety Treatment
                        </SelectItem>
                        <SelectItem value="depression">
                          Depression Treatment
                        </SelectItem>
                        <SelectItem value="trauma">Trauma & PTSD</SelectItem>
                        <SelectItem value="other">Other/Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="urgency">
                      How soon would you like to be seen?
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("urgency", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">
                          As soon as possible
                        </SelectItem>
                        <SelectItem value="week">Within a week</SelectItem>
                        <SelectItem value="month">Within a month</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insurance">Insurance Provider</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("insurance", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your insurance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bcbs">
                          Blue Cross Blue Shield
                        </SelectItem>
                        <SelectItem value="aetna">Aetna</SelectItem>
                        <SelectItem value="cigna">Cigna</SelectItem>
                        <SelectItem value="united">UnitedHealth</SelectItem>
                        <SelectItem value="medicare">Medicare</SelectItem>
                        <SelectItem value="medicaid">Medicaid</SelectItem>
                        <SelectItem value="none">No Insurance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us about your needs, concerns, or any questions you have..."
                    rows={6}
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToContact"
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToContact", checked)
                      }
                    />
                    <Label
                      htmlFor="agreeToContact"
                      className="text-sm leading-relaxed"
                    >
                      I consent to being contacted by Mind Haven via email,
                      phone, or text message to discuss my mental health care
                      needs.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToTerms", checked)
                      }
                      required
                    />
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-sm leading-relaxed"
                    >
                      I acknowledge that this form is not for emergencies. If
                      I'm experiencing a mental health crisis, I will call the
                      crisis line at (555) 911-HELP or 911. *
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-hero-green hover:bg-hero-green/90 text-lg py-6"
                    disabled={isSubmitting || !formData.agreeToTerms}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Office Hours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer extended hours and multiple locations for your
              convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {officeHours.map((office, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-hero-green" />
                    {office.location}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{office.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about my services and
              therapeutic process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
            Mental Health Emergency?
          </h2>
          <p className="text-lg text-red-600 mb-8">
            If you're experiencing thoughts of self-harm or suicide, please
            reach out for immediate help.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-lg py-6">
              Call Crisis Line: (555) 911-HELP
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-lg py-6">
              Call 911
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-lg py-6">
              Text HOME to 741741
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

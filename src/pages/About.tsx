import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Heart,
  Users,
  Calendar,
  MapPin,
  Star,
  GraduationCap,
  CheckCircle,
  Quote,
} from "lucide-react";

const About = () => {
  const credentials = [
    "PhD in Clinical Psychology, UCLA (2008)",
    "Licensed Clinical Psychologist - CA License #PSY12345",
    "Board Certified in Clinical Psychology",
    "EMDR Certified Therapist",
    "Cognitive Behavioral Therapy Specialist",
  ];

  const specializations = [
    {
      title: "Anxiety Disorders",
      description:
        "Generalized anxiety, panic disorder, social anxiety, and phobias",
      experience: "15+ years",
    },
    {
      title: "Depression & Mood Disorders",
      description:
        "Major depression, seasonal affective disorder, and bipolar support",
      experience: "15+ years",
    },
    {
      title: "Trauma & PTSD",
      description:
        "EMDR therapy, complex trauma, and post-traumatic stress recovery",
      experience: "12+ years",
    },
    {
      title: "Women's Mental Health",
      description:
        "Postpartum depression, reproductive mental health, life transitions",
      experience: "10+ years",
    },
  ];

  const education = [
    {
      degree: "PhD in Clinical Psychology",
      institution: "University of California, Los Angeles (UCLA)",
      year: "2008",
      details:
        "Dissertation: 'Cognitive-Behavioral Interventions for Anxiety in Women'",
    },
    {
      degree: "MA in Clinical Psychology",
      institution: "University of California, Los Angeles (UCLA)",
      year: "2005",
      details: "Concentration in Adult Psychopathology",
    },
    {
      degree: "BA in Psychology, Magna Cum Laude",
      institution: "Stanford University",
      year: "2003",
      details: "Phi Beta Kappa Honor Society",
    },
  ];

  const experience = [
    {
      position: "Clinical Director",
      organization: "Beverly Hills Psychology Group",
      years: "2015 - Present",
      description:
        "Lead a team of 8 psychologists providing comprehensive mental health services",
    },
    {
      position: "Senior Staff Psychologist",
      organization: "Cedars-Sinai Medical Center",
      years: "2010 - 2015",
      description:
        "Specialized in trauma treatment and emergency psychological services",
    },
    {
      position: "Psychology Fellow",
      organization: "UCLA Medical Center",
      years: "2008 - 2010",
      description: "Completed APA-accredited internship in clinical psychology",
    },
  ];

  const publications = [
    "Rodriguez, S. (2023). 'Modern Approaches to Anxiety Treatment.' Journal of Clinical Psychology, 45(3), 112-128.",
    "Rodriguez, S. & Johnson, M. (2022). 'EMDR Effectiveness in Complex Trauma Cases.' Trauma Psychology Review, 18(2), 89-103.",
    "Rodriguez, S. (2021). 'Women's Mental Health During Life Transitions.' Psychology Today, Featured Article.",
  ];

  const awards = [
    "Distinguished Psychologist Award - California Psychological Association (2022)",
    "Excellence in Clinical Practice - Beverly Hills Medical Community (2020)",
    "Outstanding Graduate Student Award - UCLA Psychology Department (2008)",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hero-green to-hero-green/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center">
              <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center text-white text-6xl font-bold mx-auto mb-6">
                DR
              </div>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  <Award className="w-4 h-4 mr-1" />
                  Board Certified
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  15+ Years
                </Badge>
              </div>
            </div>

            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Dr. Sarah Rodriguez
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                Licensed Clinical Psychologist, PhD
              </p>
              <p className="text-lg mb-8 opacity-80 max-w-2xl">
                Dedicated to helping individuals overcome life's challenges
                through compassionate, evidence-based psychological care.
                Specializing in anxiety, depression, trauma, and women's mental
                health.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-hero-green hover:bg-white/90"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              My Approach to Therapy
            </h2>
            <Quote className="w-12 h-12 text-hero-green mx-auto mb-6" />
          </div>

          <Card className="p-8 shadow-lg">
            <CardContent className="text-center">
              <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-8">
                "I believe that every person has the capacity for growth and
                healing. My role is to provide a safe, non-judgmental space
                where you can explore your thoughts and feelings, develop coping
                strategies, and work toward positive change."
              </blockquote>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Heart className="w-8 h-8 text-hero-green mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Compassionate</h3>
                  <p className="text-sm text-muted-foreground">
                    Providing empathetic, understanding care
                  </p>
                </div>
                <div>
                  <BookOpen className="w-8 h-8 text-hero-green mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Evidence-Based</h3>
                  <p className="text-sm text-muted-foreground">
                    Using proven therapeutic techniques
                  </p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-hero-green mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Collaborative</h3>
                  <p className="text-sm text-muted-foreground">
                    Working together toward your goals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Areas of Specialization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I have extensive experience treating a wide range of mental health
              conditions with specialized training and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{spec.title}</CardTitle>
                    <Badge variant="outline">{spec.experience}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-hero-green" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <Badge variant="outline">{edu.year}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
                <Award className="w-8 h-8 mr-3 text-hero-green" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">
                          {exp.position}
                        </h3>
                        <Badge variant="outline">{exp.years}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Credentials & Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional qualifications and ongoing commitment to excellence
              in mental health care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-hero-green mr-2" />
                  Licenses & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {credentials.map((cred, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-hero-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{cred}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-6 h-6 text-hero-green mr-2" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {awards.map((award, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-hero-green mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{award}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Publications
            </h2>
            <p className="text-lg text-muted-foreground">
              Contributing to the field through research and professional
              writing.
            </p>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-hero-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{pub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hero-green text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            I'm here to support you through whatever challenges you're facing.
            Let's work together toward positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-hero-green hover:bg-white/90 px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit My Office
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-6">
            Most insurance plans accepted • Telehealth appointments available
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

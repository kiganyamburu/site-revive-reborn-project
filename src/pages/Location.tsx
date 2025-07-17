import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Car,
  Bus,
  Train,
  Accessibility,
  Coffee,
  Wifi,
  ParkingCircle,
  Building,
  Navigation as NavigationIcon,
  Calendar,
} from "lucide-react";

const Location = () => {
  const locations = [
    {
      id: 1,
      name: "Mind Haven Main Campus",
      type: "Primary Location",
      address: "123 Wellness Boulevard, Suite 200",
      city: "Downtown Health District",
      state: "CA",
      zipCode: "90210",
      phone: "(555) 123-4567",
      email: "main@mindhaven.com",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      hours: {
        "Monday - Thursday": "8:00 AM - 8:00 PM",
        Friday: "8:00 AM - 6:00 PM",
        Saturday: "9:00 AM - 4:00 PM",
        Sunday: "Closed (Emergency services available)",
      },
      services: [
        "Individual Therapy",
        "Group Therapy",
        "Family Therapy",
        "Crisis Intervention",
        "Specialized Programs",
      ],
      amenities: [
        "Free Parking",
        "Wheelchair Accessible",
        "Free WiFi",
        "Comfort Areas",
        "Private Waiting Rooms",
        "Teletherapy Equipment",
      ],
      transportation: {
        parking: "Free parking garage with 50+ spaces",
        publicTransit: "Metro Blue Line - Health Center Station (2 blocks)",
        accessibility: "Full ADA compliance with elevator access",
      },
    },
    {
      id: 2,
      name: "Mind Haven Community Center",
      type: "Satellite Office",
      address: "456 Community Lane, Building C",
      city: "Riverside Commons",
      state: "CA",
      zipCode: "90211",
      phone: "(555) 123-4568",
      email: "community@mindhaven.com",
      coordinates: { lat: 34.0622, lng: -118.2537 },
      hours: {
        "Monday - Wednesday": "9:00 AM - 6:00 PM",
        "Thursday - Friday": "10:00 AM - 7:00 PM",
        Saturday: "9:00 AM - 2:00 PM",
        Sunday: "Closed",
      },
      services: [
        "Individual Therapy",
        "Group Therapy",
        "Wellness Workshops",
        "Support Groups",
      ],
      amenities: [
        "Street Parking",
        "Wheelchair Accessible",
        "Free WiFi",
        "Community Garden View",
        "Child-Friendly Waiting Area",
      ],
      transportation: {
        parking: "Street parking and nearby public lot",
        publicTransit: "Bus Routes 45, 67 - Community Stop",
        accessibility: "Ground floor access, ramp available",
      },
    },
    {
      id: 3,
      name: "Mind Haven Telehealth Hub",
      type: "Virtual Services",
      address: "Available Statewide",
      city: "California",
      state: "CA",
      zipCode: "All Areas",
      phone: "(555) 123-4569",
      email: "telehealth@mindhaven.com",
      coordinates: null,
      hours: {
        "Monday - Friday": "7:00 AM - 9:00 PM",
        "Saturday - Sunday": "9:00 AM - 6:00 PM",
        Emergency: "24/7 Crisis Line Available",
      },
      services: [
        "Individual Teletherapy",
        "Couples Teletherapy",
        "Group Video Sessions",
        "24/7 Crisis Support",
        "Online Workshops",
      ],
      amenities: [
        "Secure Video Platform",
        "Mobile App Access",
        "Flexible Scheduling",
        "Record Sessions (Optional)",
        "Digital Resources Library",
      ],
      transportation: {
        parking: "N/A - From your home",
        publicTransit: "N/A - Virtual access",
        accessibility: "Compatible with assistive technologies",
      },
    },
  ];

  const emergencyContacts = [
    {
      title: "24/7 Crisis Hotline",
      number: "(555) 911-HELP",
      description: "Immediate mental health emergency support",
    },
    {
      title: "After-Hours Support",
      number: "(555) 123-NIGHT",
      description: "Non-emergency support outside business hours",
    },
    {
      title: "Emergency Services",
      number: "911",
      description: "Life-threatening emergencies",
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
              Our Locations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find us at convenient locations across the community, or connect
              with us virtually from anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Multiple Locations
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Wifi className="w-4 h-4 mr-2" />
                Telehealth Available
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Accessibility className="w-4 h-4 mr-2" />
                Fully Accessible
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Find Your Nearest Location
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to making mental health care accessible with
              multiple convenient locations and virtual options.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card
                key={location.id}
                className="hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        location.type === "Primary Location"
                          ? "default"
                          : "outline"
                      }
                    >
                      {location.type}
                    </Badge>
                    {location.type !== "Virtual Services" && (
                      <Building className="w-6 h-6 text-hero-green" />
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {location.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Address */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-hero-green mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{location.address}</p>
                        <p className="text-muted-foreground">
                          {location.city}, {location.state} {location.zipCode}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-hero-green flex-shrink-0" />
                      <span className="font-medium">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-hero-green flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {location.email}
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-hero-green" />
                      <span className="font-medium">Hours of Operation</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      {Object.entries(location.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="font-medium">{day}:</span>
                          <span className="text-muted-foreground">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="font-medium mb-2">Available Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Transportation */}
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Getting Here</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Car className="w-4 h-4 text-hero-green mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {location.transportation.parking}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Bus className="w-4 h-4 text-hero-green mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {location.transportation.publicTransit}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Accessibility className="w-4 h-4 text-hero-green mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {location.transportation.accessibility}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-4">
                    <Button className="bg-hero-green hover:bg-hero-green/90">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Appointment
                    </Button>
                    {location.type !== "Virtual Services" && (
                      <Button
                        variant="outline"
                        className="border-hero-green text-hero-green hover:bg-hero-green/10"
                      >
                        <NavigationIcon className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Interactive Map
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our locations and find the most convenient route to our
              offices.
            </p>
          </div>

          {/* Placeholder for interactive map */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-hero-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're working on an interactive map to help you find the best
                  route to our locations.
                </p>
                <Button
                  variant="outline"
                  className="border-hero-green text-hero-green"
                >
                  View on Google Maps
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold mb-2">Main Campus</h4>
                <p className="text-sm text-muted-foreground">
                  Downtown Health District
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Center</h4>
                <p className="text-sm text-muted-foreground">
                  Riverside Commons
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Virtual Services</h4>
                <p className="text-sm text-muted-foreground">
                  Available Statewide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
              Emergency Support
            </h2>
            <p className="text-lg text-red-600 max-w-2xl mx-auto">
              If you're experiencing a mental health crisis, help is available
              24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card
                key={index}
                className="border-red-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-red-700 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">
                    {contact.number}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {contact.description}
                  </p>
                  <Button className="mt-4 bg-red-600 hover:bg-red-700">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Summary */}
      <section className="py-16 bg-hero-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Visit Us?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choose the location that works best for you, or start with a
              virtual consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">3 Locations</h3>
              <p className="opacity-90">
                Convenient access across the community
              </p>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Extended Hours</h3>
              <p className="opacity-90">Evening and weekend appointments</p>
            </div>
            <div>
              <Accessibility className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fully Accessible</h3>
              <p className="opacity-90">ADA compliant facilities</p>
            </div>
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="opacity-90">Crisis support always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Plan Your Visit
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to take the next step? Schedule an appointment at your
            preferred location or start with a virtual consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-hero-green text-white px-8 py-3 text-lg hover:bg-hero-green/90">
              Schedule In-Person Visit
            </Button>
            <Button
              variant="outline"
              className="border-hero-green text-hero-green px-8 py-3 text-lg hover:bg-hero-green/10"
            >
              Start Virtual Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;

import React from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="bg-orange-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CyberShield</h1>
          <p className="text-xl text-orange-200">Leading the future of cybersecurity with innovative solutions</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At CyberShield, we're committed to protecting organizations from evolving cyber threats through innovative security solutions and expert guidance. Our mission is to create a safer digital world for businesses and their customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                  <p className="text-gray-600">Providing cutting-edge security solutions</p>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                  <p className="text-gray-600">Building lasting client relationships</p>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                  <p className="text-gray-600">Maintaining the highest security standards</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                alt="Cybersecurity Operations Center"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ValueCard
              icon={<Shield className="w-12 h-12 text-orange-600" />}
              title="Integrity"
              description="We maintain the highest ethical standards in all our operations"
            />
            <ValueCard
              icon={<Target className="w-12 h-12 text-orange-600" />}
              title="Innovation"
              description="Constantly evolving to stay ahead of emerging threats"
            />
            <ValueCard
              icon={<Users className="w-12 h-12 text-orange-600" />}
              title="Collaboration"
              description="Working together to achieve exceptional results"
            />
            <ValueCard
              icon={<Award className="w-12 h-12 text-orange-600" />}
              title="Excellence"
              description="Delivering outstanding quality in everything we do"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default About;
import React from 'react';
import { Shield, Users, Box, ChevronRight, Lock, Shield as ShieldIcon, Server, Wifi } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-700 to-orange-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6">Secure Your Digital Future</h1>
              <p className="text-xl mb-8">Protect your business with enterprise-grade cybersecurity solutions that keep threats at bay.</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center">
                Get Started <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Shield className="w-64 h-64 text-orange-200 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Comprehensive Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Lock className="w-12 h-12 text-orange-600" />}
              title="Advanced Threat Protection"
              description="Real-time monitoring and AI-powered threat detection to keep your systems secure."
            />
            <FeatureCard
              icon={<Server className="w-12 h-12 text-orange-600" />}
              title="Cloud Security"
              description="Secure your cloud infrastructure with our enterprise-grade protection."
            />
            <FeatureCard
              icon={<Wifi className="w-12 h-12 text-orange-600" />}
              title="Network Security"
              description="Complete network protection with advanced firewall and intrusion detection."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-orange-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-orange-200">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-200">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-orange-200">Protected Companies</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
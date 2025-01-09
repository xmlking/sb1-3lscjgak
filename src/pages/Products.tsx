import React from 'react';
import { Shield, Server, Cloud, Wifi, Lock, AlertTriangle } from 'lucide-react';

function Products() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Security Solutions</h1>
          <p className="text-xl text-orange-200">Comprehensive cybersecurity products for modern enterprises</p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductCard
              icon={<Shield className="w-16 h-16 text-orange-600" />}
              title="Endpoint Protection"
              description="Advanced endpoint security with AI-powered threat detection and response"
              features={[
                "Real-time malware protection",
                "Behavioral analysis",
                "Device control",
                "Automated response"
              ]}
              price="$15"
            />
            
            <ProductCard
              icon={<Server className="w-16 h-16 text-orange-600" />}
              title="Network Security"
              description="Complete network protection with advanced firewall and intrusion detection"
              features={[
                "Next-gen firewall",
                "Intrusion prevention",
                "Traffic analysis",
                "VPN support"
              ]}
              price="$25"
            />
            
            <ProductCard
              icon={<Cloud className="w-16 h-16 text-orange-600" />}
              title="Cloud Security"
              description="Secure your cloud infrastructure with enterprise-grade protection"
              features={[
                "Cloud workload protection",
                "Container security",
                "Access management",
                "Compliance monitoring"
              ]}
              price="$30"
            />
            
            <ProductCard
              icon={<AlertTriangle className="w-16 h-16 text-orange-600" />}
              title="Threat Intelligence"
              description="Stay ahead of threats with real-time intelligence and analytics"
              features={[
                "Global threat monitoring",
                "Predictive analytics",
                "Incident response",
                "Threat hunting"
              ]}
              price="$20"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8">Contact our team for a personalized security assessment</p>
          <button className="bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-100">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ icon, title, description, features, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Lock className="w-5 h-5 text-orange-600 mr-3" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-2xl font-bold text-orange-600 mb-6">
        {price}<span className="text-gray-500 text-base">/user/month</span>
      </div>
      <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
        Learn More
      </button>
    </div>
  );
}

export default Products;
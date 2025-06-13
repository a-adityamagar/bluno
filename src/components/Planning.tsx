import React, { useState } from 'react';
import { Mail, Check, Clock, Palette } from 'lucide-react';

interface Feature {
  text: string;
  icon: React.ReactNode;
}

interface Button {
  text: string;
  icon: React.ReactNode;
  primary?: boolean;
  outlined?: boolean;
}

interface Plan {
  id: string;
  type: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  features: Feature[];
  buttons: Button[];
  highlighted?: boolean;
}

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');

  const plans: Plan[] = [
    {
      id: 'monthly',
      type: 'Monthly',
      badge: 'Full Time UI/UX Design',
      badgeColor: 'bg-white/10',
      description: 'Best for individuals needing ongoing UI/UX design support.',
      features: [
        { text: '20 hours weekly', icon: <Clock className="w-4 h-4 text-white" /> },
        { text: '5 design requests', icon: <Check className="w-4 h-4 text-white" /> },
        { text: '3 revisions', icon: <Check className="w-4 h-4 text-white" /> },
        { text: 'Basic design support', icon: <Palette className="w-4 h-4 text-white" /> }
      ],
      buttons: [
        { text: 'EMAIL ME', icon: <Mail className="w-4 h-4 text-white" />, primary: true },
      ],
      highlighted: true
    },
    {
      id: 'freelance',
      type: 'Freelance',
      description: 'Best for one-time UI/UX design projects or short-term contracts.',
      features: [
        { text: 'Custom pricing', icon: <Check className="w-4 h-4 text-white" /> },
        { text: '2 revisions', icon: <Check className="w-4 h-4 text-white" /> },
        { text: 'Design system setup', icon: <Palette className="w-4 h-4 text-white" /> },
        { text: 'Fast delivery', icon: <Clock className="w-4 h-4 text-white" /> }
      ],
      buttons: [
        { text: 'EMAIL ME', icon: <Mail className="w-4 h-4 text-white" />, primary: true }
      ]
    },
    {
      id: 'consultation',
      type: 'Consultation',
      description: 'Jump on a coffee call with me and get insights on your next steps.',
      features: [
        { text: 'One-time session', icon: <Clock className="w-4 h-4 text-white" /> },
        { text: 'Share your goal', icon: <Check className="w-4 h-4 text-white" /> },
        { text: 'Build rapport', icon: <Check className="w-4 h-4 text-white" /> },
        { text: 'Discuss next steps', icon: <Check className="w-4 h-4 text-white" /> }
      ],
      buttons: [
        { text: 'EMAIL ME', icon: <Mail className="w-4 h-4 text-white" />, primary: true }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
              PRICING PLANS
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Contact us for custom pricing tailored to your unique requirements. We offer flexible solutions for all your needs.
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="flex-shrink-0 lg:mt-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
              Get Custom Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Plans Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition hover:shadow-xl`}
            >
              {plan.badge && (
                <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${plan.badgeColor} text-white border border-white/20`}>
                  {plan.badge}
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-3">{plan.type}</h3>
              <p className="text-gray-300 mb-5">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span>{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 flex-wrap">
                {plan.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      btn.primary
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'border border-white hover:bg-white hover:text-black'
                    }`}
                  >
                    {btn.icon}
                    {btn.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

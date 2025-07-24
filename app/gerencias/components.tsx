import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <motion.div 
    className="border border-[#4A90E2]/20 rounded-lg overflow-hidden mb-4"
    initial={false}
  >
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 flex items-center justify-between text-left bg-[#1A1A2E]/50 hover:bg-[#1A1A2E]/70 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <FaQuestionCircle className="text-[#4A90E2]" />
        <span className="text-white font-medium">{question}</span>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-[#4A90E2]"
      >
        ▼
      </motion.div>
    </button>
    <motion.div
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="p-6 text-gray-300">
        {answer}
      </div>
    </motion.div>
  </motion.div>
);

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  index: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-[#1A1A2E]/50 p-6 rounded-xl border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 transition-all duration-300"
  >
    <h3 className="text-4xl font-bold text-[#4A90E2] mb-2">{value}</h3>
    <h4 className="text-white font-medium mb-2">{label}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

interface TimelineStepProps {
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
  index: number;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({ phase, duration, description, deliverables, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="relative pl-8 pb-8 border-l-2 border-[#4A90E2]/30 last:border-l-0"
  >
    <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A90E2]" />
    <div className="bg-[#1A1A2E]/50 p-6 rounded-xl border border-[#4A90E2]/20">
      <h3 className="text-xl font-bold text-white mb-2">{phase}</h3>
      <p className="text-[#4A90E2] text-sm mb-3">{duration}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="space-y-2">
        {deliverables.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

interface SuccessStoryProps {
  company: string;
  improvement: string;
  area: string;
  duration: string;
  testimonial: string;
  index: number;
}

export const SuccessStory: React.FC<SuccessStoryProps> = ({ company, improvement, area, duration, testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="bg-[#1A1A2E]/50 rounded-xl border border-[#4A90E2]/20 overflow-hidden"
  >
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{company}</h3>
        <span className="text-[#00F5D4] font-bold">+{improvement}</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <span>{area}</span>
        <span>•</span>
        <span>{duration}</span>
      </div>
      <p className="text-gray-300 italic">&quot;{testimonial}&quot;</p>
    </div>
  </motion.div>
);

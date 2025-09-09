"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  BookOpen,
  Video,
  FileText,
  Trophy,
  Users,
  Star,
  Play,
  ArrowRight,
  Menu,
  X,
  Feather,
  Scroll,
  Globe,
  Lotus,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null); 

  useEffect(() => {
    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Vast Literary Treasury",
      description:
        "10,000+ curated study materials across all subjects, inspired by India's rich literary heritage spanning from ancient epics to modern masterpieces",
      color: "from-amber-600 to-orange-700",
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Wisdom Through Vision",
      description:
        "HD video lectures from renowned educators following the ancient guru-shishya tradition of knowledge transmission",
      color: "from-emerald-600 to-teal-700",
    },
    {
      icon: <Scroll className="w-12 h-12" />,
      title: "Sacred Manuscripts Archive",
      description:
        "Complete collection of previous papers with detailed solutions, preserving knowledge like ancient palm leaf manuscripts",
      color: "from-rose-600 to-pink-700",
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Path to Excellence",
      description:
        "AI-powered progress tracking inspired by traditional Indian learning methodologies and philosophical approaches",
      color: "from-indigo-600 to-purple-700",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Literature Major",
      text: "PustakGhar transformed my understanding of literature. The interactive content and video lectures helped me score 95% in my finals while deepening my appreciation for Indian literary traditions.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Rahul Verma",
      course: "English Literature",
      text: "The best investment for my education - completely free with premium quality content that rivals expensive platforms. The literary approach to learning is revolutionary.",
      rating: 5,
      avatar: "RV",
    },
    {
      name: "Sneha Patel",
      course: "Comparative Literature",
      text: "Complex literary concepts became crystal clear with their video explanations. My grades improved dramatically and my love for literature grew exponentially.",
      rating: 5,
      avatar: "SP",
    },
  ];
  // 🔹 Local JSON data
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      username: "@alice",
      avatar:`https://avatar.iran.liara.run/public/boy?seed=1`,
      bio: "Frontend developer passionate about React & design systems.",
    },
    {
      id: 2,
      name: "Bob Williams",
      username: "@bob",
      avatar: `https://avatar.iran.liara.run/public/boy?seed=2`,
      bio: "Backend engineer who loves Node.js and scalable APIs.",
    },
    {
      id: 3,
      name: "Clara Davis",
      username: "@clara",
      avatar:`https://avatar.iran.liara.run/public/girl?seed=3`,
      bio: "UI/UX designer focused on creating beautiful user experiences.",
    },
    {
      id: 4,
      name: "David Smith",
      username: "@david",
      avatar: `https://avatar.iran.liara.run/public/boy?seed=4`,
      bio: "Full-stack dev who enjoys teaching coding to beginners.",
    },
  ]; 

  // profile hover card
  const [hoveredUser, setHoveredUser] = useState(null);
  function ProfileHoverCard({ user }) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 relative top-0.5 left-0.5">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full bg-amber-900 border"
          />
          <div>
            <h2 className="text-xl !text-amber-900 font-bold">{user.name}</h2>
            <p className="text-sm text-pink-800">{user.username}</p>
          </div>
        </div>
        <p className="mt-4 text-pink-600">{user.bio}</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 overflow-x-hidden"
      style={{ fontFamily: 'Crimson Text, Georgia, "Times New Roman", serif' }}
    >
      {/* Floating Elements with Indian literary motifs */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(180, 83, 9, 0.05) 0%, transparent 300px)`,
        }}
      />

      {/* Decorative Elements - Literary inspired */}
      <div className="fixed top-10 right-10 w-32 h-32 opacity-10 pointer-events-none">
        <div className="w-full h-full border-4 border-amber-700 rounded-full"></div>
        <div className="absolute top-4 left-4 w-24 h-24 border-4 border-rose-600 rounded-full"></div>
        <div className="absolute top-8 left-8 w-16 h-16 border-4 border-emerald-700 rounded-full"></div>
      </div>

      {/* Header */}

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Pattern inspired by Indian manuscripts */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full border-2 border-amber-400 shadow-sm">
                <span className="text-amber-900 font-bold text-sm">
                  🪔 India&apos;s #1 Literary Learning Platform
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                  <span className="text-amber-900 block">
                    Illuminate Your Mind
                  </span>
                  <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent block">
                    Through Literature
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-amber-800 font-medium italic">
                  &quot;Where Ancient Wisdom Meets Modern Learning&quot;
                </p>
              </div>

              <p className="text-lg text-amber-700 leading-relaxed max-w-lg">
                Join 50,000+ students who have transformed their academic
                journey with our comprehensive study resources, expert guidance,
                and time-tested wisdom inspired by India&apos;s greatest
                literary traditions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-rose-600 to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/search-book"
                  className="border-2 border-amber-700 text-amber-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-100 transition-colors"
                >
                  Explore Library
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4 relative">
                <div className="relative flex -space-x-2">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="relative"
                      onMouseEnter={() => setHoveredUser(user)}
                      onMouseLeave={() => setHoveredUser(null)}
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 border-2 border-white flex items-center justify-center text-sm font-bold shadow-md cursor-pointer transition-transform"
                      />
                      <div className="absolute inset-0 z-[9999] top-10 left-0.5">
                        {/* Centered Hover Card */}
                        {hoveredUser?.id === user.id && (
                          <ProfileHoverCard user={user} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-amber-700 font-medium">
                    50,000+ Happy Scholars
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Main Card with Literary manuscript design */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-amber-200 bg-gradient-to-br from-white to-amber-50">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-amber-900">
                        Today&apos;s Literary Journey
                      </h3>
                      <p className="text-sm text-amber-700 italic">
                        Curated Learning Path
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        subject: "Epic Literature",
                        detail: "Ramayana & Mahabharata",
                      },
                      {
                        subject: "Modern Poetry",
                        detail: "Tagore & Contemporary",
                      },
                      {
                        subject: "Literary Criticism",
                        detail: "Theory & Analysis",
                      },
                    ].map((subject, i) => (
                      <div
                        key={i}
                        className="flex items-center p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-300"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-rose-600 to-pink-700 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                          <span className="text-white text-sm font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <div>
                          <span className="text-amber-900 font-bold text-sm block">
                            {subject.subject}
                          </span>
                          <span className="text-amber-700 text-xs italic">
                            {subject.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-300">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-amber-700 font-medium">
                        Progress
                      </span>
                      <span className="text-rose-700 font-bold">75%</span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-rose-600 to-pink-700 h-2 rounded-full w-3/4 shadow-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements with Literary symbols */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl rotate-12 flex items-center justify-center shadow-lg animate-bounce">
                  <Trophy className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Star className="w-10 h-10 text-white fill-current" />
                </div>

                <div className="absolute top-1/2 -left-8 w-4 h-16 bg-gradient-to-b from-emerald-600 to-teal-700 rounded-full opacity-60"></div>
                <div className="absolute top-1/4 -right-6 w-4 h-12 bg-gradient-to-b from-rose-600 to-pink-700 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              <span className="text-amber-900 block">
                Everything You Need for
              </span>
              <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent">
                Literary Excellence
              </span>
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto font-medium italic">
              Our comprehensive platform merges cutting-edge technology with
              time-honored literary traditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="bg-white border-2 border-amber-300 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 hover:border-rose-400">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-amber-700 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-rose-700 font-semibold group-hover:text-pink-800 transition-colors">
                          Explore More{" "}
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-br from-amber-100 to-orange-100"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-amber-900 mb-4">
              Stories of Transformation
            </h2>
            <p className="text-lg text-rose-700 font-medium italic">
              Literary Journeys That Inspire
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-4 border-amber-300">
              <div className="flex items-center justify-center mb-8">
                <div className="flex text-yellow-600">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    )
                  )}
                </div>
              </div>

              <blockquote className="text-xl text-amber-900 text-center leading-relaxed mb-8 italic">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-600 to-pink-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <p className="text-xl font-bold text-amber-900">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-rose-700 font-semibold">
                    {testimonials[currentTestimonial].course}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-rose-600"
                      : "bg-amber-400"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Decorative pattern inspired by Indian art */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="block">Ready to Transform</span>
            <span className="block">Your Literary Journey?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto italic">
            Join thousands of successful students and begin your path to
            academic excellence through the wisdom of literature
          </p>
          <button className="bg-white text-rose-700 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-amber-50 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Start Your Journey - It&apos;s Free!
          </button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">✨ 100% Free</div>
              <p className="opacity-80">Always free, no hidden costs</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🚀 Instant Access</div>
              <p className="opacity-80">Start learning immediately</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📱 All Devices</div>
              <p className="opacity-80">Works on phone, tablet, laptop</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

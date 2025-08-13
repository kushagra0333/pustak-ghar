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
} from "lucide-react";

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  useEffect(() => {
    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Intersection observer for stats animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  // Animate stats when they come into view
  useEffect(() => {
    if (statsInView) {
      stats.forEach((stat, index) => {
        setTimeout(() => {
          setAnimatedStats((prev) => ({
            ...prev,
            [index]: true,
          }));
        }, index * 200);
      });
    }
  }, [statsInView]);

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Comprehensive Library",
      description: "Access 10,000+ curated study materials across all subjects",
      color: "from-orange-400 to-red-400",
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Premium Video Content",
      description: "HD video lectures from top educators and institutions",
      color: "from-blue-400 to-purple-400",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Exam Papers Archive",
      description: "Complete collection of previous papers with solutions",
      color: "from-green-400 to-teal-400",
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Success Tracking",
      description: "AI-powered progress tracking and performance analytics",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "B.Tech CSE",
      text: "Pustak Ghar revolutionized my study routine. The interactive materials and video lectures helped me achieve a 95% score in my finals!",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Rahul Verma",
      course: "MBA",
      text: "The best investment for my education - and it's completely free! The quality rivals premium paid platforms.",
      rating: 5,
      avatar: "RV",
    },
    {
      name: "Sneha Patel",
      course: "B.Com",
      text: "Complex concepts became crystal clear with their video explanations. My grades improved dramatically!",
      rating: 5,
      avatar: "SP",
    },
  ];

  const stats = [
    {
      number: 50000,
      suffix: "+",
      label: "Active Students",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: 2500,
      suffix: "+",
      label: "Study Resources",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      number: 200,
      suffix: "+",
      label: "Universities",
      icon: <Trophy className="w-8 h-8" />,
    },
    {
      number: 98,
      suffix: "%",
      label: "Success Rate",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  const AnimatedCounter = ({ end, suffix, duration = 2000, isActive }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isActive) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration, isActive]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Elements */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 152, 0, 0.03) 0%, transparent 300px)`,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-orange-100 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Pustak<span className="text-orange-500">Ghar</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </button>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="pt-20 px-6">
            <nav className="flex flex-col space-y-6">
              <a
                href="#features"
                className="text-xl text-gray-600 hover:text-orange-500"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-xl text-gray-600 hover:text-orange-500"
              >
                Reviews
              </a>
              <a
                href="#about"
                className="text-xl text-gray-600 hover:text-orange-500"
              >
                About
              </a>
              <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white py-3 rounded-full text-lg">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-red-100 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-100 rounded-full opacity-10 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-full border border-orange-200">
                <span className="text-orange-600 font-semibold text-sm">
                  🔥 India's #1 Free Study Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                Master Your
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Studies Today
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join over 50,000 students who transformed their academic journey
                with our comprehensive study resources, expert videos, and
                proven success system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors">
                  Explore Resources
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-400 border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    50,000+ happy students
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Today's Study Plan
                    </h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Mathematics - Calculus",
                      "Physics - Mechanics",
                      "Chemistry - Organic",
                    ].map((subject, i) => (
                      <div
                        key={i}
                        className="flex items-center p-3 bg-gray-50 rounded-xl"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium">
                          {subject}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-orange-600 font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl rotate-12 flex items-center justify-center shadow-lg animate-bounce">
                  <Trophy className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Star className="w-10 h-10 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    isActive={animatedStats[index]}
                  />
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Excel in Studies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with
              proven educational methods
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-orange-500 font-semibold group-hover:text-red-500 transition-colors">
                          Learn more{" "}
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
        className="py-24 bg-gradient-to-r from-gray-50 to-orange-50"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real students
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    )
                  )}
                </div>
              </div>

              <blockquote className="text-2xl text-gray-900 text-center leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-orange-500 font-semibold">
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
                      ? "bg-orange-400"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-400 to-red-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Ready to Transform
            <span className="block">Your Studies?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful students and start your journey to
            academic excellence today
          </p>
          <button className="bg-white text-orange-500 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Get Started Now - It's Free!
          </button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">✅ 100% Free</div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Pustak<span className="text-orange-400">Ghar</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering students across India with free, high-quality
                educational resources and proven study methods.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Study Materials
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Video Lectures
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Previous Papers
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">
                Subjects
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Engineering
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Medical
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Commerce
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Arts
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">
                Support
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 PustakGhar. Made with ❤️ for students across India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

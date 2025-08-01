"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Leaf, Handshake, Trophy, Shield, Truck, CheckCircle, Award } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSourcingOpen, setIsSourcingOpen] = useState(false);
  const [isQualityOpen, setIsQualityOpen] = useState(false);
  const [selectedWhyChoose, setSelectedWhyChoose] = useState(0);

  const images = [
    "/hisbiscusImg1.png",
    "/hisbiscusImg2.jpg", 
    "/hisbiscusImg3.webp"
  ];

  const whyChooseImages = [
    "/sustainableAgric.jpg",
    "/ruralempower.jpeg", 
    "/marketacess.jpg",
    "/risk.jpeg",
    "/fastdelivery.avif"
  ];

  const whyChooseItems = [
    {
      title: "Sustainable Agriculture",
      icon: Leaf,
      content: "We promote sustainable agriculture practices and ensure fair compensation for our partner farmers, creating long-term value for both producers and consumers."
    },
    {
      title: "Rural Empowerment", 
      icon: Handshake,
      content: "We engage in rural empowerment through hibiscus cooperatives, supporting local communities and creating economic opportunities in farming regions."
    },
    {
      title: "Premium Market Access",
      icon: Trophy, 
      content: "We target organic certification to access premium U.S. markets, ensuring our products meet the highest international standards for quality and safety."
    },
    {
      title: "Risk Management",
      icon: Shield,
      content: "We use dollar-based contracts and forward hedging to manage exchange rate fluctuations, leverage bonded terminals to avoid port congestion, and conduct pre-export testing with third-party inspection to prevent quality rejection."
    },
    {
      title: "Reliable Delivery",
      icon: Truck,
      content: "We ensure consistent 45-60 day delivery timeline from order to delivery, providing reliable and predictable shipping schedules for our customers."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">AjeAgro</h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#products" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#quality" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">Quality</a>
                <a href="#about" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-800 focus:outline-none focus:text-green-800"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a href="#products" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors">Products</a>
                <a href="#quality" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors">Quality</a>
                <a href="#about" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Premium
                  <span className="text-green-800 block">Hibiscus Flowers</span>
                  from Nigeria
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Leading supplier of high-quality dried hibiscus flowers to the US market. 
                </p>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600 font-bold ">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-800" />
                  <span>FDA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-green-800" />
                  <span>Organic Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-800" />
                  <span>Phytosanitary</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Request Quote
                </button>
                <button className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  View Certifications
                </button>
              </div>
              
            </div>
            
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Hibiscus flower ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <span >Marketing Hibiscus</span> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$1M+</div>
              <div>Annual Revenue Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold  mb-2">10-12</div>
              <div>Containers Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold  mb-2">25kg</div>
              <div>PP Woven Bags or As Required</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold  mb-2">≤12%</div>
              <div>Moisture Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We supply premium agricultural products to the global market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Hibiscus */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-full h-40 relative">
                <Image src="/hisbiscusImg1.png" alt="Hibiscus" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Hibiscus</h3>
                <p className="text-xs text-gray-500">Dried petals, deep red color</p>
              </div>
            </div>
            {/* Sesame */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-full h-40 relative">
                <Image src="/sesameImg.webp" alt="Sesame" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Sesame</h3>
                <p className="text-xs text-gray-500">High oil content, export quality</p>
              </div>
            </div>
            {/* Soya Beans */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-full h-40 relative">
                <Image src="/soyabeansImg.jpg" alt="Soya Beans" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Soya Beans</h3>
                <p className="text-xs text-gray-500">Non-GMO, protein-rich</p>
              </div>
            </div>
            {/* Cashew Nuts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-full h-40 relative">
                <Image src="/hisbiscusImg1.png" alt="Cashew Nuts" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Cashew Nuts</h3>
                <p className="text-xs text-gray-500">Whole & broken, export grade</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Process & Quality Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Process & Quality</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  We partner with local farmers in Kano, Jigawa, and Katsina, providing training and support through contract farming to ensure the highest quality.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our dedicated processing hub handles sorting, grading, debris removal, and meticulous drying using solar and industrial hybrid dryers. Our products are then packaged with advanced moisture control to maintain peak freshness.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our commitment to quality is backed by rigorous standards, including a Phytosanitary Certificate (NAQS) and compliance with U.S. FDA Prior Notice requirements. To ensure product safety, we conduct independent lab testing through SGS/Intertek. We also offer products with optional certifications such as NOP/USDA Organic and ISO 22000 Food Safety standards.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center border border-gray-200 overflow-hidden">
                  <Image 
                    src="/operational.png" 
                    alt="Operational Processing Hub" 
                    fill 
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to sustainable practices and community development while delivering premium quality products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Changing Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center border border-gray-200 overflow-hidden">
                  <Image 
                    src={whyChooseImages[selectedWhyChoose]} 
                    alt={`Why Choose Us - ${whyChooseItems[selectedWhyChoose].title}`}
                    fill 
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setSelectedWhyChoose(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${selectedWhyChoose === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`px-6 py-4 bg-gray-50 ${selectedWhyChoose === index ? 'block' : 'hidden'}`}>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join leading US buyers like Traditional Medicinals, Celestial Seasonings, and Whole Foods suppliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-800 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Request Sample
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AjeAgro General Merchandise</h3>
              <p className="text-gray-300">
                Leading Nigerian agro-export company specializing in premium hibiscus flowers for the US market.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Conventional Hibiscus</li>
                <li>Organic Hibiscus</li>
                <li>Bulk Packaging</li>
                <li>Custom Specifications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <ul className="space-y-2 text-gray-300">
                <li>FDA Compliant</li>
                <li>Phytosanitary Certificate</li>
                <li>NOP Organic</li>
                <li>USDA Organic</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Nigeria Office: 20, NNPC Road, Dawanau Market, Kano State, Nigeria.</li>
                <li>US Office: 291 Shiloh Crossing Drive , Avon, Indiana. 46123</li>
                {/* <li>Avon, Indiana 46123</li> */}
                <li>info@hibiscusharvest.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 AjeAgro Import And Export Nigeria Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

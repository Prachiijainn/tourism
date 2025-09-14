import Link from "next/link"
import { Mountain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react"

const footerLinks = {
  support: [
    { label: "Help Center", href: "/help" },
    { label: "FAQ", href: "/faq" },
    { label: "Booking Support", href: "/booking-support" },
    { label: "Travel Tips", href: "/travel-tips" },
    { label: "Emergency Contacts", href: "/emergency" }
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Customer Service", href: "/customer-service" },
    { label: "Feedback", href: "/feedback" },
    { label: "Partnership", href: "/partnership" },
    { label: "Media Inquiries", href: "/media" }
  ],
  about: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" },
    { label: "Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Press Kit", href: "/press" }
  ],
  culture: [
    { label: "Arts & Culture", href: "/arts-culture" },
    { label: "Tribal Heritage", href: "/tribal-heritage" },
    { label: "Festivals", href: "/festivals" },
    { label: "Local Crafts", href: "/crafts" },
    { label: "Cultural Tours", href: "/cultural-tours" }
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Mountain className="h-8 w-8 text-emerald-400" />
              <span className="font-bold text-xl">Jharkhand Explorer</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the heart of Jharkhand through our curated travel experiences, 
              showcasing the state's natural beauty, rich culture, and heritage.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">info@jharkhandexplorer.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">Ranchi, Jharkhand, India</span>
              </div>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-emerald-400">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-emerald-400">Contact Us</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-emerald-400">About Us</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Arts & Culture Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-emerald-400">Arts & Culture</h3>
            <ul className="space-y-3">
              {footerLinks.culture.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4 text-emerald-400">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest travel tips, destination updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex gap-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2025 Jharkhand Explorer. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by NadeX Official.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

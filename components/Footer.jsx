import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">
              A <span className="text-primary">Docurinha</span>
            </h3>
            <p className="text-muted-foreground">
              Handmade Brazilian sweets crafted with love in Windermere, FL
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/brigadeiros" className="text-muted-foreground hover:text-primary transition-colors">
                Brigadeiros
              </Link>
              <Link href="/naked-cakes" className="text-muted-foreground hover:text-primary transition-colors">
                Naked Cakes
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Windermere, FL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+14076164661" className="hover:text-primary transition-colors">
                  (407) 616-4661
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@adocurinha.com" className="hover:text-primary transition-colors">
                  contact@adocurinha.com
                </a>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <Link
              href="https://www.instagram.com/aadocurinha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <Instagram className="h-5 w-5" />
              <span>@aadocurinha</span>
            </Link>
            <h4 className="font-semibold mb-2 mt-4">Hours</h4>
            <p className="text-sm text-muted-foreground">
              Mon - Fri: 9AM - 6PM<br />
              Sat: 10AM - 4PM<br />
              Sun: By appointment
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} A Docurinha. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
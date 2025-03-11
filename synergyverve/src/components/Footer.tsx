import React from 'react';

const Footer = () => {
  const categories = [
    {
      title: "Products",
      links: [
        "Design", "Prototyping", "Dev Mode", "Collaboration", "Enterprise", "Pricing"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog", "Support", "Education", "Community", "Design Systems", "Downloads"
      ]
    },
    {
      title: "Services",
      links: [
        // First column of services
        "Web Design", "Mobile App Design", "UI/UX Design", "Branding", "Logo Design", "Illustration",
        "Icon Design", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"
      ]
    },
    {
      title: "Solutions",
      links: [
        // Second column of services
        "E-commerce", "Healthcare", "Education", "Finance", "Real Estate", "Travel",
        "Food & Beverage", "Technology", "Entertainment", "Sports", "Automotive"
      ]
    },
    {
      title: "Industries",
      links: [
        // Third column of services
        "Startups", "Small Business", "Enterprise", "Non-profit", "Government", "Retail",
        "Manufacturing", "Telecommunications", "Media", "Hospitality", "Construction"
      ]
    },
    {
      title: "Technologies",
      links: [
        // Fourth column of services
        "React", "Angular", "Vue", "Next.js", "Svelte", "Node.js",
        "Python", "Ruby", "PHP", "Java", "Swift", "Kotlin"
      ]
    },
    {
      title: "Specialties",
      links: [
        // Fifth column of services
        "Accessibility", "Animation", "AR/VR", "Color Theory", "Data Visualization", "Interaction Design",
        "Motion Design", "Print Design", "Product Design", "Typography", "Voice UI"
      ]
    },
    {
      title: "Company",
      links: [
        "About", "Careers", "Press", "Contact", "Terms", "Privacy"
      ]
    }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top section with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <svg className="h-8 w-auto" viewBox="0 0 38 57" fill="white">
              <path d="M19 28.5c5.247 0 9.5-4.253 9.5-9.5S24.247 9.5 19 9.5 9.5 13.753 9.5 19s4.253 9.5 9.5 9.5z" />
              <path d="M19 0C8.507 0 0 8.507 0 19c0 5.386 2.253 10.24 5.87 13.662v15.082C5.87 53.388 10.29 57 15.87 57h6.26c5.58 0 10-3.612 10-9.256V32.662C35.747 29.24 38 24.386 38 19 38 8.507 29.493 0 19 0zm9.5 19c0 5.247-4.253 9.5-9.5 9.5S9.5 24.247 9.5 19 13.753 9.5 19 9.5s9.5 4.253 9.5 9.5z" />
            </svg>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main footer content with grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
          {categories.map((category, i) => (
            <div key={i} className="col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} YourCompany, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Cookies
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
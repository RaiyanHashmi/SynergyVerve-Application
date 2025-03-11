
import Image from 'next/image';

import MantineLogo from '../../assets/img/white-synergy3.png';

export default function Footer() {
  const footerLinks = [
    {
      title: "Popular searches",
      links: ["Resume templates", "Mobile apps", "Presentation templates", "UI kits", "Calendar templates"],
    },
    {
      title: "Most used",
      links: ["Material 3 Design Kit", "iOS 18 and iPadOS 18", "Figma auto layout playground", "Anima - Figma to React, HTML", "Ant Design Open Source"],
    },
    {
      title: "Recommended categories",
      links: ["Instagram templates", "Workshop templates", "Data templates", "Device mockups", "Design inspirations"],
    },
    {
      title: "Top categories",
      links: ["Design templates", "Libraries", "Icons", "Development", "Brainstorming"],
    },
  ];

  return (
    <footer className="bg-secondary text-text text-xl py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-accent font-bold mb-3">{section.title}</h4>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-primary transition duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
                    <Image src={MantineLogo} alt="Logo" width={250} height={150} />
          

          <p className="mt-2 text-gray-500">
            © {new Date().getFullYear()} Figma, Inc. • 
            <a href="#" className="hover:text-white mx-2">Site map</a> • 
            <a href="#" className="hover:text-white mx-2">Community guidelines</a> • 
            <a href="#" className="hover:text-white mx-2">Terms of service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

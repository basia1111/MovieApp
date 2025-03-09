import React from "react";
import { Github, Globe } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full bg-bg-secondary border-t border-border py-8 md:px-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <span className="text-brand-primary font-bold text-xl mb-4">Movie App</span>
          <div className="flex space-x-4">
            <a
              href="https://github.com/basia1111/movie-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-brand-primary transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.basiacodes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-brand-primary transition-colors"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
        <div className="text-text-secondary text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Movie App. All rights reserved.</div>
        <div className="text-text-secondary text-sm">
          Built by <span className="text-brand-primary">Basia</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

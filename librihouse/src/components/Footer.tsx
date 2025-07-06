// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 shadow-inner">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Minimal Library Management. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

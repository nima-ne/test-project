

export default function Footer() {
  return (
    <footer className="w-[100%] bg-[#2b2b2b]">
      <div className="w-[100%] text-center p-[20px] box-border">
        <h1 className="text-5xl bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-500 text-transparent bg-clip-text font-extrabold "
        >
          Test Project
        </h1>
      </div>
      <div className="p-[20px] box-border">
        <p className="text-center text-gray-500 text-sm mt-4">
          &copy; 2025 Your Company Name. All rights reserved. This website and
          its content are the intellectual property of Your Company.
          Unauthorized use, reproduction, or distribution of any materials
          contained herein is strictly prohibited and may violate intellectual
          property laws. We reserve the right to make changes to our policies,
          content, and design at any time without prior notice. Thank you for
          visiting our website.
        </p>
      </div>
    </footer>
  );
}

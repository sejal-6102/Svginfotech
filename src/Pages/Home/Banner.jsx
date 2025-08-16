import React from "react";


export default function Banner() {
  return (
    <div className="bg-lime-300 py-3 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        {/* First loop */}
        <div className="animate-marquee flex md:text-2xl font-bold font">
          <span className="mx-6">✶ Reporting</span>
          <span className="mx-6">✶ Custom Branding</span>
          <span className="mx-6">✶ Website Design</span>
          <span className="mx-6">✶ Digital Marketing</span>
          <span className="mx-6">✶ Reporting</span>
          <span className="mx-6">✶ Custom Branding</span>
          <span className="mx-6">✶ Website Design</span>
          <span className="mx-6">✶ Digital Marketing</span>
        </div>

        {/* Duplicate loop for smooth infinite scroll */}
        <div className="animate-marquee flex" aria-hidden="true">
          <span className="mx-6">✶ Reporting</span>
          <span className="mx-6">✶ Custom Branding</span>
          <span className="mx-6">✶ Website Design</span>
          <span className="mx-6">✶ Digital Marketing</span>
          <span className="mx-6">✶ Reporting</span>
          <span className="mx-6">✶ Custom Branding</span>
          <span className="mx-6">✶ Website Design</span>
          <span className="mx-6">✶ Digital Marketing</span>
        </div>
      </div>
    </div>
  );
}

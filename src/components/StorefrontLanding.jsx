import ResponsiveHero from "./ResponsiveHero";
import laptop from "../assets/laptop-resolution.webp";
import phone from "../assets/phone-resolution.webp";
import tablet from "../assets/tablet-resolution.webp";

export default function StorefrontLanding() {
  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* We pass the API URLs directly into the props */}
        <ResponsiveHero
          altText="Elite Tech Conference 2026"
          mobileImg={phone}
          tabletImg={tablet}
          desktopImg={laptop}
        />
      </div>
    </main>
  );
}

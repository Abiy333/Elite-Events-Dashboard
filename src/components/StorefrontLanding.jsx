import ResponsiveHero from "./ResponsiveHero";

export default function StorefrontLanding() {
  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* We pass the API URLs directly into the props */}
        <ResponsiveHero
          altText="Elite Tech Conference 2026"
          mobileImg="https://placehold.co/600x600/1f2937/ffffff?text=Mobile+Hero"
          tabletImg="https://placehold.co/1200x500/374151/ffffff?text=Tablet+Hero"
          desktopImg="https://placehold.co/2400x600/111827/ffffff?text=4K+Desktop+Hero"
        />
      </div>
    </main>
  );
}

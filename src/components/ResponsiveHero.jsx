import React from "react";

export default function ResponsiveHero({
  altText,
  mobileImg,
  tabletImg,
  desktopImg,
}) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopImg} />

      <source media="(min-width: 768px)" srcSet={tabletImg} />
      <img
        src={mobileImg}
        alt={altText}
        loading="lazy"
        className="w-full h-auto max-h-[600px] object-cover shadow-sm rounded-xl"
      />
    </picture>
  );
}

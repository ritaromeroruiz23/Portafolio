/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary-fixed-dim": "#ffb4a7",
        "on-secondary": "#253144",
        "outline-variant": "#59413d",
        "tertiary-fixed": "#d2e4fd",
        "on-secondary-fixed-variant": "#3c475b",
        "background": "#051424",
        "surface-bright": "#2c3a4c",
        "on-tertiary": "#213245",
        "error-container": "#93000a",
        "secondary-fixed-dim": "#bbc7df",
        "surface-variant": "#273647",
        "surface": "#051424",
        "on-tertiary-fixed-variant": "#37485c",
        "tertiary-fixed-dim": "#b7c8e1",
        "on-primary-fixed-variant": "#8c1809",
        "primary-fixed": "#ffdad4",
        "surface-dim": "#051424",
        "outline": "#a88a84",
        "secondary-container": "#3e495e",
        "on-primary-container": "#6a0600",
        "tertiary": "#b7c8e1",
        "surface-container-low": "#0d1c2d",
        "on-error-container": "#ffdad6",
        "on-surface": "#d4e4fa",
        "on-primary-fixed": "#400200",
        "secondary-fixed": "#d7e3fc",
        "surface-tint": "#ffb4a7",
        "surface-container-high": "#1c2b3c",
        "inverse-primary": "#ae311f",
        "surface-container-lowest": "#010f1f",
        "inverse-surface": "#d4e4fa",
        "on-background": "#d4e4fa",
        "on-surface-variant": "#e1bfb9",
        "on-secondary-container": "#adb9d1",
        "on-error": "#690005",
        "on-tertiary-fixed": "#0a1d2f",
        "secondary": "#bbc7df",
        "surface-container-highest": "#273647",
        "primary": "#ffb4a7",
        "error": "#ffb4ab",
        "inverse-on-surface": "#233143",
        "on-tertiary-container": "#233447",
        "on-secondary-fixed": "#101c2e",
        "on-primary": "#670500",
        "primary-container": "#ff6b53",
        "tertiary-container": "#8b9cb3",
        "surface-container": "#122131"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "spacing": {
        "element-gap": "24px",
        "gutter": "32px",
        "section-gap": "120px",
        "margin-mobile": "24px",
        "container-max": "1200px"
      },
      "fontFamily": {
        "headline-xl": ["Hanken Grotesk"],
        "display-lg-mobile": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "label-sm": ["JetBrains Mono"],
        "headline-md": ["Hanken Grotesk"],
        "body-lg": ["Hanken Grotesk"]
      },
      "fontSize": {
        "headline-xl": ["48px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "display-lg-mobile": ["48px", { "lineHeight": "1.1", "fontWeight": "800" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "label-sm": ["13px", { "lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }]
      }
    }
  }
}


/*
 * Site configuration — edit this file to customise your website.
 * Schema version 2. Text values are inserted as plain text (never as HTML).
 * Template Studio on droplates.com writes this same file when you download.
 */
window.SITE_CONFIG = {
  schema: 2,
  template: "portfolio",
  edition: "free",
  preset: "editorial",         // "editorial" | "gallery" | "contemporary"
  theme: "light",              // "light" | "dark"
  style: {
    accent: "",                // "" = automatic, or a hex colour like "#b4532a"
    font: "Inter",             // body font: "Inter" | "IBM Plex Sans" | "Manrope" | "Space Grotesk"
    headFont: "",              // "" = preset decides, or "Instrument Serif" | "Fraunces" | "Inter"
    buttons: "auto",           // "auto" | "pill" | "rounded" | "square"
    density: "normal"          // "compact" | "normal" | "spacious"
  },
  brand: { name: "Mara Lind", logo: "" },         // logo: path to an image, e.g. "assets/logo.svg". Shown next to the name.
  nav: { work: "Work", about: "About", contact: "Contact" },
  hero: {
    title: "Design that feels",
    titleEm: "quietly certain.",
    text: "Mara Lind is an independent designer working on brands, products and printed matter."
  },
  contact: { email: "hello@example.com", location: "Antwerp, Belgium", availability: "From January", formEndpoint: "" },
  social: { instagram: "", linkedin: "", dribbble: "" },
  seo: { siteName: "Mara Lind", description: "Portfolio of Mara Lind, independent designer." },

  availability: { enabled: true, text: "Available for work · from January" },
  cv: { label: "Download CV", file: "" },   // file: a PDF uploaded in Template Studio, or a path like "assets/cv.pdf"
  // Projects power the home page, the Work page and each case study (project.html?p=slug).
  projects: [
    {
      "slug": "northpeak",
      "title": "Northpeak identity",
      "category": "Brand",
      "year": "2025",
      "tags": [
        "Identity",
        "Strategy",
        "Guidelines"
      ],
      "summary": "A calm, modular identity for an outdoor equipment brand.",
      "client": "Northpeak (demo)",
      "role": "Brand design",
      "featured": true,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    },
    {
      "slug": "lumen",
      "title": "Lumen app",
      "category": "Product",
      "year": "2025",
      "tags": [
        "Interface",
        "Design system"
      ],
      "summary": "Interface and design system for a wellness app.",
      "client": "Lumen (demo)",
      "role": "Product design",
      "featured": false,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    },
    {
      "slug": "fieldwork",
      "title": "Fieldwork journal",
      "category": "Print",
      "year": "2024",
      "tags": [
        "Editorial",
        "Typography"
      ],
      "summary": "Design system for a quarterly printed journal.",
      "client": "Fieldwork (demo)",
      "role": "Editorial design",
      "featured": false,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    },
    {
      "slug": "cascade",
      "title": "Cascade website",
      "category": "Web",
      "year": "2024",
      "tags": [
        "Website",
        "Art direction"
      ],
      "summary": "A new website for an architecture studio.",
      "client": "Cascade (demo)",
      "role": "Web design",
      "featured": false,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    },
    {
      "slug": "orbital",
      "title": "Orbital packaging",
      "category": "Brand",
      "year": "2023",
      "tags": [
        "Packaging",
        "Identity"
      ],
      "summary": "Packaging for a small coffee roaster.",
      "client": "Orbital (demo)",
      "role": "Packaging design",
      "featured": false,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    },
    {
      "slug": "atlas",
      "title": "Atlas posters",
      "category": "Print",
      "year": "2023",
      "tags": [
        "Posters",
        "Illustration"
      ],
      "summary": "A poster series for a music festival.",
      "client": "Atlas (demo)",
      "role": "Print design",
      "featured": false,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    },
    {
      "slug": "meridian",
      "title": "Meridian website",
      "category": "Web",
      "year": "2022",
      "tags": [
        "Website",
        "Development"
      ],
      "summary": "Website for a hotel group.",
      "client": "Meridian (demo)",
      "role": "Web design",
      "featured": false,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    },
    {
      "slug": "tide",
      "title": "Tide app",
      "category": "Product",
      "year": "2022",
      "tags": [
        "Mobile",
        "Prototyping"
      ],
      "summary": "A tide-tracking app for surfers.",
      "client": "Tide (demo)",
      "role": "Product design",
      "featured": false,
      "image": "",
      "challenge": "Replace this with the brief, constraints and your approach.",
      "outcome": "Describe the result. Only use figures you can support.",
      "gallery": [
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        },
        {
          "image": ""
        }
      ]
    }
  ],

  // Overrides made in Template Studio (click-to-edit). Keys are element IDs in the HTML (data-e, data-el, data-ei, data-s).
  content: {},                 // text overrides, e.g. { "index-t3": "New heading" }
  links: {},                   // button links, e.g. { "index-l1": "pricing.html" }
  images: {},                  // image placeholders, e.g. { "index-i1": "assets/img-index-i1.jpg" }
  sections: {}                 // e.g. { "index-s3": { hidden: true } }
};

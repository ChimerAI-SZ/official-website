// tailwind.config.js
import { nextui } from "@nextui-org/react"
import animatePlugin from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)"
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          // DEFAULT: "hsl(var(--primary))",
          DEFAULT: "#202020",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))"
        }
      },
      screens: {
        xs: "320px"
      },
      animation: {
        "scroll-left": "scroll-left 20s linear infinite",
        "scroll-right": "scroll-right 20s linear infinite",
        "scroll-left-desktop": "scroll-left 130s linear infinite",
        "scroll-right-desktop": "scroll-right 120s linear infinite"
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "scroll-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    }
  },
  plugins: [
    animatePlugin,
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#202020"
              // You might want to add other shades as well
              // 50: "#...",
              // 100: "#...",
              // ... up to 900
            }
          }
        },
        // You can also set it for dark theme if needed
        dark: {
          colors: {
            primary: {
              DEFAULT: "#202020"
              // Other shades...
            }
          }
        }
      },
      layout: {
        radius: {
          small: "6px", // rounded-small
          medium: "8px", // rounded-medium
          large: "12px" // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px" // border-large
        }
      }
    })
  ]
}

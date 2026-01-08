/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,astro}'],
    theme: {
        extend: {
            colors: {
                // Deep background tones
                'rich-black': '#050505',
                'dark-navy': '#0B0C15',

                // Primary Glow Gradient Colors
                'primary-glow-start': '#FF7A00', // Burnt Orange
                'primary-glow-end': '#FFB800',   // Amber

                // Secondary Glow
                'electric-blue': '#3B82F6',
            },
            fontFamily: {
                // Outfit for modern/tech feel, Inter as versatile fallback
                sans: ['Outfit', 'Inter', 'sans-serif'],
            },
            letterSpacing: {
                // For that tight, bold title look
                tightest: '-0.05em',
            },
            // You can extend animations or other theme values here if needed
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};

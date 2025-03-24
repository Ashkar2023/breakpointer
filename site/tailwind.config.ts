import { Config } from "tailwindcss";

export default {
    content: [
        "./src/**/*.{tsx,jsx,ts,js}",
        "./index.html"
    ],
    theme: {
        extend: {
            screens: {
                "mobile": "300px"
            },
        },
    },
    plugins: [],
} satisfies Config;


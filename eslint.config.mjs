import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Ignore 'any' type errors
      "@typescript-eslint/no-unused-vars": "warn", // Show warning instead of error
      "react/no-unescaped-entities": "off", // Allow unescaped characters like ' and "
      "@next/next/no-img-element": "off", // Allow <img> usage instead of <Image />
      "@typescript-eslint/no-empty-object-type": "off", // Ignore empty object type errors
    },
  },
];

export default eslintConfig;


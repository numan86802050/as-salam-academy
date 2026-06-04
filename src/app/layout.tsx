export const metadata = {
  title: "As-Salam Academy",
  description: "Islamic Q&A Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}

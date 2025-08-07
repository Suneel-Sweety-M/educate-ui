export function Section({ children, className = "" }) {
  return (
    <section className={`px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

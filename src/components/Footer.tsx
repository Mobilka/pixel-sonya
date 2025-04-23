
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 text-center text-sm text-photo-text bg-photo-soft">
      <p>© {currentYear} סטודיו לצילומי משפחה. כל הזכויות שמורות.</p>
    </footer>
  );
}

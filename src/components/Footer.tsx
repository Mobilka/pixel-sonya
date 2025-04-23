
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-sm text-photo-text bg-photo-soft border-t border-photo-beige">
      <p className="font-medium">© {currentYear} סטודיו לצילומי משפחה. כל הזכויות שמורות.</p>
    </footer>
  );
}

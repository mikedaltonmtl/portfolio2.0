export default function LinkItem({ href, text, onMouseOver, onMouseOut }) {
  return (
    <a
      href={href}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="text-primary hover:text-white hover:bg-primary transition-all px-4 py-2 rounded-md"
    >
      {text}
    </a>
  );
}
export default function LinkItem({ href, text, onMouseOver, onMouseOut }) {
  return (
    <a
      href={href}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="text-primary hover:text-white hover:bg-primary transition ease-out duration-500 px-4 py-2 rounded"
    >
      {text}
    </a>
  );
}
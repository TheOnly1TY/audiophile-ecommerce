export default function Overlay({ isHidden, action }) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${`isHidden ? 'hidden' : ''}`}`}
      onClick={action}
    ></div>
  );
}

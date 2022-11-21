export default function Tabs({ children, isActive }) {
  return (
    <button className={`tab${isActive ? ' tab--active' : ''}`}>
      {children}
    </button>
  );
}

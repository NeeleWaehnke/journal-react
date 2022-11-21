export default function TabBadge({ children, isActive }) {
  return (
    <span className={`badge${isActive ? ' badge--active' : ''}`}>
      {children}
    </span>
  );
}

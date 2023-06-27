const Layout = ({ title, canGoBack, hasTabBar, children }) => {
  return (
    <div>
      <div className="bg-white flex items-center justify-center py-2 fixed w-full max-w-lg border-b-2 font-semibold text-gray-600">
        {title && <span>{title}</span>}
      </div>
      <div className={hasTabBar ? "py-16" : "pt-16"}>{children}</div>
      {hasTabBar && <nav></nav>}
    </div>
  );
};
export default Layout;

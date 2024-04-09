const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1 className="text-xl">Wine World</h1>
      <ul className="flex gap-4">
        <li>Login</li>
        <li>Carrito</li>
        <li>Opciones</li>
      </ul>
    </nav>
  );
};

export default Navbar;

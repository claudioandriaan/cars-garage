function TopMenu() {
  return (
    <div className="w-full  h-[250px] bg-opacity-80  bg-center font-bold bg-cover bg-no-repeat bg-[url('https://www.chase.com/content/services/rendition/image.small.jpg/unified-assets/photography/articles/auto/buying/seo-awd-vs-4wd-whats-the-difference_07312024.jpg')]">
      <div className="ring-1 ring-black ring-opacity-5 t-10 flex justify-end">
        <div className="py-4">
          <a
            href="/"
            className="px-4 py-2 text-sm text-black  hover:text-red-700"
          >
            Home
          </a>
          <a
            href="/offert"
            className="px-4 py-2 text-sm text-black  hover:text-red-700"
          >
            Offert
          </a>
          <a
            href="/services"
            className="px-4 py-2 text-sm text-black  hover:text-red-700"
          >
            Services
          </a>
          <a
            href="/contact"
            className="px-4 py-2 text-sm text-black hover:text-red-700"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex  justify-center text-center mt-[50px] text-3xl text-red-700 font-extrabold uppercase">
        <p>Your favorite Garage.</p>
      </div>
    </div>
  );
}

export default TopMenu;

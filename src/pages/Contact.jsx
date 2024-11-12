function Contact() {
  return (
    <div>
      <section className="w-full h-[100vh] bg-center bg-no-repeat bg-cover bg-[url('https://i.pinimg.com/736x/06/a3/5e/06a35ee6e5ed21ee7b9ec4e2bb44d891.jpg')]">
        <div className=" pl-[200px] pt-[150px]">
          <h1 className="font-extrabold text-6xl text-white-700">
            Get in Touch
          </h1>
          <br />
          <br />
          <div className="grid grid-cols-2   text-2xl gap-5 content-start ">
            <div>
              <h2 className="text-red-700 font-extrabold">Address</h2>
              <h3>310 G 224, Ampatana, Antsirabe</h3>
            </div>
            <div>
              <h2 className="text-red-700 font-extrabold">Email address</h2>
              <h3>claudio.andriaan@gmail.com</h3>
            </div>
            <div>
              <h2 className="text-red-700 font-extrabold">Phone Number</h2>
              <h3>+261 34 55 504 44</h3>
            </div>
            <div>
              <h2 className="text-red-700 font-extrabold">Socials</h2>
              <h3>@claudio</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

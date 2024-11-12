function Footer() {
  return (
    <div>
      <section className=" p-[30px]">
        <div className="grid grid-cols-4  gap-5 content-start">
          <div>
            <p className="text-white">Address</p>
            <p>310 G 224, Ampatana, Antsirabe</p>
          </div>
          <div>
            <p className="text-white">Solution</p>
            <a href="#">offert</a>
            <br />
            <a href="#">services</a>
            <br />
            <a href="#">about us</a>
            <br />
          </div>
          <div>
            <p className="text-white ">Support</p>
            <a href="#">Submit ticket</a>
            <br />
            <a href="#">Documentation</a>
            <br />
            <a href="#">Guides</a>
            <br />
          </div>
          <div>
            <p className="text-white ">Legal</p>
            <a href="#">Terms of service</a>
            <br />
            <a href="#">Privacy policy</a>
            <br />
            <a href="#">License</a>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

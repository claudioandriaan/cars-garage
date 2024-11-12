// import garage from "../assets/mission.png";
function Offert() {
  return (
    <div>
      <section className="w-[98%] h-full bg-white mt-[80px] px-[50px]">
        <div className="flex flex-row h-auto m-10 gap-[20px]">
          <h1 className="basis-2/4 text-6xl text-red-700 font-extrabold uppercase mt-5 lg:ml-30">
            Garage <br />
            Mission
          </h1>
          <img
            className="basis-2/4  bg-no-repeat bg-center bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wAKudHXxxqvJh2VOEHmFDc_evv439vvo-w&s"
            alt="garage's mission"
          />
        </div>

        <div className="flex flex-row h-auto m-10 gap-[20px] p-5">
          <img
            className="basis-2/4  bg-no-repeat bg-center bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_JQ5U2NCVO4vV8Ql6sByXlj1lHQQq5e9epqqU_6fFnESO_LoXedc8TRyti7JqZfLXi4&usqp=CAU"
            alt="garage's mission"
          />
          <h1 className="basis-2/4 text-2xl text-slate-600 lg:ml-30 pt-[30] text-1xl">
            <br />
            Claudio Garage is a leading brand in car design, manufacturing, and
            maintenance. With our cutting-edge technology, we give you
            tomorrow's vehicles, today!
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Offert;

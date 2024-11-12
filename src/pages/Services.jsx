function Services() {
  return (
    <div>
      <section className="w-[98%] h-full bg-white mt-[100px] px-[50px]">
        <div className="flex flex-row h-auto m-10 gap-[20px]">
          <div className="basis-3/4 mt-[50px]">
            <h1 className="text-6xl text-red-700 font-extrabold uppercase lg:ml-30">
              current offers
            </h1>
            <div className="flex flex-row gap-[20px] mt-[50px]">
              <div>
                <h1 className="text-red-700 font-bold text-3xl">
                  Brand New Models
                </h1>
                <p className="font-medium text-slate-600">
                  Browse and buy the brand's best available models
                </p>
              </div>
              <div>
                <h1 className="text-red-700 font-bold text-3xl">
                  Full Service
                </h1>
                <p className="font-medium text-slate-600">
                  Car repair and maintenance available 24/7
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[20px] mt-[60px]">
              <div>
                <h1 className="text-red-700 font-bold text-3xl">
                  Pre-owned Vehicles
                </h1>
                <p className="font-medium text-slate-600">
                  Certified pre-owned Micharlet cars for every budget
                </p>
              </div>
              <div>
                <h1 className="text-red-700 font-bold text-3xl">
                  Custom Details
                </h1>
                <p className="font-medium text-slate-600">
                  Elevate your ride with custom-made upgrades
                </p>
              </div>
            </div>
          </div>

          <img
            className="basis-1/4  bg-no-repeat bg-center bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jfBphamZ57MjdwhWDW8pD-pyv3g3GXtjYRp_bIUIaQszeNMzVH3Gg0I4tStSqyFHgWY&usqp=CAU"
            alt="garage's mission"
          />
        </div>
      </section>
    </div>
  );
}

export default Services;

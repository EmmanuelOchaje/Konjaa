import mobile from "../../assets/images/mobile.png";

const Potential = () => {
  return (
    <div className="py-8 px-4 md:px-[6rem] md:flex justify-between">
      <div className="w-[100%]">
        <img src={mobile} alt="" className="m-auto w-[300px]" />
      </div>

      <div>
        <p className="bg-[#512da81a] rounded-lg text-[#8870c4] font-medium p-1 w-fit h-[30px] mb-2 text-[14px]">
          Konjaa - Potential
        </p>

        <h2>
          <span className="bg text-[40px] font-bold">Online Store</span>
        </h2>
        <p className="font-normal text-[15px] w-[] mr-2">
          When your business is listed with pointfy, we automatically generate a
          landing page for your website and you can start receiving online
          orders/sales.
        </p>
        <div className="mt-5">
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bxs-hand"></i>
            Free Ecommerce website and online marketing
          </p>
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bxs-cog"></i>
            Receing emails and notifications on new online sales
          </p>
        </div>
      </div>
    </div>
  );
};

export default Potential;

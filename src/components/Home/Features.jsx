import cashier from "../../assets/images/cashier-machine (1).png";
import delivery from "../../assets/images/delivery.png";
import product from "../../assets/images/product.png";
import partner from "../../assets/images/deal.png";

const Features = () => {
  return (
    <div className="mb-10 px-[6rem]">
      <h3 className="text-center mb-4 text-[14px] text-[#8870c4]">
        Konjaa - POS App
      </h3>
      <h2 className="text-[40px] text-center font-bold mb-12">
        Realtime <span className="bg font-bold text-40px]">Features</span>
      </h2>

      <div className="md:flex">
        <div className="m-1 mb-6 md:mb-0">
          <div className="bg-[#8870c4] flex m-auto justify-center items-center rounded-full w-[60px] h-[60px]">
            <img src={cashier} className="w-[40px] h-[40px]" alt="" />
          </div>
          <p className="text-[15px] text-center">
            Manage sales, profits and expenses
          </p>
        </div>

        <div className="m-1 mb-6 md:mb-0">
          <div className="bg-[#8870c4] flex m-auto justify-center items-center rounded-full w-[60px] h-[60px]">
            <img src={delivery} className="w-[40px] h-[40px]" alt="" />
          </div>
          <p className="text-[15px] text-center">
            Manage customer/supplier debt, invoices and receipts.
          </p>
        </div>

        <div className="m-1 mb-6 md:mb-0">
          <div className="bg-[#8870c4] flex m-auto justify-center items-center rounded-full w-[60px] h-[60px]">
            <img src={product} className="w-[40px] h-[40px]" alt="" />
          </div>
          <p className="text-[15px] text-center">
            Track stocks, purchases and inventory
          </p>
        </div>

        <div className="m-1 mb-6 md:mb-0">
          <div className="bg-[#8870c4] flex m-auto justify-center items-center rounded-full w-[60px] h-[60px]">
            <img src={partner} className="w-[40px] h-[40px]" alt="" />
          </div>
          <p className="text-[15px] text-center">
            Monitor attendant sales real time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

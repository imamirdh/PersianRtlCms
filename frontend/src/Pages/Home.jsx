import React from "react";
import Feature from "../Components/Home/Feature";
import Chart from "../Components/Home/Chart";
import { xAxisData } from "./../datas";
import {MdPointOfSale ,MdBarChart} from "react-icons/md";
import {GiCash} from "react-icons/gi";
function Home(props) {
  return (
    <div className="px-2 h-full">
      <div className="lg:flex lg:items-center gap-4 lg:h-1/3 space-y-4 mt-4 lg:space-y-0 lg:mt-0">
        <Feature title="فروش امروز" price="2415" percent="-11.4" icon={<MdPointOfSale/>}/>
        <Feature title="درامد امروز" price="2415" percent="-1.4" icon={<MdBarChart/>}/>
        <Feature title="کل فروش" price="2225" percent="2.4" icon={<GiCash/>}/>
      </div>
      <div className="lg:h-2/3 overflow-auto">
        <Chart title="نمودار فروش" data={xAxisData} dataKey="Sale" grid />
      </div>
    </div>
  );
}

export default Home;

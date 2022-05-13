import * as React from "react";
import Footer from "../components/footer";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";

const ClubActivities = () => {
  return (
    <div>
      <AppHeader title="iOS Club - 社團活動" />
      <Navbar />
      <div className="h-3 md:h-32" />
      <div className="px-3 md:px-32">
        <h1 className="hidden">iOS Club 社團活動</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <p className="font-bold text-blue-200 text-3xl">關於..</p>
            <p className="pt-3 font-bold text-black text-5xl">iOS Club</p>
            <p className="pt-3 font-bold text-black text-5xl">社團活動</p>
            <p className="py-4 text-gray-700 text-justify">
              平時社團活動也不僅僅有社課，我們還會舉辦講座、夜烤、 WorkShop
              、社遊、期末聚…等超多活動給社員參加！當然，我們不只和葳格高中建立了長期的任教合作，身為志工性社團，我們還會和相關機構及國小一同舉辦各式各樣的志工營隊，落實將在社內所學回饋社會。
            </p>
            <p className="py-1 text-gray-700 text-justify">
              iOS Club
              社團致力於軟體開發，以及推廣程式教育，但我們同時也期望能夠給社員舒適的相處環境與豐富的交流活動，歡迎所有志在開發與充滿教育熱誠的人一起加入。
            </p>
          </div>
          <img
            className="p-6 place-self-center"
            src="https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/public"
          />
        </div>
      </div>
      {/* 閱讀更多區塊 */}
      <div className="bg-blue-50 flex flex-col items-center">
        <p className="pt-10 text-center w-full text-blue-300 text-xl font-bold">
          往下看更多
        </p>
        <div className="h-9" />
        <div className="pb-8 animate-bounce">
          <Icon icon="akar-icons:triangle-fill" color="#8098b5" rotate={2} />
        </div>
      </div>
      {Footer()}
    </div>
  );
};

export default ClubActivities;

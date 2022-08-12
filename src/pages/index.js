import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ReactComponent as LogoSvg } from "../images/svg/logo.svg";
import { ReactComponent as AboutIosSvg } from "../images/svg/about_ios.svg";
import { ReactComponent as IosClubDoingSvg } from "../images/svg/iosclub_doing.svg";
import AppHeader from "../components/header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Icon } from "@iconify/react";

const IndexPage = () => {
  return (
    <div className="bg-iosbgblue">
      {/* Header */}
      <AppHeader />
      <Navbar />
      <div className="container mx-auto break-all bg-white shadow-lg px-3 md:px-0 font-serif">
        <div className="h-20 md:h-32" /> {/* 空白 */}
        {/* We are iOS Club */}
        <div className="py-5 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3 text-center md:text-left">We are</h1>
              <h1 className="py-3 text-center md:text-left">iOS Club.</h1>
            </div>
            <p className="py-3 text-gray-700 text-center md:text-left">
              一個教你從零開始打造專屬 APP 的社團
            </p>
            <div className="h-2 md:h-2" /> {/* 空白 */}
            <div className="px-5 md:p-0 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 md:gap-3 w-full relative bottom-120 left-1/2 -translate-x-1/2">
              {/* Join Us 按鈕 */}
              <button
                class="overflow-hidden group h-12 px-6 border border-btnbg rounded"
                onClick={() => {
                  window.open("https://forms.gle/2o8TB3mrvHUMTxRE7", "_blank");
                }}
              >
                <div class="transition duration-200 group-hover:-translate-y-12">
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    Join Us
                  </div>
                  <div className="h-12 flex items-center justify-center text-btnbg break-words ">
                    Welcome
                  </div>
                </div>
              </button>
              {/* 歷代社團幹部 按鈕 */}
              <button
                class="overflow-hidden group h-12 px-6 border bg-btnbg border-btnbg rounded transform hover:bg-ioscardblue hover:border-ioscardblue duration-200"
                onClick={() => {
                  window.location.href = "/members";
                }}
              >
                <div className="h-12 flex items-center justify-center text-white">
                  歷代社團幹部
                </div>
              </button>
            </div>
          </div>
          <LogoSvg className="w-full p-10" fill="#696AAD" />
        </div>
        <div className="h-8" />
        {/* About iOS Club. */}
        <div className="py-5 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
          <AboutIosSvg className="w-full p-10 md:p-0 bg-cover hidden md:block" />
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">About</h1>
              <h1 className="py-3">iOS Club.</h1>
            </div>
            <p className="py-3 md:px-12 text-gray-700 text-justify">
              是全台第一個獲得 Apple
              官方認證的社團，也是一個結合學術的志工性社團。每年寒、暑假社員們會有國際交流的機會，到海外參加
              iOS Club 官方舉辦的冬、夏令營，
              和不同國家的學生進行合作活動與技術交流。
            </p>
          </div>
          <AboutIosSvg className="w-full p-10 md:p-0 bg-cover md:hidden" />
        </div>
        <div className="h-32" />
        {/* iOS Club 會做什麼 */}
        <div className="py-5 md:px-32 grid grid-rows-1 md:grid-cols-2 md:p-10 md:space-x-10 justify-center items-center">
          <div className="w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h2 className="py-3">iOS Club</h2>
              <h2 className="py-3">會做什麼</h2>
            </div>
            <p className="py-3 text-gray-700 text-justify">
              在比賽方面， 社團鼓勵所有社員參加對外性比賽。 近年來也都在WWDC
              學生挑戰賽及移動應用創新賽等比賽取得佳績。
              當然，平時社團活動也不僅僅有社課，我們還會舉辦講座、夜烤、WorkShop、社遊、期末聚等，超多活動等你們來參加！
              我們不只和葳格高中建立了長期的任教合作，
              身為志工性社團的我們，還會和相關機構及國小一同舉辦志工營隊，將在社團內所學回饋社會。
            </p>
          </div>
          <IosClubDoingSvg className="w-full" />
        </div>
        <div className="h-16" /> {/* 空白 */}
        {/* Gallery */}
        <h2 className="text-center text-3xl pt-24 pb-12 font-bold">社團相簿</h2>
        <div>
          <Splide
            options={{
              type: "loop",
              focus: "center",
              gap: "1rem",
              perPage: 1,
              padding: "20%",
              arrows: false,
              drag: false,
              pagination: false,
              autoScroll: {
                speed: 1.8,
                pauseOnHover: false,
              },
              breakpoints: {
                768: {
                  padding: "15%",
                  autoScroll: {
                    speed: 1,
                    pauseOnHover: false,
                  },
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            {imageList.map((image, index) => (
              <SplideSlide key={index}>
                <img src={image} className="w-full h-full object-cover" />
              </SplideSlide>
            ))}
          </Splide>
          {/* desktopBTN */}
          <div className="hidden md:block w-fit relative bottom-16 left-1/2 -translate-x-1/2">
            <a
              className="bg-btnbg1 text-center py-3 px-6 rounded-full break-words transform hover:bg-red-400 duration-200"
              href="/gallery_list"
            >
              <nobr>點我看更多</nobr>
            </a>
          </div>
        </div>
        {/* mobileBTN */}
        <div className="md:hidden flex w-full py-8 justify-center">
          <a
            className="bg-btnbg1 text-center py-3 px-6 rounded-full break-words transform hover:bg-red-400 duration-200"
            href="/gallery_list"
          >
            <nobr>點我看更多</nobr>
          </a>
        </div>
        {/* iOS Club 做過什麼 */}
        <div className="h-20 md:h-32" /> {/* 空白 */}
        <h2 className="text-center text-3xl py-3 font-bold">
          iOS Club 做過什麼
        </h2>
        <div className="py-5 px-5 md:grid md:grid-cols-3 md:gap-3 justify-center text-center">
          <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50">
            <h2 className="my-8 text-xl font-bold">社團課程</h2>
            <p className="my-8">每週二、四的晚上 18:30～20:30</p>
            {learnMoreButton("/course")}
          </div>
          <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
            <h2 className="my-8 text-xl font-bold">社團活動</h2>
            <p className="px-2 my-8">
              想知道 iOS Club 每年都有哪些精采活動嗎？
            </p>
            {learnMoreButton("/club_activities")}
          </div>
          <div className="w-full grid grid-col-1 rounded-md shadow-lg border border-neutral-50 justify-around">
            <h2 className="my-8 px-2 text-xl font-bold">社團競賽</h2>
            <p classwName="my-8">社團每年參加的比賽</p>
            {learnMoreButton("/contest")}
          </div>
        </div>
        {/* 聯絡我們 */}
        <div class="antialiased">
          <div class="flex w-full py-12 md:py-32 justify-center items-center">
            <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-btnbg w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
              <div class="flex flex-col space-y-8 justify-between">
                <div>
                  <h1 class="font-bold text-4xl tracking-wide">Contact US</h1>
                  <p class="pt-2 text-cyan-100">
                    如想更加暸解我們或是想要與我們合作，歡迎洽詢！
                  </p>
                </div>
                <div class="flex flex-col space-y-4">
                  <div class="inline-flex space-x-2 items-center">
                    <Icon
                      icon="carbon:email"
                      width="20"
                      height="20"
                      color="#ffffff"
                    />
                    <a href="mailto:iosclubtw@gmail.com">iosclubtw@gmail.com</a>
                  </div>
                  <div class="inline-flex space-x-2 items-center">
                    <Icon
                      icon="akar-icons:location"
                      width="20"
                      height="20"
                      color="#ffffff"
                    />
                    <a
                      href="https://goo.gl/maps/4PwBD6dZjiMvRTKr7"
                      target="_blank"
                    >
                      407 台中市西屯區文華路100號 電通館 B04
                    </a>
                  </div>
                </div>
                {/* Social icon */}
                <div class="flex space-x-4 text-lg">
                  {socialItems.map((icon, index) => (
                    <a href={icon.href} target="_blank">
                      <Icon
                        icon={icon.icon}
                        width="32"
                        height="32"
                        color="#ffffff"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

const learnMoreButton = (href = "/") => {
  return (
    <p className="my-8">
      <a
        className="w-fit py-3 px-6 rounded-full break-words bg-transparent border border-gray-700 hover:bg-btnbg text-gray-800 hover:text-white"
        href={href}
      >
        <nobr>Learn More</nobr>
      </a>
    </p>
  );
};

// 要顯示在首頁的圖片們
const imageList = [
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/5c0662af-53da-4e2d-888d-426f37cb7100/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ad2731e3-ec12-4447-1381-dc97a9deef00/public",
  "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/20fd9274-c5e1-46fc-53a0-daccc17abe00/public",
];

const socialItems = [
  {
    name: "Facebook",
    icon: "akar-icons:facebook-fill",
    href: "https://www.facebook.com/FCU.iOSClub",
  },
  {
    name: "Instagram",
    icon: "akar-icons:instagram-fill",
    href: "https://www.instagram.com/fcu.iosclub/",
  },
  {
    name: "Line 社群",
    icon: "bi:line",
    href: "https://line.me/ti/g2/Hcrx-jxTUDGItqDEo0R63w?utm_campaign=default&utm_medium=link_copy&utm_source=invitation",
  },
  {
    name: "Discord",
    icon: "akar-icons:discord-fill",
    href: "https://discord.com/invite/z2VPCNFupv",
  },
];

export default IndexPage;

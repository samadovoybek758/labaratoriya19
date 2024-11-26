import React from "react";
import gerb from "../assets/gerb.svg";
import person from "../assets/person.png";
import norma from "../assets/norma.png";

function Header() {
  return (
    <div className="container max-w-[1440px] mx-auto mt-3 pt-10 px-[64px]">
      <div className="flex flex-row justify-between  items-center">
        <div className="w-[214px] flex flex-col justify-center align-middle text-center">
          <img className="w-24 h-24 text-center ml-[59px]" src={gerb} alt="" />
          <span className="font-semibold text-[14px] text-[#212529]">
            Давлат хизматининг ягона электрон ахборот-таҳлил тизими
          </span>
        </div>
        <h1 className="text-[#212529] max-w-[644px] font-semibold text-[32px] text-center font-serif">
          Республика Ассессмент маркази онлайн платформаси
        </h1>
        <div className="flex flex-row justify-start h-20">
          <span className="text-[#0956AF] font-bold text-[72px] font-serif">
            78
          </span>
          <span className="text-[#28A264] font-bold text-[32px]">^2</span>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-[35px] ">
        <div className="flex flex-row gap-8">
          <img src={person} alt="" />
          <div className="max-w-[396px] ">
            <div>
              <h1 className="text-[#212529] font-semibold text-[44px] m-0">
                Азамат Шарипов{" "}
              </h1>
              <h1 className="text-[#212529] font-normal text-[44px] m-0">
                Абдуллажон угли
              </h1>
            </div>
            <div className="mt-[30px] mb-[38px]">
              <div className="flex flex-row gap-4">
                <span className="text-[#495057] text-xl">Тугилган сана:</span>
                <span className="text-[#212529] text-xl">30.09.1997 йил</span>
              </div>
              <div className="flex flex-row gap-4">
                <span className="text-[#495057] text-xl">Тугилган жой:</span>
                <span className="text-[#212529] text-xl">
                  Чуст ш., Наманган.
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <div className="flex flex-col ">
                <span className="text-[#000000] font-medium text-lg">
                  Буйи:
                </span>
                <span className="text-[#000000] font-medium text-lg">
                  175см
                </span>
              </div>
              <div className="flex flex-col ">
                <span className="text-[#000000] font-medium text-lg">
                  Вазни:
                </span>
                <span className="text-[#000000] font-medium text-lg">70кг</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-[#000000] font-medium text-lg">
                  Индекс:
                </span>
                <span className="text-[#000000] font-medium text-lg">22,9</span>
              </div>
              <img src={norma} alt="" />
            </div>
          </div>
        </div>
        <div className="max-w-[420px] flex flex-col gap-3">
          <div>
            <span className="text-[#495057] text-xl font-normal">
              Лавозими:
            </span>
            <p className="text-[#212529] text-xl leading-8">
              Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
              вазири уринбосари
            </p>
          </div>
          <div>
            <span className="text-[#495057] text-xl font-normal">Номзод:</span>
            <p className="text-[#212529] text-xl leading-8">
              Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
              вазири
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

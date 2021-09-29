import React from "react";
import ZeldaBanner from "../../assets/img/zelda_banner.jpg";
import SekiroBanner from "../../assets/img/sekiro_banner.jpg";
import { BannerCard, ContainerBanner, ImgBanner, TitleBanner } from "./styled";

const Banner = () => {
  return (
    <ContainerBanner>
      <BannerCard>
        <ImgBanner src={ZeldaBanner} alt={"Zelda Banner"} />
        <div>
          <TitleBanner>
            {"The Legend of Zelda - Breath of the wild"}
            <hr />
          </TitleBanner>
        </div>
      </BannerCard>
      <BannerCard>
        <ImgBanner src={SekiroBanner} alt={"Sekiro Banner"} />
        <div>
          <TitleBanner>
            {"SEKIRO - Shadows die twice"}
            <hr />
          </TitleBanner>
        </div>
      </BannerCard>
    </ContainerBanner>
  );
};

export default Banner;

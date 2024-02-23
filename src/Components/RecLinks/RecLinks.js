import React from "react";
import { useState } from "react";
import "./RecLinks.css";

function Modal({ handleRecLinks }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    handleRecLinks();
    setModal((prev) => !prev);
  };

  return (
    <>
    <div className="icon-container">
      <img
        src="./images/JACKET-REC-LINK.png"
        onClick={toggleModal}
      />
      <span>Click me for recs</span>
    </div>
      {modal && (
        <>
          <div className="rec-links-modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="rec-links-content">
              Jacket Recs!
              <ul className="Heavy">
                Heavy Jackets
                <a href="https://www.backcountry.com/b/the-north-face-1996-retro-nuptse-jacket-mens?CMP_SKU=TNF04R1&MER=0406&skid=TNF04R1-RECTNFBLA-M&mr:device=c&mr:adType=plaonline&utm_source=google&utm_medium=pla&utm_campaign=20576138872__p:G%7Cs:BC%7Cct:Shopping%7Cct2:pmax%7Cg:xx%7Cc1:Apparel%7Cc2:xx%7Cb:xx%7Cmt:xx____&utm_term=__TNF04R1-RECTNFBLA-M&utm_content=__pla&utm_id=go_cmp-20576138872_adg-_ad-__dev-c_ext-_prd-TNF04R1-RECTNFBLA-M_mca-7811_sig-CjwKCAiA_tuuBhAUEiwAvxkgTqJdg91XLcPnSJ5SibgIMTI3HfOQjZhqvCc9UDUfVUTLEebtiecDCxoCi1AQAvD_BwE&gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTqJdg91XLcPnSJ5SibgIMTI3HfOQjZhqvCc9UDUfVUTLEebtiecDCxoCi1AQAvD_BwE&gclsrc=aw.ds">
                  <li className="rec">The Northface: Nuptse</li>
                </a>
                <a href="https://arcteryx.com/us/en/shop/mens/thorium-sv-hoody?cmpid=pm|mult|perf|google|Arc%27teryx_Google-PMAX_S22_Performance_BOF_R:NAM_C:USA_L:EN|All_Products||{ad_id}&utm_source=google&utm_medium=pm|mult|perf&utm_campaign=Arc%27teryx_Google-PMAX_S22_Performance_BOF_R:NAM_C:USA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTrzsjWMKvERajkWRvcHru-X9M0KZx5mCH64CaKicx6kzX4m0baB7qBoCoL0QAvD_BwE">
                  <li className="rec">Arcteryx: Thorium</li>
                </a>
                <a href="https://www.uniqlo.com/us/en/products/E449723-000/00?colorDisplayCode=09&sizeDisplayCode=004&gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTl5PECD2NotRShYUWq4JRBFOFjkk452AsZ5OwBoO5IJ8cGwuj6fWFBoC9X8QAvD_BwE">
                  <li className="rec">Uniqlo: Hybrid Parka</li>
                </a>
              </ul>
              <ul className="Medium">
                Medium Jackets
                <a href="https://www.mountainhardwear.com/p/mens-ghost-whisperer%2F2-hoody-1874761.html?dwvar_1874761_color=859">
                  <li className="rec">Mountain Hardwear: Ghost Whisperer</li>
                </a>
                <a href="https://www.patagonia.com/product/mens-down-sweater-jacket/84675.html?dwvar_84675_color=NUVG&cgid=jackets">
                  <li className="rec">Patagonia: Down Sweater</li>
                </a>
                <a href="https://adsumnyc.com/collections/outerwear/products/adsum-noroll-reflectaroll-down-jacket">
                  <li className="rec">Adsum + NOROLL Reflectaroll Down Jacket</li>
                </a>
              </ul>
              <ul className="Light">
                Light Jackets
                <a href="https://us.carhartt-wip.com/products/og-chore-coat-blue-rigid-1545">
                  <li className="rec">Carhartt WIP: OG Chore Coat</li>
                </a>
                <a href="https://www.stussy.com/collections/outerwear/products/1110224-zip-sherpa-shadow-plaid-black">
                  <li className="rec">Stussy: Zip Sherpa Shadow Plaid</li>
                </a>
                <a href="https://arcteryx.com/us/en/shop/mens/squamish-hoody?cmpid=pm|mult|perf|google|Arc%27teryx_Google-PMAX_Non-Brand_S23_Performance_BOF_R:NAM_C:USA_L:EN|All_Products||{ad_id}&utm_source=google&utm_medium=pm|mult|perf&utm_campaign=Arc%27teryx_Google-PMAX_Non-Brand_S23_Performance_BOF_R:NAM_C:USA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTlyFdvTuzE-z61Jg-HBCmMVRyFi0Lr-XAbWvPEOoOJ7Xxa2qC25XjRoCVAIQAvD_BwE">
                  <li className="rec">Arcteryx: Squamish Hoody</li>
                </a>
              </ul>
              <button className="close-rec-links-modal" onClick={toggleModal}>
            X
          </button>
            </div>
            
          </div>
        </>
      )}
    </>
  );
}

export default Modal;

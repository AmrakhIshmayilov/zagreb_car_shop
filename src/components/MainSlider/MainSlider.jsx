import React, { useEffect } from "react";
import "./mainSlider.css";
import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";

// import $ from "jquery";

const MainSlider = () => {
  return <div className="main-slider"></div>;

  //   return (
  //     <section
  //       className="main-slider"
  //       data-start-height="830"
  //       data-slide-overlay="yes"
  //     >
  //       <div
  //         style={{
  //           position: "relative",
  //           width: "100%",
  //           height: "auto",
  //           marginTop: 0,
  //           marginBottom: 0,
  //         }}
  //         className="forcefullwidth_wrapper_tp_banner"
  //       >
  //         <div
  //           className="tp-banner-container"
  //           style={{
  //             left: 0,
  //             position: "absolute",
  //             width: 1680,
  //             overflow: "visible",
  //           }}
  //         >
  //           <div
  //             className="tp-banner revslider-initialised tp-simpleresponsive"
  //             id="revslider-135"
  //             style={{
  //               maxHeight: 830,
  //               backgroundColor: "rgba(0, 0, 0, 0)",
  //               backgroundImage: "none",
  //               height: 830,
  //             }}
  //           >
  //             <ul
  //               className="tp-revslider-mainul"
  //               style={{
  //                 display: "block",
  //                 overflow: "hidden",
  //                 width: "100%",
  //                 height: "100%",
  //                 maxHeight: "none",
  //               }}
  //             >
  //               <li
  //                 className="overlay-none tp-revslider-slidesli active-revslide current-sr-slide-visible"
  //                 data-transition="fade"
  //                 data-slotamount="1"
  //                 data-masterspeed="1000"
  //                 data-thumb={image1}
  //                 data-saveperformance="off"
  //                 data-title="Awesome Title Here"
  //                 style={{
  //                   width: "100%",
  //                   height: "100%",
  //                   overflow: "hidden",
  //                   zIndex: 20,
  //                   visibility: "inherit",
  //                   opacity: 1,
  //                 }}
  //               >
  //                 <div
  //                   className="slotholder"
  //                   style={{ width: "100%", height: "100%" }}
  //                   data-duration="undefined"
  //                   data-zoomstart="undefined"
  //                   data-zoomend="undefined"
  //                   data-rotationstart="undefined"
  //                   data-rotationend="undefined"
  //                   data-ease="undefined"
  //                   data-bgpositionend="undefined"
  //                   data-bgposition="center top"
  //                   data-kenburns="undefined"
  //                   data-easeme="undefined"
  //                   data-bgfit="cover"
  //                   data-bgfitend="undefined"
  //                   data-owidth="undefined"
  //                   data-oheight="undefined"
  //                 >
  //                   <div
  //                     className="tp-bgimg defaultimg"
  //                     data-lazyload="undefined"
  //                     data-bgfit="cover"
  //                     data-bgposition="center top"
  //                     data-bgrepeat="no-repeat"
  //                     data-lazydone="undefined"
  //                     src={image1}
  //                     data-src={image1}
  //                     style={{
  //                       backgroundColor: "rgba(0, 0, 0, 0)",
  //                       backgroundRepeat: "no-repeat",
  //                       backgroundImage: `url("${image1}")`,
  //                       backgroundSize: "cover",
  //                       backgroundPosition: "center top",
  //                       width: "100%",
  //                       height: "100%",
  //                       opacity: 1,
  //                       visibility: "inherit",
  //                     }}
  //                   ></div>
  //                   <div className="tp-dottedoverlay 'yes'"></div>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfl sfb tp-resizeme start"
  //                   data-x="left"
  //                   data-hoffset="15"
  //                   data-y="center"
  //                   data-voffset="-50"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                   style={{
  //                     transition: "all 0s ease 0s",
  //                     minHeight: 0,
  //                     minWidth: 0,
  //                     lineHeight: 23,
  //                     borderWidth: 0,
  //                     margin: 0,
  //                     padding: 0,
  //                     letterSpacing: 0,
  //                     fontSize: 14,
  //                     left: 255,
  //                     top: 308,
  //                     visibility: "visible",
  //                     opacity: 1,
  //                     transform:
  //                       "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.0025, 0, 0, 0, 1)",
  //                   }}
  //                 >
  //                   <h2
  //                     style={{
  //                       transition: "all 0s ease 0s",
  //                       minHeight: 0,
  //                       minWidth: 0,
  //                       lineHeight: 57,
  //                       borderWidth: 0,
  //                       margin: 0,
  //                       padding: 0,
  //                       letterSpacing: 1,
  //                       fontSize: 44,
  //                     }}
  //                   >
  //                     Best Worldwide
  //                     <br
  //                       style={{
  //                         transition: "all 0s ease 0s",
  //                         minHeight: 0,
  //                         minWidth: 0,
  //                         lineHeight: 57,
  //                         borderWidth: 0,
  //                         margin: 0,
  //                         padding: 0,
  //                         letterSpacing: 1,
  //                         fontSize: 44,
  //                       }}
  //                     />
  //                     <span
  //                       className="theme_color"
  //                       style={{
  //                         transition: "all 0s ease 0s",
  //                         minHeight: 0,
  //                         minWidth: 0,
  //                         lineHeight: 57,
  //                         borderWidth: 0,
  //                         margin: 0,
  //                         padding: 0,
  //                         letterSpacing: 1,
  //                         fontSize: 44,
  //                       }}
  //                     >
  //                       Car Hire
  //                     </span>
  //                     Deals
  //                   </h2>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfr sfb tp-resizeme start"
  //                   data-x="left"
  //                   data-hoffset="15"
  //                   data-y="center"
  //                   data-voffset="40"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                   style={{
  //                     transition: "all 0s ease 0s",
  //                     minHeight: 0,
  //                     minWidth: 0,
  //                     lineHeight: 23,
  //                     borderWidth: 0,
  //                     margin: 0,
  //                     padding: 0,
  //                     letterSpacing: 0,
  //                     fontSize: 14,
  //                     left: 255,
  //                     top: 433,
  //                     visibility: "visible",
  //                     opacity: 1,
  //                     transform:
  //                       "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.0025, 0, 0, 0, 1)",
  //                   }}
  //                 >
  //                   <div
  //                     className="text"
  //                     style={{
  //                       transition: "all 0s ease 0s",
  //                       minHeight: 0,
  //                       minWidth: 0,
  //                       lineHeight: 22,
  //                       borderWidth: 0,
  //                       margin: 0,
  //                       padding: 0,
  //                       letterSpacing: 0,
  //                       fontSize: 16,
  //                     }}
  //                   >
  //                     Tremor est vivos magna. Expansis ulnis video missing
  //                     <br
  //                       style={{
  //                         transition: "all 0s ease 0s",
  //                         minHeight: 0,
  //                         minWidth: 0,
  //                         lineHeight: 22,
  //                         borderWidth: 0,
  //                         margin: 0,
  //                         padding: 0,
  //                         letterSpacing: 0,
  //                         fontSize: 16,
  //                       }}
  //                     />
  //                     carnem armis caeruleum in locis.
  //                   </div>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfl sfb tp-resizeme start"
  //                   data-x="left"
  //                   data-hoffset="15"
  //                   data-y="center"
  //                   data-voffset="110"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                   style={{
  //                     transition: "all 0s ease 0s",
  //                     minHeight: 0,
  //                     minWidth: 0,
  //                     lineHeight: 23,
  //                     borderWidth: 0,
  //                     margin: 0,
  //                     padding: 0,
  //                     letterSpacing: 0,
  //                     fontSize: 14,
  //                     left: 255,
  //                     top: 497,
  //                     visibility: "visible",
  //                     opacity: 1,
  //                     transform:
  //                       "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.0025, 0, 0, 0, 1)",
  //                   }}
  //                 >
  //                   <a
  //                     href="##"
  //                     className="theme-btn btn-style-one"
  //                     style={{
  //                       transition: "all 0.2s ease-out 0s",
  //                       minHeight: 0,
  //                       minWidth: 0,
  //                       lineHeight: 24,
  //                       borderWidth: 2,
  //                       margin: 0,
  //                       padding: "14px 43px",
  //                       letterSpacing: 0,
  //                       fontSize: 14,
  //                     }}
  //                   >
  //                     EXPLORE NOW
  //                   </a>
  //                 </div>
  //               </li>

  //               <li
  //                 className="overlay-none tp-revslider-slidesli"
  //                 data-transition="fade"
  //                 data-slotamount="1"
  //                 data-masterspeed="1000"
  //                 data-thumb={image2}
  //                 data-saveperformance="off"
  //                 data-title="Awesome Title Here"
  //                 style={{ width: "100%", height: "100%", overflow: "hidden" }}
  //               >
  //                 <div
  //                   className="slotholder"
  //                   style={{ width: "100%", height: "100%" }}
  //                   data-duration="undefined"
  //                   data-zoomstart="undefined"
  //                   data-zoomend="undefined"
  //                   data-rotationstart="undefined"
  //                   data-rotationend="undefined"
  //                   data-ease="undefined"
  //                   data-bgpositionend="undefined"
  //                   data-bgposition="center top"
  //                   data-kenburns="undefined"
  //                   data-easeme="undefined"
  //                   data-bgfit="cover"
  //                   data-bgfitend="undefined"
  //                   data-owidth="undefined"
  //                   data-oheight="undefined"
  //                 >
  //                   <div
  //                     className="tp-bgimg defaultimg"
  //                     data-lazyload="undefined"
  //                     data-bgfit="cover"
  //                     data-bgposition="center top"
  //                     data-bgrepeat="no-repeat"
  //                     data-lazydone="undefined"
  //                     src={image2}
  //                     data-src={image2}
  //                     style={{
  //                       backgroundColor: "rgba(0, 0, 0, 0)",
  //                       backgroundRepeat: "no-repeat",
  //                       backgroundImage: `url(${image2})`,
  //                       backgroundSize: "cover",
  //                       backgroundPosition: "center top",
  //                       width: "100%",
  //                       height: "100%",
  //                     }}
  //                   ></div>
  //                   <div className="tp-dottedoverlay 'yes'"></div>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfl sfb tp-resizeme start"
  //                   data-x="left"
  //                   data-hoffset="15"
  //                   data-y="center"
  //                   data-voffset="-50"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                 >
  //                   <h2>
  //                     NEED A <span className="theme_color">RIDE</span> ?
  //                   </h2>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfr sfb tp-resizeme start"
  //                   data-x="left"
  //                   data-hoffset="15"
  //                   data-y="center"
  //                   data-voffset="10"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                 >
  //                   <div className="text">
  //                     Tremor est vivos magna. Expansis ulnis video missing <br />
  //                     carnem armis caeruleum in locis.
  //                   </div>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfl sfb tp-resizeme start"
  //                   data-x="left"
  //                   data-hoffset="15"
  //                   data-y="center"
  //                   data-voffset="90"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                 >
  //                   <a href="##" className="theme-btn btn-style-two">
  //                     MAKE A BOOKING
  //                   </a>
  //                   &nbsp; &nbsp;{" "}
  //                   <a href="##" className="theme-btn btn-style-one">
  //                     MAKE A BOOKING
  //                   </a>
  //                 </div>
  //               </li>

  //               <li
  //                 className="overlay-none tp-revslider-slidesli"
  //                 data-transition="fade"
  //                 data-slotamount="1"
  //                 data-masterspeed="1000"
  //                 data-thumb={image3}
  //                 data-saveperformance="off"
  //                 data-title="Awesome Title Here"
  //                 style={{
  //                   width: "100%",
  //                   height: "100%",
  //                   overflow: "hidden",
  //                   visibility: "hidden",
  //                   opacity: 0,
  //                   zIndex: 18,
  //                 }}
  //               >
  //                 <div
  //                   className="slotholder"
  //                   style={{ width: "100%", height: "100%" }}
  //                   data-duration="undefined"
  //                   data-zoomstart="undefined"
  //                   data-zoomend="undefined"
  //                   data-rotationstart="undefined"
  //                   data-rotationend="undefined"
  //                   data-ease="undefined"
  //                   data-bgpositionend="undefined"
  //                   data-bgposition="center top"
  //                   data-kenburns="undefined"
  //                   data-easeme="undefined"
  //                   data-bgfit="cover"
  //                   data-bgfitend="undefined"
  //                   data-owidth="undefined"
  //                   data-oheight="undefined"
  //                 >
  //                   <div
  //                     className="tp-bgimg defaultimg"
  //                     data-lazyload="undefined"
  //                     data-bgfit="cover"
  //                     data-bgposition="center top"
  //                     data-bgrepeat="no-repeat"
  //                     data-lazydone="undefined"
  //                     src={image3}
  //                     data-src={image3}
  //                     style={{
  //                       backgroundColor: "rgba(0, 0, 0, 0)",
  //                       backgroundRepeat: "no-repeat",
  //                       backgroundImage: `url(${image3})`,
  //                       backgroundSize: "cover",
  //                       backgroundPosition: "center top",
  //                       width: "100%",
  //                       height: "100%",
  //                     }}
  //                   ></div>
  //                   <div className="tp-dottedoverlay 'yes'"></div>
  //                 </div>

  //                 <div
  //                   className="tp-caption sft sfb tp-resizeme start"
  //                   data-x="center"
  //                   data-hoffset="0"
  //                   data-y="center"
  //                   data-voffset="-50"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                 >
  //                   <h2 className="text-center">
  //                     HIRE CAR
  //                     <span className="theme_color">PROFESSIONAL</span>
  //                   </h2>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfb sfb tp-resizeme start"
  //                   data-x="center"
  //                   data-hoffset="0"
  //                   data-y="center"
  //                   data-voffset="10"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                 >
  //                   <div className="text text-center">
  //                     Pestilentia est haec ambulabat mortuos. Sicut malus voodoo.
  //                     Aenean a dolor <br /> vulnerum aperire accedunt, mortui iam
  //                     vivam.
  //                   </div>
  //                 </div>

  //                 <div
  //                   className="tp-caption sfb sfb tp-resizeme start"
  //                   data-x="center"
  //                   data-hoffset="0"
  //                   data-y="center"
  //                   data-voffset="90"
  //                   data-speed="1500"
  //                   data-start="500"
  //                   data-easing="easeOutExpo"
  //                   data-splitin="none"
  //                   data-splitout="none"
  //                   data-elementdelay="0.01"
  //                   data-endelementdelay="0.3"
  //                   data-endspeed="1200"
  //                   data-endeasing="Power4.easeIn"
  //                 >
  //                   <a href="##" className="theme-btn btn-style-two">
  //                     CONTACT NOW
  //                   </a>
  //                   &nbsp; &nbsp;{" "}
  //                   <a href="##" className="theme-btn btn-style-one">
  //                     DONATE NOW
  //                   </a>
  //                 </div>
  //               </li>
  //             </ul>

  //             <div
  //               className="tp-bannertimer"
  //               style={{
  //                 width: "11.36%",
  //                 visibility: "visible",
  //                 transform: "translate3d(0px, 0px, 0px)",
  //               }}
  //             ></div>
  //             <div className="tp-loader spinner4" style={{ display: "none" }}>
  //               <div className="dot1"></div>
  //               <div className="dot2"></div>
  //               <div className="bounce1"></div>
  //               <div className="bounce2"></div>
  //               <div className="bounce3"></div>
  //             </div>
  //           </div>
  //           <div
  //             className="tp-bullets simplebullets preview3 hidebullets"
  //             style={{ bottom: 50, left: "50%", marginLeft: -35 }}
  //           >
  //             <div className="bullet first selected"></div>
  //             <div className="bullet"></div>
  //             <div className="bullet last"></div>
  //             <div className="tpclear"></div>
  //           </div>
  //           <div
  //             style={{ position: "absolute", top: 415, marginTop: -27, left: 0 }}
  //             className="tp-leftarrow tparrows default preview3 hidearrows"
  //           >
  //             <div className="tp-arr-allwrapper">
  //               <div className="tp-arr-iwrapper">
  //                 <div
  //                   className="tp-arr-imgholder"
  //                   style={{
  //                     visibility: "inherit",
  //                     opacity: 1,
  //                     backgroundImage: `url("${image3}")`,
  //                   }}
  //                 ></div>
  //                 <div className="tp-arr-imgholder2"></div>
  //                 <div className="tp-arr-titleholder">Awesome Title Here</div>
  //                 <div className="tp-arr-subtitleholder"></div>
  //               </div>
  //             </div>
  //           </div>
  //           <div
  //             style={{ position: "absolute", top: 415, marginTop: -27, right: 0 }}
  //             className="tp-rightarrow tparrows default preview3 hidearrows"
  //           >
  //             <div className="tp-arr-allwrapper">
  //               <div className="tp-arr-iwrapper">
  //                 <div
  //                   className="tp-arr-imgholder"
  //                   style={{
  //                     visibility: "inherit",
  //                     opacity: 1,
  //                     backgroundImage: `url("${image2}")`,
  //                   }}
  //                 ></div>
  //                 <div className="tp-arr-imgholder2"></div>
  //                 <div className="tp-arr-titleholder">Awesome Title Here</div>
  //                 <div className="tp-arr-subtitleholder"></div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="tp-fullwidth-forcer"
  //           style={{ width: "100%", height: 830 }}
  //         ></div>
  //       </div>
  //     </section>
  //   );
};

export default MainSlider;

// setTimeout(() => {
//   //Revolution Slider
//   console.log($(".main-slider .tp-banner"));
//   if ($(".main-slider .tp-banner").length) {
//     console.log("burda");
//     var MainSlider = $(".main-slider");
//     var strtHeight = MainSlider.attr("data-start-height");
//     var slideOverlay = "'" + MainSlider.attr("data-slide-overlay") + "'";

//     $(".main-slider .tp-banner")
//       .show()
//       .revolution({
//         dottedOverlay: slideOverlay,
//         delay: 100000,
//         startwidth: 1200,
//         startheight: strtHeight,
//         hideThumbs: 600,

//         thumbWidth: 80,
//         thumbHeight: 50,
//         thumbAmount: 5,

//         navigationType: "bullet",
//         navigationArrows: "0",
//         navigationStyle: "preview3",

//         touchenabled: "on",
//         onHoverStop: "off",

//         swipe_velocity: 0.7,
//         swipe_min_touches: 1,
//         swipe_max_touches: 1,
//         drag_block_vertical: false,

//         parallax: "mouse",
//         parallaxBgFreeze: "on",
//         parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

//         keyboardNavigation: "off",

//         navigationHAlign: "center",
//         navigationVAlign: "bottom",
//         navigationHOffset: 0,
//         navigationVOffset: 50,

//         soloArrowLeftHalign: "left",
//         soloArrowLeftValign: "center",
//         soloArrowLeftHOffset: 20,
//         soloArrowLeftVOffset: 0,

//         soloArrowRightHalign: "right",
//         soloArrowRightValign: "center",
//         soloArrowRightHOffset: 20,
//         soloArrowRightVOffset: 0,

//         shadow: 0,
//         fullWidth: "on",
//         fullScreen: "off",

//         spinner: "spinner4",

//         stopLoop: "off",
//         stopAfterLoops: -1,
//         stopAtSlide: -1,

//         shuffle: "off",

//         autoHeight: "off",
//         forceFullWidth: "on",

//         hideThumbsOnMobile: "on",
//         hideNavDelayOnMobile: 1500,
//         hideBulletsOnMobile: "on",
//         hideArrowsOnMobile: "on",
//         hideThumbsUnderResolution: 0,

//         hideSliderAtLimit: 0,
//         hideCaptionAtLimit: 0,
//         hideAllCaptionAtLilmit: 0,
//         startWithSlide: 0,
//         videoJsPath: "",
//         fullScreenOffsetContainer: "",
//       });
//   }
// }, 500);

import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './gallery.css'

class Gallery extends React.Component{
    render(){
        const images = [
            { url: require("./images/KakaoTalk_Photo_2016-07-07-17-07-51.jpg") },
            { url: require("./images/KakaoTalk_Photo_2016-07-07-17-07-46.jpg") },
            { url: require("./images/KakaoTalk_20170113_125937985.jpg") },

            { url: require("./images/KakaoTalk_20170113_125748315.jpg") },

            { url: require("./images/KakaoTalk_20170113_125722733.jpg") },

            { url: require("./images/KakaoTalk_20161103_200248538.jpg") },

            { url: require("./images/KakaoTalk_20161013_161859066.jpg") },
            { url: require("./images/KakaoTalk_20160714_200728318.jpg") },

            { url: require("./images/KakaoTalk_20151218_131111742.jpg") },

            { url: require("./images/KakaoTalk_20150913_214113133.jpg") },

            { url: require("./images/KakaoTalk_20150701_002517777.jpg") },

            { url: require("./images/KakaoTalk_20150701_002517046.jpg") },

            { url: require("./images/KakaoTalk_20150701_002505992.jpg") },

            { url: require("./images/KakaoTalk_3f852c70fb6f4ca3.jpg") },

            { url: require("./images/img2.jpg") },

            { url: require("./images/img.jpg") },

            { url: require("./images/IMG_7602.jpg") },

            { url: require("./images/IMG_7586.jpg") },

            { url: require("./images/IMG_7584.jpg") },

            { url: require("./images/IMG_4923.jpg") },
            { url: require("./images/IMG_4772.jpg") },

            { url: require("./images/IMG_2335.jpg") },

            { url: require("./images/IMG_2197.jpg") },

            { url: require("./images/IMG_1794.jpg") },

            { url: require("./images/IMG_1716.jpg") },

            { url: require("./images/IMG_1164.jpg") },

            { url: require("./images/IMG_1109.jpg") },

            { url: require("./images/image.jpg") },
            { url: require("./images/DSC_0114.jpg") },

            { url: require("./images/DSC_0093.jpg") },

            { url: require("./images/DSC_0081.jpg") },

            { url: require("./images/Bandphoto_2014_05_14_13_31_06.jpg") },

            { url: require("./images/1421654364774.jpg") },

            { url: require("./images/20161221_131538-1.jpg") },
            { url: require("./images/20160707_173320.jpg") },

            { url: require("./images/20160504_174227.jpg") },

            { url: require("./images/20160303_122313.jpg") },

            { url: require("./images/20151217_144926.jpg") },

            { url: require("./images/20151217_125809.jpg") },
            { url: require("./images/20130628_121943.jpg") },

            { url: require("./images/20130628_121831.jpg") },

            { url: require("./images/2016-07-28 14.48.46.jpg") },

            { url: require("./images/2016-07-25 12.25.28.jpg") },

            { url: require("./images/2015-12-20 17.39.26.jpg") },
        ];
        return (
            <div>
                <h1 className = "gid">Gallery</h1>
                <SimpleImageSlider
                    width={1100}
                    height={600}
                    images={images}
                />
            </div>
        );
            }
}

export default Gallery;

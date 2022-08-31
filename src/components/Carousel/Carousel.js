import imgCarr1 from './assets/img/imgCarr1.jpg'
import imgCarr2 from './assets/img/imgCarr2.jpg'
import imgCarr3 from './assets/img/imgCarr3.jpg'
import imgCarr4 from './assets/img/imgCarr4.jpg'
import imgCarr5 from './assets/img/imgCarr5.jpg'
import imgCarr6 from './assets/img/imgCarr6.jpg'
import imgCarr7 from './assets/img/imgCarr7.jpg'
import imgCarr8 from './assets/img/imgCarr8.jpg'
import imgCarr9 from './assets/img/imgCarr9.jpg'
import imgCarr10 from './assets/img/imgCarr10.jpg'


import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const images = [
    imgCarr1 , imgCarr2, imgCarr3, imgCarr4, imgCarr5, imgCarr6, imgCarr7, imgCarr8, imgCarr9, imgCarr10
    // { key: 2 , link: {imgCarr2} },
    // { key: 3 , link: {imgCarr3} },
    // { key: 4 , link: {imgCarr4} },
    // { key: 5 , link: {imgCarr5} },
    // { key: 6 , link: {imgCarr6} },
    // { key: 7 , link: {imgCarr7} },
    // { key: 8 , link: {imgCarr8} },
    // { key: 9 , link: {imgCarr9} },
    // { key: 10 , link: {imgCarr10} },




    // "https://www.losandes.com.ar/resizer/r9kMzdc2Dszt4tTK8wAhpg9JIB0=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/ASHUWDQ2MBATLBPGWLFBTXGDNM.jpg",
    // "https://pbs.twimg.com/profile_images/1412629073956950022/8KqC1cmp_400x400.jpg",
    // "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb3190eac5e0819b4/62650f53234cf04ce5461098/Angel_Di_Maria_Argentina_2022.jpg",
    // "https://elcomercio.pe/resizer/0sP9MYvjyjTf_oUV9iazepvGoEQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K5J2CBGPJRAF5DRF5653PZJ6YA.jpg",
    // "https://media.tycsports.com/files/2021/07/04/302722/lautaro_1440x810_wmk.jpg?v=1",
    // "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IGD2V7BHOMBFBPNXCYPQATJDOI.jpg",
    // "https://fulbox.com/wp-content/uploads/2022/08/Leandro-Paredes-saldra-el-Paris-Saint-Germain-y-se-unira-a-la-Juventus-e1660256343896.jpg",

];


const estiloGallery = {}

class Gallery extends React.Component {
    state = {
        galleryItems: images.map(i => (
            <div  style={estiloGallery.div}>
                <div className="wrapper">
                    <img key={i} src={i} style={estiloGallery.img} alt=''/>
                </div>
            </div>
        ))
    };

    responsive = {
        0: { items: 1 },
        500: { items: 2 },
        768: { items: 3 },
        1200: { items : 4 }
    };

    onSlideChange(e) {
        console.debug("Item`s position during a change: ", e.item);
        console.debug("Slide`s position during a change: ", e.slide);
    }

    onSlideChanged(e) {
        console.debug("Item`s position after changes: ", e.item);
        console.debug("Slide`s position after changes: ", e.slide);
    }

    render() {
        return (
            <AliceCarousel
                items={this.state.galleryItems}
                responsive={this.responsive}
                autoPlayInterval={5000}
                autoPlayDirection="ltr"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                playButtonEnabled={false}
                disableAutoPlayOnAction={true}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
                infinite
            />
        );
    }
}

export default Gallery;


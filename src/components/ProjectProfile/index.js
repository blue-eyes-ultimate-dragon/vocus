import React from 'react';
import Lightbox from 'react-images';
const IMAGES = [
    { src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" },
    { src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" },
    { src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" }
];

export default class example extends React.Component {
    constructor(props){
        super(props);
        this.onClose = this.onClose.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    onClose(){

    }
    gotoNext(){

    }
    gotoPrevious(){

    }
    render(){
        return (
            <Lightbox
                isOpen
                images={IMAGES}
                onClose={this.onClose}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
            />
        );
    }
}

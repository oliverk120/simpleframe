import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'poster',
    render: () => {
        return {
            image: 'images/pepeJohnSnow.png',
            buttons: [
                {
                    action: 'post',
                    label: 'Why does he look so sad?'
                }
            ]
        }
    },
    handleInteraction: (frameData: FrameActionDataParsed) => {
        switch (frameData.buttonIndex) {
            case 1: 
                return {
                    frame: 'count',
                };
        }
    },
};

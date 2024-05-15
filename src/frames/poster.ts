import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'poster',
    render: () => {
        return {
            image: 'images/johnsnowresize.jpg',
            buttons: [
                {
                    action: 'post',
                    label: 'Why is he so sad?'
                }
            ]
        }
    },
    handleInteraction: (frameData: FrameActionDataParsed) => {
        switch (frameData.buttonIndex) {
            case 1: 
                return {
                    frame: 'famine',
                };
        }
    },
};

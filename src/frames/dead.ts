import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'dead',
    render: () => {
        return {
            image: 'images/dead.png',
            buttons: [
                {
                    action: 'post',
                    label: 'Start Over'
                }
            ]
        }
    },
    handleInteraction: (frameData: FrameActionDataParsed) => {
        switch (frameData.buttonIndex) {
            case 1: 
            return {
                frame: 'poster',
            };
        }
    },
};

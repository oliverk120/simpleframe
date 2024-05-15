import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'dead',
    render: async () => {
        return {
            image: 'images/deadresize.jpg',
            buttons: [
                {
                    action: 'post',
                    label: 'Start Over'
                }
            ]
        }
    },
    handleInteraction: async (frameData: FrameActionDataParsed) => {
        switch (frameData.buttonIndex) {
            case 1: 
                return {
                    frame: 'poster'
                };
        }
    },
};

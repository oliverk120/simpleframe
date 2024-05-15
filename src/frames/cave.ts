import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'cave',
    render: () => {
        return {
            image: 'images/cave.png',
            buttons: [
                {
                    action: 'post',
                    label: 'Hurray you found the ham! Return home'
                }
            ]
        }
    },
    handleInteraction: (frameData: FrameActionDataParsed) => {
        switch (frameData.buttonIndex) {
            case 1: 
            return {
                frame: 'mint',
            };
        }
    },
};

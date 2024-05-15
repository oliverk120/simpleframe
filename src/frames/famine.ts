import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'famine',
    render: () => {
        return {
            image: 'images/pepeJohnSnow.png',
            buttons: [
                {
                    action: 'post',
                    label: 'Take a nap to wake up refreshed'
                },
                {
                    action: 'post',
                    label: 'Go out to find food'
                }
            ]
        }
    },
    handleInteraction: (frameData: FrameActionDataParsed) => {
        switch (frameData.buttonIndex) {
            case 1: 
            return {
                frame: 'dead',
            };
            case 2:
            return {
                frame: 'wander',
            };
        }
    },
};

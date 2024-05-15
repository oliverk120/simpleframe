import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'famine',
    render: () => {
        return {
            image: 'images/famineresize.jpg',
            buttons: [
                {
                    action: 'post',
                    label: 'Take a nap'
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

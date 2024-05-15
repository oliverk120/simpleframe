import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'wander',
    render: () => {
        return {
            image: 'images/goblinresize.jpg',
            buttons: [
                {
                    action: 'post',
                    label: 'Flee from the goblin'
                },
                {
                    action: 'post',
                    label: 'Fight the goblin'
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
                frame: 'map',
            };
        }
    },
};

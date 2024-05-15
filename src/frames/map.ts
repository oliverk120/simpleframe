import { FrameActionDataParsed } from "frames.js";

export default {
    name: 'map',
    render: () => {
        return {
            image: 'images/map.png',
            buttons: [
                {
                    action: 'post',
                    label: 'Its a trap, dont follow the map'
                },
                {
                    action: 'post',
                    label: 'Follow the map'
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
                frame: 'cave',
            };
        }
    },
};

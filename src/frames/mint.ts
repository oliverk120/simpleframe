import { FrameActionDataParsed } from 'frames.js';

export default {
    name: 'mint',
    render: async () => {
        return {
            image: 'images/feastresize.jpg',
            buttons: [
                {
                    action: 'post',
                    label: '⬅ Back to the start'
                },
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
}
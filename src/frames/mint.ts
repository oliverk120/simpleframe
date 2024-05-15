import { FrameActionDataParsed } from 'frames.js';
import { getTokenUrl } from 'frames.js';
import { zora } from 'viem/chains';

export default {
    name: 'mint',
    render: async () => {
        return {
            image: 'images/feast.png',
            buttons: [
                {
                    action: 'post',
                    label: '⬅ Back'
                },
                {
                    action: 'mint',
                    label: 'Mint',
                    target: getTokenUrl({
                        address: '0x22c468c42e05d1abbea90229c47bf7bded4b5e39',
                        chain: zora,
                        tokenId: '1',
                    })
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
            case 2: 
                return {
                    frame: 'mint'
                };
        }
    },
}
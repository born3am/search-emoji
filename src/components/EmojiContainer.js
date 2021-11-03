import React from 'react'
import EmojiItem from './EmojiItem';

export default function EmojiContainer(props) {
    console.log(props);
    return (
        <div>
            {props.emojisList.map(emoji => {
                return (
                    <EmojiItem
                        key={emoji.title}
                        symbol={emoji.symbol} keywords={emoji.keywords}
                        title={emoji.title} />
                )
            })}
        </div>
    )
}

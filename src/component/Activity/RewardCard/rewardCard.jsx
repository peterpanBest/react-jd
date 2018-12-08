import React, { Component } from "react";
import styed from "./rewardCard.css"
 
export default class rewardCard extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <div className={styed.container}>
                <ul className={styed.cardList}>
                    <li className={styed.cardListLiA}><img src="http://m.360buyimg.com/mobilecms/jfs/t22669/2/1068468129/61215/94ecd235/5b4ef440N90d4cec0.jpg!q70.jpg" alt=""/></li>
                    <li className={styed.cardListChild}><img src="http://m.360buyimg.com/mobilecms/jfs/t22744/121/2371533236/38175/57e9c4c0/5b7d15f8N6dcc1499.jpg!q70.jpg" alt="" srcset=""/></li>
                    <li className={styed.cardListChild}><img src="http://m.360buyimg.com/mobilecms/jfs/t22876/289/1260100934/110456/a7972b81/5b5941f0Ncf55eacb.jpg!q70.jpg" alt="" srcset=""/></li>
                </ul>
            </div>
        )
    }
}

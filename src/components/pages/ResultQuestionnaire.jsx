import React, { useState, useEffect } from 'react'
import { Header, Graph } from '../templates/index'
import { Button } from '../atoms/index.js'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import { Link } from 'react-router-dom'
import questionnaire from '../../assets/json/resultQuestionnaire'

const ResultQuestionnaire = () => {
    const [dataEvent, setDataEvent] = useState([])

    useEffect(() => {
        setDataEvent(questionnaire)
    }, [setDataEvent])

    const descendingOrder = () => {
        setDataEvent(questionnaire)
    }

    const implementationOrder = () => {
        let desArray = JSON.parse(JSON.stringify(dataEvent))

        desArray.sort((a, b) => {
            return b.votes - a.votes
        })
        setDataEvent(desArray)
    }


    return (
        <div>
            <Header />
            <div className="description-container">
                <p>
                    2021年6月の間に実施した「おすすめのライブアンケート」の結果です。<br/>
                    Y軸から水平に引かれる目盛線をクリックすることで、投票数が確認出来ます。
                </p>
            </div>
            <Graph dataEvent={dataEvent} />
            <div className='btn-wrap'>
                <Button text='実施順' func={descendingOrder} />
                <Button text='降順' func={implementationOrder} />
            </div>
            <div className="other-container">
                <div className="other-container-item">
                    <p>ライブ検索</p>
                    <Link to="/">ライブ検索ページ</Link>
                </div>
                <div className="other-container-item">
                    <p>お問い合わせ</p>
                    <span>contact.me.0403@gmail.com</span>
                </div>
                <div className="other-container-item">
                    <p>Tweetボタン</p>
                    <TwitterShareButton url='https://millionlive-lives.web.app/' title='アイドルマスター ミリオンライブ！　ライブ検索' hashtags={['ミリシタ']}>
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                </div>
            </div>
        </div>
    )
}

export default ResultQuestionnaire

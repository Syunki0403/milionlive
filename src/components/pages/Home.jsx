import React, { useState, useEffect } from 'react'
import defaultDataset from '../../assets/json/dataset'
import { Header, Setlist, ReturnTopButton } from '../templates/index'
import { Description } from '../layout/index'
import { CharaIcon, Button, Movie } from '../atoms/index.js'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import { Link } from 'react-router-dom'

const App = () => {
    const [idols, setIdols] = useState([]);
    const [lives, setLives] = useState([]);
    const [setlist, setSetlist] = useState([]);
    const [idolsStages, setIdolsStages] = useState([]);
    const [selectIdols, setSelectIdols] = useState([]);

    useEffect(() => {
        setIdols(defaultDataset.idols)
    }, [setIdols])

    useEffect(() => {
        setLives(defaultDataset.lives)
    }, [setLives])

    useEffect(() => {
        setSetlist(defaultDataset.setList)
    }, [setSetlist])

    const getSortArray = (array) => {
        const resultArray = array.sort((a, b) => {
            return a - b;
        })
        return resultArray
    }

    const showLives = (type) => {
        let mergeArray = []
        let sortArray = []

        selectIdols.forEach(idol => {
            mergeArray = [...mergeArray, ...idol.stages]
        })

        if (type === 'or') {
            const orArray = mergeArray.filter((id, index, self) => self.indexOf(id) === index);

            sortArray = getSortArray(orArray)
        } else {
            let count = {};
            mergeArray.forEach(function (i) {
                count[i] = (count[i] || 0) + 1;
            });

            const andArray = []
            for (var key in count) {
                if (count[key] === selectIdols.length) {
                    andArray.push(parseInt(key))
                }
            }

            if (andArray.length === 0) {
                sortArray = getSortArray([])
            } else {
                sortArray = getSortArray(andArray)
            }
        }

        const resultArray = sortArray.map(id => {
            return lives.find(live => live.id === id)
        })

        setIdolsStages(resultArray)
    }

    return (
        <div>
            <Header />
            <Description />
            <div className="app-container">
                <ul className='chara-wrap'>
                    {idols.map((idol, index) => {
                        return (
                            <li className='chara-box' key={index}>
                                <CharaIcon idol={idol} setSelectIdols={setSelectIdols} selectIdols={selectIdols} />
                            </li>
                        )
                    })}
                </ul>
                <div className='btn-wrap'>
                    <Button text='OR表示' func={showLives} type='or' />
                    <Button text='AND表示' func={showLives} type='and' />
                </div>
                <ul id='movie-area' className='movie-wrap'>
                    {idolsStages.map((live, index) => {
                        return (
                            <li className='movie-box' key={index}>
                                <Movie videoId={live.videoId} name={live.name} />
                                <Setlist setlist={setlist.find(({ id }) => id === live.id)} />
                            </li>
                        )
                    })}
                </ul>
                <div className='return-button-box'>
                    <ReturnTopButton />
                </div>
            </div>
            <div className="other-container">
                <div className="other-container-item">
                    <p>おすすめのライブアンケート</p>
                    <Link to="/result">アンケート結果</Link>
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

export default App

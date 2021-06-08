import React from 'react'
import MediaQuery from "react-responsive"

const Header = () => {
    return (
        <header>
            <MediaQuery query="(min-width: 480px)">
                <div className="header-container">
                    <p>アイドルマスター ミリオンライブ！　ライブ検索</p>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 480px)">
                <div className="header-container">
                    <p>アイドルマスター ミリオンライブ！</p>
                    <p>ライブ検索</p>
                </div>
            </MediaQuery>
        </header>
    )
}

export default Header

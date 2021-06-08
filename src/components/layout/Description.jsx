import React from 'react'

const Description = () => {
    return (
        <div className="description-container">
            <p>
                このサイトでは、選択したアイドルがどの単独ライブに出演したかを検索することが出来ます。<br />
                アイドルを選択（複数選択可）し、「OR表示」を押すと選択したアイドルが出演したライブが全て表示され、「AND表示」を押すと選択したアイドルが共通して出演したライブが表示されます。<br /><br />
                （※「AND表示」は選択したアイドルの組み合わせによって表示されない場合があります。また、ゲスト出演は除いています。）
            </p>
        </div>
    )
}

export default Description

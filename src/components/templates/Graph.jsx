import React from 'react'
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart } from 'recharts'

const Graph = (props) => {
    const { dataEvent } = props

    const yStyle = {
        fontSize: "smaller"
    }

    return (
        <div className='graph-wrap'>
            <ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
                className='chart'
                width={document.body.clientWidth * 0.9}  //グラフ全体の幅を指定
                height={900}  //グラフ全体の高さを指定
                layout="vertical" //グラフのX軸とY軸を入れ替え
                data={dataEvent}   //Array型のデータを指定
            >
                <XAxis  //X軸に関する設定
                    type="number" //データタイプをnumberに変更。デフォルトではcategoryになっている
                />
                <YAxis //Y軸に関する設定
                    style={yStyle}
                    type="category" //データタイプをcategoryに変更
                    dataKey="name"  //Array型のデータの、Y軸に表示したい値のキーを指定
                    width={85}
                />
                <Tooltip />
                <CartesianGrid  //グラフのグリッドを指定
                    stroke="#f5f5f5"  //グリッド線の色を指定
                />
                <Bar
                    dataKey="votes"
                    barSize={15}
                    stroke="rgba(34, 80, 162, 0.2)"
                    fillOpacity={1}
                    fill="#2250A2"
                />
            </ComposedChart>
        </div>
    )
}

export default Graph

import React, { useState } from 'react'

const CharaIcon = (props) => {
    const [select, setSelect] = useState(false);

    const { idol, setSelectIdols, selectIdols } = props;

    const toggleSelect = () => {
        setSelect(!select)

        if (select === true) {
            const removedArray = selectIdols.filter(selected => selected.id !== idol.id)
            setSelectIdols(removedArray)
        } else {
            setSelectIdols([...selectIdols, idol])
        }
    }

    const getPositionX = () => {
        if (idol.id % 9 === 1) {
            return '0px'
        } else {
            return String(((idol.id - 1) % 9) * -75) + 'px';
        }
    }
    const getPositionY = () => {
        if (idol.id % 9 === 0) {
            return String(Math.floor((idol.id - 1) / 9) * -75) + 'px';
        } else {
            return String(Math.floor(idol.id / 9) * -75) + 'px';
        }
    }

    const styles = {
        backgroundPositionX: getPositionX(),
        backgroundPositionY: getPositionY(),
    }

    return (
        <div onClick={() => toggleSelect()} className={select ? 'selected' : ''}>
            <div className='chara-icon' style={styles}></div>
            <p>{idol.name}</p>
            <span>({idol.actor})</span>
        </div>
    )
}

export default CharaIcon

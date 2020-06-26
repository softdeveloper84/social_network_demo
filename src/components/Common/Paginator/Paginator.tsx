import React, {useEffect, useState} from "react";
import styles from './Paginator.module.css';
import cn from "classnames";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: any
}


const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 10;
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = (portionNumber) * portionSize;

    useEffect(() => {
        onPageChanged(leftPortionPageNumber);
    }, [leftPortionPageNumber]);

    return (
        <div className={cn(styles.paginator)}>
            // {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}>{p}</span>
                    })}
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
                }
        </div>
    );
};

export default Paginator;

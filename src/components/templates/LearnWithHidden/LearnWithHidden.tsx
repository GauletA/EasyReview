"use client"

import { useQuery } from "@tanstack/react-query";
import {cerebroQueryKeys} from "@/api/queries/index"

import ButtonHidden from "@/components/ui/ButtonHidden";
import BoxLearn from "./BoxLearn"
import { useEffect, useState } from "react";
import DisplayWords from "./DisplayWords/DisplayWords";
import { IReviewHidden } from "@/api/interface/hidden.interface";
import Pagination from "@/components/ui/Pagination";
import Button from "@/components/ui/Button";


export default function LearnWithHidden() {
    const [indexTab, setIndexTab] = useState(0)
    const [indexItem, setIndexItem] = useState(0)

    const [swap, setSwap] = useState(true)

    const { data } = useQuery({ ...cerebroQueryKeys.cerebro_learnHidden.all() });
    const wordsHidden = data as IReviewHidden[]

    useEffect(() => {
        setIndexItem(0)
    },[indexTab])


    return (
        <div className='h-screen w-screen flex flex-col items-center pt-20'>
            <div className="flex flex-col max-w-[1000px] w-full gap-4">
                {wordsHidden && <div className="flex gap-3 w-full max-w-[1000px] justify-between items-end">
                    <div>
                        <span>Tabs: </span>
                        <Pagination numberBtn={wordsHidden.length} onClick={(nb) => setIndexTab(nb)} />
                    </div>

                    <Button onClick={() => setSwap((state) => !state)}>Swap hidden words</Button>
                </div>}
                <BoxLearn className="flex flex-col items-center" >
                    <>
                    <div>Tab : {indexTab}</div>
                    <div className="flex flex-1 w-full justify-between items-center">
                        <Button className="h-full" onClick={() => setIndexItem((state) => state - 1 >= 0  ? state - 1 : state) }>
                            prev
                        </Button>
                        <div className="flex h-full flex-col flex-1 justify-around">
                            { wordsHidden?.[indexTab]?.review[indexItem]?.first && <DisplayWords isHidden={true} items={swap ? wordsHidden[indexTab].review[indexItem]?.first : wordsHidden[indexTab].review[indexItem]?.last }/>}
                            { wordsHidden?.[indexTab]?.review[indexItem]?.last && <DisplayWords isHidden={false} items={!swap ? wordsHidden[indexTab].review[indexItem]?.first : wordsHidden[indexTab].review[indexItem]?.last }/>}
                        </div>
                        <Button className="h-full" onClick={() => setIndexItem((state) => state + 1 <= wordsHidden[indexTab].review.length-1 ? state + 1 : state) }>
                            next
                        </Button>
                    </div>
                    </>
                </BoxLearn>
            </div>
        </div>
    )
}
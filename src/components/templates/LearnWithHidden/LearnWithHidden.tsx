"use client"

import { useQuery } from "@tanstack/react-query";
import {cerebroQueryKeys} from "@/api/queries/index"

import BoxLearn from "./BoxLearn"
import { useEffect, useMemo, useState } from "react";
import DisplayWords from "./DisplayWords/DisplayWords";
import { IReviewHidden } from "@/api/interface/hidden.interface";
import Pagination from "@/components/ui/Pagination";
import Button from "@/components/ui/Button";
import { shuffleArray } from "@/utils/common";

export default function LearnWithHidden() {
    const [indexTab, setIndexTab] = useState(0)
    const [indexItem, setIndexItem] = useState(0)
    const [search, setSearch] = useState('')

    const [swap, setSwap] = useState(true)

    const { data } = useQuery({ ...cerebroQueryKeys.cerebro_learnHidden.all() });
    const wordsHidden = data as IReviewHidden[]

    const tabFloor = useMemo(() => wordsHidden?.[indexTab] ? shuffleArray(wordsHidden?.[indexTab].review) : [], [indexTab, wordsHidden])

    return (
        <div className='h-screen w-screen flex flex-col items-center pt-20'>
            <div className="flex flex-col max-w-[1000px] w-full gap-4">
                {wordsHidden && <div className="flex gap-3 w-full max-w-[1000px] justify-between items-end">
                    <div>
                        <div className="mb-2">Tabs: {indexTab}</div>
                        <Pagination numberBtn={wordsHidden.length} onClick={(nb) => setIndexTab(nb)} />
                    </div>

                    <div className=" flex gap-2">
                        <Button onClick={() => setIndexItem(0)}>Start</Button>
                    </div>
                </div>}
                <BoxLearn className="flex flex-col items-center" >
                    <>
                        <div className="flex flex-1 w-full justify-between items-center">
                            <Button className="text-3xl" onClick={() => setIndexItem((state) => state - 1 >= 0  ? state - 1 : state) }>
                            {'<'}
                            </Button>
                            <div className="relative flex h-full flex-col flex-1 justify-between items-center">
                                <div className="absolute  inset-x-1/3 inset-y-1/3  flex flex-col items-center justify-center">
                                    <Button className="w-min h-min z-30" onClick={() => setSwap((state) => !state)}>Swap</Button>
                                </div>
                                { tabFloor[indexItem]?.first && <DisplayWords  isHidden={swap} items={  tabFloor[indexItem]?.first }/>}
                                { tabFloor[indexItem]?.last && <DisplayWords isHidden={!swap} items={  tabFloor[indexItem]?.last }/>}
                            </div>
                            <Button className="text-3xl" onClick={() => setIndexItem((state) => state + 1 <= tabFloor.length-1 ? state + 1 : state) }>
                                {'>'}
                            </Button>
                        </div>
                    </>
                </BoxLearn>
            </div>
        </div>
    )
}
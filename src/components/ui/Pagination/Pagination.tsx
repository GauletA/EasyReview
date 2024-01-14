import { useEffect, useState } from "react"
import Button from "../Button"


type Props = {
    numberBtn: number
    onClick: (number: number) => void
}

export default function Pagination({ numberBtn, onClick }: Props) {
    return (<div className="flex gap-2">
       {Array.from({ length: numberBtn }, (_, i) => <Button className="card" key={i} onClick={() => onClick(i)}>{i}</Button>)}
    </div>)
} 
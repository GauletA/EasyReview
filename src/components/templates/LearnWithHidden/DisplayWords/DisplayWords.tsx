import { TReviewHiddenItem } from "@/api/interface/hidden.interface"
import ButtonHidden from "@/components/ui/ButtonHidden"
import { useEffect } from "react"

type Props = {
    item: TReviewHiddenItem[]
    isHidden?: boolean
}

export default function DisplayWords({item, isHidden = false}: Props) {
    return (<div className="flex justify-center gap-4">
        {item.map(item => (
            <ButtonHidden key={`${item.index}-hidden`} isHidden={isHidden} str={item.word} />
        ))}
    </div>)
}                   
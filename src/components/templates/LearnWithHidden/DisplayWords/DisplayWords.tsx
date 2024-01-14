import { TReviewHiddenItem } from "@/api/interface/hidden.interface"
import ButtonHidden from "@/components/ui/ButtonHidden"

type Props = {
    items: TReviewHiddenItem[]
    isHidden?: boolean
}

export default function DisplayWords({items, isHidden = false}: Props) {

    return (<div className="flex justify-center gap-4">
        {items.map(item => (
            <ButtonHidden key={`${item.index}-hidden`} isHidden={isHidden} str={item.word} />
        ))}
    </div>)
}                   
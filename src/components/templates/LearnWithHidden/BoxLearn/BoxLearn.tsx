import { useQuery } from "@tanstack/react-query";

import {cerebroQueryKeys} from "@/api/queries/index"

export default function BoxLearn () {

    const { data } = useQuery({ ...cerebroQueryKeys.cerebro_learnHidden.all() });

    console.log("data: ",data);
    

    return (<div className="card w-full h-[600px] max-w-[1000px] p-1">
        box
    </div>)
}
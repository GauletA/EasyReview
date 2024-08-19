"use client"

import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { twMerge, twJoin } from "tailwind-merge"

type Props = {
    className?: string
    isHidden?: boolean
    str: string
}

type Inputs = {
    value: string
  }

export default function ButtonHidden({ className, isHidden = false, str}: Props) {
    const [isHiddenState, setHiddenState] = useState(true)
    const [strState, setStrState] = useState('')
    const [isValidate, setIsValidate] = useState(false)

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
      } = useForm<Inputs>()

      useEffect(() => {
        setHiddenState(isHidden)
        setStrState(str)

        return () => {
            reset()
            setIsValidate(false)
        }
    }, [str, isHidden, reset])

    const onSubmit: SubmitHandler<Inputs> = (data) => {        
        if (data.value != str) {
            setError('value', {type: 'validate' ,message: 'Not good!'})
            setIsValidate(false)
        }
        else {
            setHiddenState(false)
            setIsValidate(true)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <button className={twMerge("group px-3 py-1 rounded-lg border bg-blue-300 dark:bg-gray-950 border-transparent transition-colors hover:border-green-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                                    className,
                                    isValidate && 'bg-green-300  border-2 border-green-500',
                                    errors.value && 'bg-red-300  border-2 border-red-500')}
                onClick={() => {
                    setHiddenState(state => !state)
                }}>
                <span className={twJoin("text-xl", isHiddenState && "opacity-0")}>{strState}</span>
            </button>

            {isHidden && <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <input type="text" className={twJoin("rounded-md px-2 dark:bg-gray-950" )}  {...register('value')}   />
                </div>
            </form>}
        </div>
   
    ) 
}
import { useEffect, useRef } from "react"

const useUpdateEffect = (cb, deps) => {
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
            return
        }

        cb()
        
    }, [deps, cb])
}

export default useUpdateEffect

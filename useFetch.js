import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const [state, setstate] = useState({data:null,loading:true,error:null})
    const isMonted = useRef(true);

    useEffect(()=>{

        return ()=>{
            isMonted.current = false;
            
        }
    },[])
    useEffect(() => {
        setstate({
            ...state,
            loading:true
        }
        )
        fetch(url)
            .then(resp=> resp.json())
            .then( data =>{
                    if(isMonted.current){
                    setstate({
                        loading:false,
                        error:null,
                        data
                        }
                    )}
                }
                
            );
            
    }, [url])
    return state;
}

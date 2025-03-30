import { Search, X } from "lucide-react";
import { Input } from "../../input";
import { useRef, useState } from "react";

export default function SearchInput({setSearchConfigs, ...props}) {
    const [icon, setIcon] = useState("Search");
    const inputRef = useRef(null);

    function handleChange(e){
        setSearchConfigs({searchTerm: e.target.value});
        if(e.target.value !== ""){
            if(icon == "Remove") return;
            setIcon("Remove");
        } else{
            setIcon("Search");
        }
    }

    function handleClearInput(){
        setSearchConfigs({searchTerm: ""});
        inputRef.current.value = "";
        setIcon("Search");
    }

    return (
        <div className="relative">
            <Input ref={inputRef} onChange={(e) => handleChange(e)} {...props}/>
            {icon === "Search" 
                ? <Search className="absolute right-2.5 top-2" size={18} color="gray"/> 
                : <X onClick={handleClearInput} className="absolute right-2 top-2 cursor-pointer" size={18} color="gray"/> 
            }
        </div>
    )
}

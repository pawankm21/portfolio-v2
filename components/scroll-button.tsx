import { IconProps } from "../types/prop-types";
import ChevronIconUp from "./icons/chevron-up-icon";


export default function ScrollButton({className}:IconProps) {
    return (<button className={`p-3 bg-slate-50 shadow-xl shadow-gray-600 rounded-xl ${className}`}>
    <ChevronIconUp className="  text-red-500 h-12 w-12"/>
    </button>)
}
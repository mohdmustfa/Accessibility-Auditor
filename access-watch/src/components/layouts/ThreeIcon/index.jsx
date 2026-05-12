import { ShieldCheck, Zap, LockKeyhole } from "lucide-react";
function ThreeIcon() {
    return (
        <div className="max-w-[500px] mx-auto mt-5 px-2">
            <div className="flex justify-between">
                <span className="text-sm text-gray-700 flex items-center"> <ShieldCheck size={18} color="#155dfc"/> WCAG2.2 Compliant</span> | 
                <span className="text-sm text-gray-700 flex items-center"> <Zap size={18} color="#155dfc"/> Instant Result</span> | 
                <span className="text-sm text-gray-700 flex items-center"> <LockKeyhole size={18} color="#155dfc"/> Secure</span>
            </div>
        </div>
    )
}

export default ThreeIcon;
import Link from "next/link";
import {LayoutGroup, motion} from "framer-motion";
export default function Tabs({links,active}:any) 
{
    
    return <LayoutGroup >

  {  links.map((link: any, ind: number) => {
        return (
            <motion.div className=" cursor-pointer "  key={link.link}>
                    <Link href={link.link}>
                        <motion.a className="text-white">{link.name}</motion.a>
                    </Link>
                    
                <motion.div
                    animate={{
                        scale:link.link===active?1:0,
                    }}
                    className={`border border-red-400 rounded-full w-full bg-red-400  `}
                        />
                   
                </motion.div>
            );
        })}
        </LayoutGroup>
    }

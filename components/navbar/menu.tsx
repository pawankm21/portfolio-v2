import { useState } from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";
import Link from "next/link";
import { linkSync } from "fs";
interface Props extends SVGMotionProps<SVGSVGElement> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  active?: any;
  links?: any;
}

export default function MenuButton({
  width = 20,
  height = 20,
  strokeWidth = 1,
  color = "white",
  lineProps = null,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    ...lineProps,
  };
  const unitHeight = 6;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <div className="absolute right-16 lg:hidden z-50">
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={bottom}
          {...lineProps}
        />
      </motion.svg>
      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          width: isOpen ? "8rem" : "0rem",
          height: isOpen ? "fit-content" : "0rem",
          padding: isOpen ? "1rem 0.5rem" : "0rem",
        }}
        className={`absolute bg-black rounded  text-gray-300 text-sm border border-neutral-700 -left-16  overflow-hidden grid gap-2`}
      >
        {props.links.map((link: any, ind: number) => {
          return (
            <div
              key={link.link}
              className={` px-3 my-0.5
           py-0.5  rounded cursor-pointer  ${
             props.active === link.link
               ? "bg-neutral-200 text-neutral-900"
               : "hover:bg-neutral-800 hover:text-white"
           }`}
            >
              <Link href={link.link}>{link.name}</Link>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

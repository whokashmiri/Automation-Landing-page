/* eslint-disable no-unused-vars */


import { motion } from "framer-motion";
import { useEffect, useState } from "react"

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container}>
            {order.map((backgroundColor) => (
                <motion.li
                    key={backgroundColor}
                    layout
                    transition={spring}
                    style={{ ...item, backgroundColor }}
                />
            ))}
        </ul>
    )
}

const initialOrder = [
    "#bfe500c1",
    "#808000",
    "#000000",
    "#0d63f8",
]

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container = {
    listStyle: "none",
    padding: 0,
    margin: 25,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const item = {
    width: 100,
    height: 90,
    borderRadius: "8px",
}

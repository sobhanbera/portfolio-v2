import {useEffect, useRef, useState} from 'react'

import gsap from 'gsap'

import {ANIMATION_FACTOR, DEFAULT_ANIMATION_DURATION} from '../../constants'

interface Props {
    children: React.ReactChild
    animationFactor?: number
    animationDuration?: number
    animationCompletionDuration?: number
}
export default function CursorLover(props: Props) {
    const attracterRef = useRef<HTMLDivElement>(null)
    const [hover, setHover] = useState<boolean>(false)
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)

    /**
     * calculate the initial position and properties
     * setting the position 0, 0 as this components initial position
     */
    const calculateComponentPosition = () => {
        gsap.set(attracterRef.current, {
            x: 0,
            y: 0,
        })
        /**
         * chechking if the box wrapper of this component is available
         * if available then update those values to the local state
         */
        const box = attracterRef.current?.getBoundingClientRect()
        if (box) {
            setWidth(box.width)
            setX(box.left + box.width * 0.5)
            setY(box.top + box.height * 0.5)
        }
    }

    /**
     * when user hovers over this component this function will be triggered
     * this function is also responsible for a smooth movement of the component till the hover is gone
     */
    const onHover = (xLocal: number, yLocal: number) => {
        xLocal -= x
        yLocal -= y
        let distance = Math.sqrt(xLocal * xLocal + yLocal * yLocal)
        let hoverArea = hover ? 0.7 : 0.5

        /**
         * checking if it safe to move the component
         * if the mouse is out of the box then don't move/animate the component
         */
        if (distance < width * hoverArea) {
            gsap.to(attracterRef.current, {
                x: xLocal * (props.animationFactor || ANIMATION_FACTOR),
                y: yLocal * (props.animationFactor || ANIMATION_FACTOR),
                duration: props.animationDuration || DEFAULT_ANIMATION_DURATION,
                ease: 'power2.out',
            })
        }
    }
    /**
     * when the cursor is not in this component just to go the initial state of position
     * and reset all the states
     */
    const onLeave = () => {
        gsap.to(attracterRef.current, {
            x: 0,
            y: 0,
            duration:
                props.animationCompletionDuration || DEFAULT_ANIMATION_DURATION,
            ease: `elastic.out(1.2, ${
                props.animationFactor || ANIMATION_FACTOR
            })`,
        })
    }

    /**
     * useEffect to attach all the events to this component like onHover, onLeave and onMove
     */
    useEffect(() => {
        calculateComponentPosition()

        attracterRef.current?.addEventListener('mousemove', e =>
            onHover(e.clientX, e.clientY),
        )
        attracterRef.current?.addEventListener('mouseleave', e => onLeave())

        // removing all the events on cleanup
        return () => {
            attracterRef.current?.removeEventListener('mousemove', () => {})
            attracterRef.current?.removeEventListener('mouseleave', () => {})
        }
    }, [attracterRef.current]) // without this dependency no animation is working

    return <div ref={attracterRef}>{props.children}</div>
}

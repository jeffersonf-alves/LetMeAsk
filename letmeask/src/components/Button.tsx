import { ButtonHTMLAttributes } from 'react'


import '../styles/button.scss';

type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: ButtonsProps) {


    return (
        <button className="button" {...props} />
    )
}
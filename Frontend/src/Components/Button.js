import React from 'react';

function Button({
    title, variant = "contained",
    color = "primary",
    type = 'button' ,
    onClick,
    fullwidth=false
    }) {
    let className =  "w-100 ";
    if (variant === "contained") {
        className += 'bg-' + color + ' text-white';
    } else if (variant === "outlined") {
        className += "border-" + color + " text-" + color;
    }

    return <button className={className}
        type={type}
        onClick={onClick}
    >{title}</button>;
}

export default Button;



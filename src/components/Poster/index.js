import React from "react";
import Image from "next/image";
import Images from "../../assets";

export default function Poster({ src }) {
    const [imageSource, setImageSource] = React.useState(src || Images.Poster);
    return (
        <Image width={600} height={600} src = {imageSource}  alt="poster of image" onError={() => setImageSource(Images.Poster)}/>
    )
}
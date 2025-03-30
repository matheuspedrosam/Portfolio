import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";

export default function AvatarUI({image, fallBack, className}) {
    return (
        <Avatar className={className}>
            <AvatarImage src={image} />
            <AvatarFallback>{fallBack}</AvatarFallback>
        </Avatar>
    )
}

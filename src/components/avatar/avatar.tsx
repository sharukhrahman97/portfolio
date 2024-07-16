import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AvatarComponentProps {
    className: string;
    src: string;
    alt: string;
    fallbackText: string;
}

export const AvatarComponent: React.FC<AvatarComponentProps> = ({ className, src, alt, fallbackText }) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} alt={alt} className={className} />
            <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
    );
};
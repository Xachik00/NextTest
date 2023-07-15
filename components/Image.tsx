import type { ImageProps } from "@chakra-ui/next-js";
import NextImage from 'next/image';
import {Variants,motion} from 'framer-motion'

// type Props={
//    alt:string,
//    white:string,
//    heigth:string, 
// }&ImageProps
const MImage = motion <ImageProps>(NextImage);
export {MImage as Image};
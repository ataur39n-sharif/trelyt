import { Forum, Roboto, Inter } from "next/font/google";

const forum = Forum({
    subsets: ["latin"] ,
    weight: '400',
});

const roboto = Roboto({
    subsets: ["latin"] ,
    weight: ['300','500','700','900'],
});

const inter = Inter({
    subsets: ["latin"] ,
    weight: ['300','500','700','900'],
});






export {forum, roboto, inter};
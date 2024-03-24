import { roboto } from '@/ThemeSettings'
import Link from 'next/link'
export default function Logo() {
    return (
        <div className="logo_wraper">
            {/* <Image src="/images/logo.png" alt="logo" width={100} height={100} /> */}
            <Link href="/">
                <h1 className={`text-[32px] font-[800] uppercase ${roboto.className} `}><span className=" text-light_color ">Tre</span><span className="text-primary_color">Lyt</span></h1>
            </Link>
        </div>
    )
}
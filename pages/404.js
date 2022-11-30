import Link from "../src/components/Link"


export default function Page404(){
    return(
        <div>
            <h1>Você esta perdido! Vamos volta?? </h1>
            <Link href="/" passHref>
                Ir para Home
            </Link>
        </div>
    )
}
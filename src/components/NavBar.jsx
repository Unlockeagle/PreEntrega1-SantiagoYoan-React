import ButtonCategory from "./ButtonCategory";
import CartWidget from "./CartWidget";

export default function NavBar(){
    return (
    <>
    <nav className="flex w-[100vw] h-24 p-8 justify-between bg-slate-800 backdrop-opacity-10 items-center">
        <h1 className="text-3xl font-bold underline text-white">Araguaney Store</h1>
        <div className="btnsContainer w-[400px] flex justify-start gap-4 items-center">
            <ButtonCategory categoria={"T-shirt"} />
            <ButtonCategory categoria={"Pants"} />
            <ButtonCategory categoria={"Sweater"} />
        </div>
        <CartWidget />
    </nav>
    
    </>)
}

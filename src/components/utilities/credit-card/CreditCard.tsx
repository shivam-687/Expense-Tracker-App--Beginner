
export type CreditCardUiProps = {
    balanceText: string;
    lastThreeDigits: string;
    width?: string;
}

export const CreditCardUi = (props: CreditCardUiProps) => {


    return (
        <div className="relative h-48 credit-card-ui_wrapper rounded-3xl overflow-hidden bg-cover bg-center shadow-md shadow-indigo-400/50" style={{backgroundImage: 'url(https://media.istockphoto.com/photos/dark-blue-metal-pattern-background-picture-id1161683700?k=20&m=1161683700&s=612x612&w=0&h=YXqZgQh3W2NAuNuCrQrVQ52R3ScOz92EGIFgbj1x72U=)'}}>
            <div className=" absolute left-0 top-0 w-full rounded-3xl overflow-hidden card h-full flex flex-col justify-between">
                <div className="head p-3 text-slate-50">
                    <h1 className="text-2xl font-bold" style={{fontFamily: "'Roboto Mono', monospace"}}>{props.balanceText}</h1>
                    <p className="text-sm font-thin">Balance</p>
                </div>

                <div className="f flex justify-between p-3 text-slate-200 font-light">
                    <h1 className="digits">{'XXX XXX XXX '}<span className="uppercase flex-1">{props.lastThreeDigits}</span></h1>
                    <div className="w-10">
                        <img src="./m-lg.png" className="max-w-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
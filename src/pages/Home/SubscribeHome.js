import { Link } from "react-router-dom";

export default function SubscribeHome() {
    return (
        <div className='SubscribeHome'
            style={{
                background: "url('./images/subbanner.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%"
            }}>
            <h3>Узнай больше о всех возможностях с платной подпиской!</h3>
            <p>Все подробности!</p>
            <Link to='/subscriptions'>тут</Link>
        </div>
    )
}

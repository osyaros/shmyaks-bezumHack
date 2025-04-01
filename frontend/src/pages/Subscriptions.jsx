import './subs.scss'
const Subscriptions = () => {

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "50px", justifyContent:"center"}}>
            <div className="card">
                <p className="oform" onClick={localStorage.setItem("tokenSubs", "true")} style={{color: "white", marginBottom: '8px'}}>Оформить</p>
                <h2 className='demo__text_h3' style={{fontWeight: "700", fontSize:"18px", color: "white"}}>Музыка</h2>
                <h1 className='demo__text__h1' style={{color: "white"}}>3 месяца</h1>
                <p style={{ color: "white" , fontSize: "12px"}}>₽</p>

                <div style={{display: "flex", flexDirection: "column", gap: '16px', marginTop: "70px", alignItems: "center"}}>
                    <span style={{color: "white", fontSize: "12px"}}>599</span>
                    <button className="btn">Популярно сейчас</button>
                </div>
               
            </div>
            <div className="card">
                <a className="oform" style={{color: "white", marginBottom: '8px'}} onClick={localStorage.setItem("tokenSubs", "true")} >Оформить</a>
                <h2 className='demo__text_h3' style={{fontWeight: "700", fontSize:"18px", color: "white"}}>Музыка</h2>
                <h1 className='demo__text__h1' style={{color: "white"}}>6 месяцев</h1>
                <p style={{ color: "white" , fontSize: "12px"}}>₽</p>

                <div style={{display: "flex", flexDirection: "column", gap: '16px', marginTop: "70px", alignItems: "center"}}>
                    <span style={{color: "white", fontSize: "12px"}}>1099</span>
                    <button className="btn">Популярно сейчас</button>
                </div>
               
            </div>
            <div className="card">
                <a className="oform" style={{color: "white", marginBottom: '8px'}} onClick={localStorage.setItem("tokenSubs", "true")}>Оформить</a>
                <h2 className='demo__text_h3' style={{fontWeight: "700", fontSize:"18px", color: "white"}}>Музыка</h2>
                <h1 className='demo__text__h1' style={{color: "white"}}>12 месяцев</h1>
                <p style={{ color: "white" , fontSize: "12px"}}>₽</p>

                <div style={{display: "flex", flexDirection: "column", gap: '16px', marginTop: "70px", alignItems: "center"}}>
                    <span style={{color: "white", fontSize: "12px"}}>2099</span>
                    <button className="btn">Популярно сейчас</button>
                </div>
               
            </div>
        </div>
    );
};

export default Subscriptions;
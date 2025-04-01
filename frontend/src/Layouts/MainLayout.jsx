import { Outlet, useNavigate } from "react-router";

const MainLayout = () => {
    const navigate = useNavigate();
  return (
    <>
      <div style={{ padding: "42px 138px" }}>
        <header
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="demo__text_h3"
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <h3 onClick={() => navigate("/")}>главная</h3>
            <h3 onClick={() => navigate("/subscriptions")}>подписки</h3>
            <h3 onClick={() => navigate("/music")}>музыка</h3>
          </div>
          { !localStorage.getItem("token") ?  <h3 onClick={() => navigate("/login")}>войти</h3> : <h3 onClick={localStorage.removeItem("token")}>выйти</h3>}
         
          <></>
        </header>
      </div>
      <Outlet />
    </>
  );
};
export default MainLayout;

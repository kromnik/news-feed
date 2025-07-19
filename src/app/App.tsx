import Layout from "antd/es/layout";
import { NewsList } from "../features/news/ui/NewsList";
import logo from "../shared/assets/logo.svg";
import textLogo from "../shared/assets/textLogo.svg";

const { Header, Content } = Layout;

export const App = () => (
  <Layout>
    <Header
      style={{
        backgroundColor: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img src={logo} alt="Logo" />
        <img src={textLogo} alt="Text logo" />
      </div>
      <h1
      style={{
        margin: "0px",
        fontSize: "40px",
        fontWeight: "600",
        lineHeight: "40px",
        flex: 1,
      }}
    >
      News Feed
    </h1>
    <div style={{ width: 193 }} />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <NewsList />
    </Content>
  </Layout>
);

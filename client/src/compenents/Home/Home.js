import StoryForm from "../StoryForm"
import StoryList from "../StoryList"
import Layout, { Content } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
function Home(){
    return(
        <Layout>
            <Sider width={400}>
                <StoryForm />
            </Sider>
            <Content>
                <StoryList />
            </Content>
        </Layout>
    )
}

// sending Home to index.js so we can use memo() to improve performance 
export default Home
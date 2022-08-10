import StoryForm from "../StoryForm"
import StoryList from "../StoryList"

// antd is a UI library 
import { Layout } from "antd"
import styles from "./styles"

const {Sider , Content } = Layout

function Home(){
    return(
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm />
            </Sider>
            <Content style={styles.content}>
                <StoryList />
            </Content>
        </Layout>
    )
}

// sending Home to index.js so we can use memo() to improve performance 
export default Home
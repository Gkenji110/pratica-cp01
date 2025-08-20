
import { Content } from "./components/content";
import { Footer } from "./components/footer";

import { Header } from "./components/headert";


function App() {
  

  return (
    <>
      <Header/>

      <main>
        <Content title="Aula de revisão" content="Essa aula é massa"/>
        <Content title="Aula de react" content="Reac é muito fácil"/>
          
      </main>
      

      <Footer/>
    </>
  );
}

export default App

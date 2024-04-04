
import { Route ,Routes  } from "react-router-dom";


import Home from "./src/Component/Home";

import Bio from "./src/Component/Bio";

import Contact from "./src/Component/Contact";
import Projecr from "./src/Component/Projecr";
import Skill from "./src/Component/Skill";


function App(){
 
    return <Routes>
       
        <Route path="/" element={<Home />} />
        
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projecr" element={<Projecr />} />
        <Route path="/Skill" element={<Skill />} />


 

    </Routes>

}

export default App;
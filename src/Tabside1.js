import React,{useState, useEffect} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Editor from './CodeEditor';
import useLocalStorage from './useLocalStorage';
import './Tabside1.css'

function Tabside1() {
  const [html,nextHtml] = useLocalStorage('html','')
  const [css,nextCss] = useLocalStorage('css','')
  const [js,nextJs] = useState('js','')
  const [srcDoc, nextSrcDoc] = useState('')
  useEffect (() =>{
    const timeout = setTimeout(() =>{
      nextSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
    },250)
    return ()=>clearTimeout(timeout) 
    },[html,css,js])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>HTML</Tab>
      <Tab>CSS</Tab>
      <Tab>JS</Tab>
    </TabList>

    <TabPanel>
      <h2>Code your HTML here</h2>
      <Editor language = "xml" displayName = "HTML" value ={html} onChange ={nextHtml} />
    </TabPanel>
    <TabPanel>
      <h2>Code your CSS here</h2>
      <Editor language = "css" displayName = "CSS" value ={css} onChange ={nextCss} />
    </TabPanel>
    <TabPanel>
      <h2>Code your JS here</h2>
      <Editor language = "javascript" displayName = "JavaScript" value ={js} onChange ={nextJs} />
    </TabPanel>
  </Tabs>
  <h1 className = 'output-display'>LIVE PREVIEW</h1>
  <div className="pane">
      <iframe
      srcDoc= {srcDoc}
      title="output"
      frameBorder = "5px 5px 5px 5px"
      sandbox="allow-scripts"
      frameBorder = "0"
      width="100%"
      height="100%">

      </iframe>
    </div>
        </div>
        
    )
}

export default Tabside1

import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import App from "./components/App";
import Header from "./Header";
import SideBox from "./SideBox";


let source = [
    {
        name : "Open Peeps",
    description : "A hand-drawn illustration library.",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/719fe138-8598-46ec-8259-ef17ba46c0c2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
    },

    {
        name : "InVideo",
    description : "Create insanely good social videos in under 10 mins",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/9093cadf-bc92-45d3-97ea-a74d41455587?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
    },

    {
        name : "Phone Call Translator",
    description : "Translates your voice calls into 29 languages in real-time",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/76ee2898-6c6c-4d57-86c3-f42b961a97dc?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
    },
    {
        name : "Datawaves",
    description : "Add analytics to anything",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
    },

    {
        name : "Makerlog 3.0",
    description : "The productive community for makers and indie hackers. ✨",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
    },
    {
        name : "SaaS Landing Page",
    description : "The best SaaS landing page examples for design inspiration.. ✨",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
    },
    {
        name : "Selfone",
    description : "Free template for PowerPoint, Keynote and Google Slides",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/3b8fff05-5ac3-4e2b-b902-4606c677d40a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
    },
]

let Card = (props)=>{
    
    return (
            <div className="card">
                <img src={props.image} />
                <div className="items">
                    <h4 className="cardName">{props.name}</h4>
                    <p className="cardPara">{props.description}</p>
                    {props.tags.map(tag=><button className="tagBtn"> {tag} </button>)}
                </div>
            </div>
    )
}


let Cards = ()=>{
    return (
       <div>
           <div className="headerBox">
                <div className="container">
                    <Header />
                </div>
           </div>
            <div className="container">
            
            <div className="cardContainer">
                <div className="cardDiv">
                    <h2 className="cardContainerHeading">Popular this month</h2>
                    <h3 className="cardContainerHeading2">Yesterday</h3>
                    {source.map(details =><Card {...details} />)}
                </div>
                <div className="sideBox">
                    <SideBox />
                </div>
            </div>
        </div>
       </div>
    )
}


ReactDOM.render(<Cards />, document.getElementById("root"));

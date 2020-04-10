import React, { Component } from 'react'
import { Link, Router } from '../routes'
import stylesheet from 'styles/index.scss'
import Head from 'next/head'
import $ from 'jquery'



class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeline: [
                {
                    id: 1,
                    title: "Earth trailer",
                    date: 1487858302,
                    actore: "Dalton Keck",
                    subGenre: "Zombies",
                    producer: "Team coke",
                    icon: "https://cdn2.iconfinder.com/data/icons/prettycons-space-vol-1-ultra/56/1-Exoplanet-space_exploration_universe_rocket_nasa-128.png"
                },
                {
                    id: 6,
                    title: "Earth trailer",
                    date: 1456235902,
                    actore: "Dalton Keck",
                    subGenre: "Zombies",
                    producer: "Team coke",
                    icon: "https://cdn2.iconfinder.com/data/icons/prettycons-space-vol-1-ultra/60/7-Exoplanet-space_exploration_universe_rocket_nasa-128.png"
                },
                {
                    id: 2,
                    title: "Earth trailer",
                    date: 1424699902,
                    actore: "Dalton Keck",
                    subGenre: "Zombies",
                    producer: "Team coke",
                    icon: "https://cdn2.iconfinder.com/data/icons/prettycons-space-vol-1-ultra/60/11-Exoplanet-space_exploration_universe_rocket_nasa-128.png"
                },
                {
                    id: 3,
                    title: "Earth trailer",
                    date: 1361624063,
                    actore: "Dalton Keck",
                    subGenre: "Zombies",
                    producer: "Team coke",
                    icon: "https://cdn2.iconfinder.com/data/icons/prettycons-space-vol-1-ultra/60/18-Moon-space_exploration_universe_rocket_nasa-128.png"
                },
                {
                    id: 7,
                    title: "Earth trailer",
                    date: 1046008702,
                    actore: "Dalton Keck",
                    subGenre: "Zombies",
                    producer: "Team coke",
                    icon: "https://cdn2.iconfinder.com/data/icons/prettycons-space-vol-1-ultra/60/3-Uranus-space_exploration_universe_rocket_nasa-128.png"
                },
                {
                    id: 10,
                    title: "Earth trailer",
                    date: 1014472702,
                    actore: "Dalton Keck",
                    subGenre: "Zombies",
                    producer: "Team coke",
                    icon: "https://cdn2.iconfinder.com/data/icons/prettycons-space-vol-1-ultra/60/14-Earth-space_exploration_universe_rocket_nasa-128.png"
                },
                {
                    id: 4,
                    title: "Earth trailer",
                    date: 631152000,
                    actore: "Dalton Keck",
                    subGenre: "Zombies",
                    producer: "Team coke",
                    icon: "https://cdn2.iconfinder.com/data/icons/prettycons-space-vol-1-ultra/60/18-Moon-space_exploration_universe_rocket_nasa-128.png"
                }
            ]
        }
    }

    renderStep(timeline) {
        return timeline.map((step, index, timeline) => {
            console.log(step, index, timeline);
            let height
            if (index == 0) {
                height = 100 * (((new Date().getTime()) / 1000) - timeline[index].date) / 31536000;
            } else if (timeline.length != index + 1) {
                height = 100 * (timeline[index].date - timeline[index + 1].date) / 31536000;
                console.log(height, timeline[index].date - timeline[index + 1].date);
            }

            if (height < 300) {
                return (
                    <div className="step" style={{ height: Math.trunc(height) }} key={step.id}>
                        <div className="stepInfo">
                            <div className="info">
                                <div className="icon">
                                    <img src={step.icon} />
                                </div>
                                <div className="name"><p>{step.title}</p></div>
                            </div>
                            <div className="moreInfo">
                                <p><strong>Title:</strong>{step.title}</p>
                                <p><strong>Date:</strong>{step.date}</p>
                                <p><strong>Actore:</strong>{step.actore}</p>
                                <p><strong>Sub Genre:</strong>{step.subGenre}</p>
                                <p><strong>Producer:</strong>{step.producer}</p>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="step empty" key={step.id}>
                        <div className="stepInfo">
                            <div className="info">
                                <div className="icon">
                                    <img src={step.icon} />
                                </div>
                                <div className="name"><p>{step.title}</p></div>
                            </div>
                            <div className="moreInfo">
                                <p><strong>Title:</strong>{step.title}</p>
                                <p><strong>Date:</strong>{step.date}</p>
                                <p><strong>Actore:</strong>{step.actore}</p>
                                <p><strong>Sub Genre:</strong>{step.subGenre}</p>
                                <p><strong>Producer:</strong>{step.producer}</p>
                            </div>
                        </div>
                        <div className="bigCircle"></div>
                        <div className="smallCircle">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="bigCircle"></div>
                    </div>
                )
            }

        });
    }

    render() {
        return (
            <div className="main-content">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                </Head>
                <div className="timeline">
                    <div className="step first">

                    </div>
                    {this.renderStep(this.state.timeline)}
                    <div className="step last">

                    </div>
                </div>
            </div>

        );
    }
}


export default Index;

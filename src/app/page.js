'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';

const projects = [
  {
    title: "Fallout",
    src: "Fallout.jpg",
    color: "#1b2838"
  },
  {
    title: "Insider",
    src: "Inside.jpg",
    color:  "#1b2838",
    
  },
  {
    title: "Ghost Of Tsushima",
    src: "ghostoftsushima.jpg",
    color:  "#1b2838"
  },
  {
    title: "Destiny 2",
    src: "Destiny2.jpeg",
    color:  "#1b2838"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
   
  </main>
  )
}

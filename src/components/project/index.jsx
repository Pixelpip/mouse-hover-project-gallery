'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({index, title, setModal}) {
    const projects = [
        { description: 'Top Grossing' },
        { description: 'Top Rated' },
        { description:'Top Action'},
        {description: 'Family Freindly'}
        // Add more projects as needed
    ];
    const project = projects[index] || { title: 'Unknown', description: 'No Description' };

    

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} 
        onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>{project.description}</p>
        </div>
    )
}

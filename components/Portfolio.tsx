"use client"

import React, { useState, useEffect} from "react"
import Image from "next/image"
import { useMotionTemplate, useMotionValue, motion, animate} from "framer-motion"


const projects = [
    {id: 1, 
    year:2025,
    title:'Automated Android Malware Detection Using Optimal Ensemble Learning',
    description:
       "Automated Android Malware Detection Using Optimal Ensemble Learning Designed a system to automatically detect Android malware by combining advanced analysis techniques with optimized ensemble learning, improving accuracy and robustness against evolving threats.",
    image:"/assets/proj5.png",
    },
    {
        id:2,
        year:2024,
        title:'Forcasting Diabetes Onset Using Machine Learning Techniques',
        description:
          "Built a model to predict diabetes onset using clinical and demographic data. Handled missing values, normalized features, and performed EDA to identify key predictors.",
        image:"/assets/proj8.png",
    },
    {
        id: 3,
        year:2023,
        title:'Career Recommendation Website',
        description:
          "Career Recommendation Platform Built a web app to guide 10th-grade students in choosing career paths based on their interests. Designed an intuitive UI and integrated career insights across various domains.",
        image:"/assets/proj9.png",
    },
];

    const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]


export const Portfolio = () => {
    const [selectedProject,setSelectedProject] = useState(projects[1])

    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease:"easeInOut",
            duration: 10,
            repeat:Infinity,
            repeatType: "mirror"
        })
    })
    
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    

    return (
        <motion.section
            style={{
                backgroundImage
            }} 
            id="portfolio" 
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

            <div>   
            <h2 className="text-6xl font-bold mb-10">Selected <span className="text-purple-400">Projects</span></h2>
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer mb-8 group"
                    >
                    <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                    <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                        ${selectedProject.id === project.id ? 'text-purple-100' : ''} duration-300`}>
                        {project.title}
                    </h3>
                    {selectedProject.id === project.id && (
                        <div className="border-b-2 border-purple-200 my-4"></div>
                    )}
                    {selectedProject.id === project.id && (
                        <p className="text-gray-400 transition-all duration-500 ease-in-out">
                            {project.description}
                        </p>
                    )}
                </div>
            ))}
            </div>
            
            {selectedProject.image && (
            <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                width={800}
                height={450}
            />
            )}
        </div>
        </motion.section>
    )
} 


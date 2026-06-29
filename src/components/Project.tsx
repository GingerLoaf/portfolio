import React from "react";
import imgWaveXR from '../assets/images/WaveXR.png';
import imgSOTA from '../assets/images/SOTA.png';
import imgVoxelotlGarden from '../assets/images/VoxelotlGarden.png';
import imgDiceBots from '../assets/images/DiceBots.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Professional Work</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.wavexr.com/" target="_blank" rel="noreferrer"><img src={imgWaveXR} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.wavexr.com/" target="_blank" rel="noreferrer"><h2>WaveXR</h2></a>
                <p>Helped design and develop a realtime live concert platform for virtual reality. Created software used performers such as Justin Bieber, John Legend, The Weeknd, Imogen Heap, Lindsey Stirling, Galantis, Pentakill, Calvin Harris, and more.</p>
            </div>
            <div className="project">
                <a href="https://store.steampowered.com/app/326160/Shroud_of_the_Avatar_Forsaken_Virtues/" target="_blank" rel="noreferrer"><img src={imgSOTA} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.steampowered.com/app/326160/Shroud_of_the_Avatar_Forsaken_Virtues/" target="_blank" rel="noreferrer"><h2>Shroud Of The Avatar: Forsaken Virtues</h2></a>
                <p>Programmed gathering, crafting, looting, and decoration systems for an MMORPG. Helped design crafting, enchanting, and inventory features. Worked on network code to sync decoration state across server instances.</p>
            </div>
            <div className="project">
                <a href="https://store.steampowered.com/app/1285860/Voxelotl_Garden/" target="_blank" rel="noreferrer"><img src={imgVoxelotlGarden} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.steampowered.com/app/1285860/Voxelotl_Garden/" target="_blank" rel="noreferrer"><h2>Voxelotl Garden</h2></a>
                <p>Built and shipped every aspect of this game mostly by myself. I did all the engineering, design, music, SFX, level design, CI/CD, publishing, and more. I did work with an artist for 3D modeling, but everything else was done by my hand alone.</p>
            </div>
            <div className="project">
                <a href="https://gingabonstudios.itch.io/dice-bots" target="_blank" rel="noreferrer"><img src={imgDiceBots} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://gingabonstudios.itch.io/dice-bots" target="_blank" rel="noreferrer"><h2>Dice Bots</h2></a>
                <p>Current ongoing indie project being entirely developed by myself. I am handling all design, engineering, music, SFX, level design, system design, CI/CD, publishing, and more. I also modeled the 3D assets and did all the 2D art myself.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
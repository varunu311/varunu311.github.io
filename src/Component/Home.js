import '../Styling/Home.css';
import Navbar from '../Component/Navbar';
import React, { useState, useEffect } from 'react';
import Media from '../Component/Media'
import FloatingChatCard from './FloatingChatCard';
import aboutimg from '../Assets/about-img.JPG'

function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [transitioning, setTransitioning] = useState(false);
    const [key, setKey] = useState(0);


    const [selectedProject, setSelectedProject] = useState(null);

    const initialProjectStatus = {
        'E-Track': { 
            status: 'default', 
            defaultClass: 'project-top',
            languages:'Javascript, SQL, HTML, CSS',
            content: 'Description or content for Ebay Item Tracker...' 
        },
        'ProFy': { 
            status: 'default', 
            defaultClass: 'project-bottom', 
            languages:'Python, MySQL',
            content: 'Description or content for Ebay Item Tracker...'
        },
        'Chare': { 
            status: 'default', 
            defaultClass: 'project-top',
            languages:'Dart, Java, Javscript',
            content: 'Description or content for Ebay Item Tracker...' 
        },
        'Edu-Life': { 
            status: 'default', 
            defaultClass: 'project-bottom',
            languages:'Typescript, Vue.js, Python, MongoDB, Javascript',
            content: 'Description or content for Ebay Item Tracker...' 
        },
        'Crumble': { 
            status: 'default', 
            defaultClass: 'project-top',
            languages:'C#',
            content: 'Description or content for Ebay Item Tracker...' 
        },
    };

    const [projectStatus, setProjectStatus] = useState(initialProjectStatus);


    const resetProjectStatus = () => {
        const resetStatus = { ...projectStatus };
        Object.keys(resetStatus).forEach(key => {
            resetStatus[key].status = 'default';
        });
        return resetStatus;
    };
    
    const handleBackClick = () => {
        setProjectStatus(resetProjectStatus());
        setSelectedProject(null);
    };


    const changeSection = (section) => {
        setTransitioning(true);
        setTimeout(() => {
            setActiveSection(section);
            setTransitioning(false);
            setKey(prevKey => prevKey + 1);
        }, 1000);
    };


    const handleProjectClick = projectName => {
        const newStatus = { ...projectStatus };
        Object.keys(newStatus).forEach(key => {
            newStatus[key].status = key === projectName ? 'selected' : 'animating';
        });
        setProjectStatus(newStatus);
        setSelectedProject(projectName);
    };

    return (
    <>
        <Navbar onChangeSection={changeSection} />
        <div className={`home-div ${transitioning ? 'transitioning' : ''}`}>
        <div className={`home-div fade-in`} key={key}>
            <div className='home-div'>
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className='svg-back'>
                    <defs>
                        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
                        <stop offset="0%" stop-color="#ff0" />
                        <stop offset="100%" stop-color="#ff00" />
                        </radialGradient>
                        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite" />
                        <stop offset="0%" stop-color="#0ff" />
                        <stop offset="100%" stop-color="#0ff0" />
                        </radialGradient>
                        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
                        <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
                        <stop offset="0%" stop-color="#f0f" />
                        <stop offset="100%" stop-color="#f0f0" />
                        </radialGradient>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
                        <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
                        <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite" />
                    </rect>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
                        <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
                        <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite" />
                    </rect>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
                        <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
                        <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite" />
                        <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite" />
                    </rect>
                </svg>

                {activeSection === 'home' && (
                <>
                    <svg preserveAspectRatio="xMidYMid meet" className="svg-logo" viewBox="0 0 800 800">
                    <g transform="translate(-50,900.000000) scale(0.1000000,-0.1000000)" fill="white" stroke="none">
                        <path className='svg-path' d="M3730 6946 c0 -9 8 -19 18 -22 51 -16 178 -85 237 -129 109 -80 281
                        -276 322 -365 4 -8 19 -35 33 -60 37 -64 101 -216 120 -285 5 -16 13 -43 19
                        -60 5 -16 17 -57 25 -90 8 -33 22 -91 32 -128 9 -37 21 -66 26 -65 9 3 60 140
                        78 207 5 18 13 38 19 44 6 6 11 19 11 28 0 10 6 30 14 46 24 46 126 294 126
                        304 0 10 -9 30 -80 184 -41 89 -52 117 -60 150 -5 17 -13 44 -19 60 -5 17 -20
                        62 -32 102 -13 45 -27 74 -38 77 -9 3 -204 8 -433 12 -387 6 -418 6 -418 -10z"/>
                        <path className='svg-path' d="M5330 6896 c-71 -49 -286 -317 -329 -411 -5 -11 -20 -36 -32 -55 -35
                        -51 -150 -288 -199 -410 -12 -30 -26 -59 -31 -65 -5 -5 -9 -17 -9 -27 0 -9 -6
                        -32 -14 -50 -24 -56 -43 -110 -61 -173 -36 -123 -74 -215 -90 -215 -6 0 -22
                        18 -36 41 -39 66 -41 69 -118 184 -280 415 -639 753 -971 913 -145 70 -231 96
                        -380 117 -165 23 -350 17 -475 -17 -22 -6 -56 -14 -75 -19 -62 -13 -173 -60
                        -268 -113 -47 -27 -140 -105 -174 -147 -60 -75 -152 -212 -170 -254 -18 -43
                        -38 -169 -38 -239 0 -77 5 -79 273 -84 227 -4 233 -4 260 18 15 12 27 28 27
                        36 0 26 39 88 85 135 60 62 182 121 290 140 305 53 574 -10 871 -207 162 -107
                        321 -263 418 -411 20 -31 41 -47 75 -60 150 -57 470 -283 580 -409 105 -121
                        175 -194 185 -194 13 0 27 37 75 200 17 58 36 119 42 135 6 17 14 46 18 65 4
                        19 15 50 25 68 l17 32 117 -1 c64 0 153 -4 197 -10 44 -5 121 -13 170 -19 212
                        -22 360 -64 545 -154 93 -46 98 -48 190 -117 135 -101 255 -238 304 -345 15
                        -35 14 -34 168 -135 64 -42 138 -102 185 -149 43 -44 82 -80 87 -80 11 0 4 31
                        -24 100 -12 30 -25 68 -30 83 -13 40 -125 262 -163 323 -89 140 -208 266 -352
                        373 -161 119 -195 141 -276 179 -170 79 -293 117 -469 146 -52 8 -135 22 -185
                        31 -49 8 -110 15 -135 15 -60 0 -231 27 -242 38 -5 5 3 39 18 78 14 38 29 81
                        34 95 4 14 12 34 18 45 5 10 40 80 77 154 36 74 75 149 86 165 10 17 23 39 29
                        50 36 72 118 174 215 270 81 81 205 185 219 185 3 0 24 13 48 28 24 16 63 36
                        88 46 25 10 57 24 72 32 14 8 33 14 42 14 25 0 87 33 83 44 -3 8 -141 12 -428
                        14 l-424 2 -35 -24z m-2220 -385 c93 -26 130 -43 130 -60 0 -11 -13 -13 -72
                        -7 -182 17 -235 18 -336 7 -59 -7 -125 -18 -147 -25 -22 -7 -67 -21 -100 -32
                        -33 -10 -84 -31 -114 -46 -64 -33 -81 -35 -81 -9 0 51 157 136 320 174 97 23
                        317 22 400 -2z"/>
                        <path className='svg-path' d="M6600 6598 c-203 -34 -426 -151 -569 -297 -44 -46 -181 -223 -194
                        -251 -4 -8 -16 -28 -27 -45 -11 -16 -24 -40 -30 -53 -5 -13 -20 -46 -33 -75
                        -66 -146 -68 -157 -20 -157 14 0 52 -7 85 -16 79 -20 116 -16 132 16 7 14 21
                        39 30 57 9 17 16 36 16 42 0 28 179 280 232 326 217 191 516 279 726 215 86
                        -27 179 -78 205 -112 29 -39 16 -44 -40 -18 -88 41 -145 53 -284 57 -117 4
                        -146 2 -200 -15 -140 -44 -234 -101 -338 -204 -63 -62 -151 -170 -151 -184 0
                        -4 -6 -15 -14 -23 -25 -28 -98 -181 -94 -199 2 -10 21 -23 48 -32 25 -8 50
                        -18 56 -22 6 -4 29 -10 51 -14 33 -5 41 -3 47 12 22 57 164 250 230 311 147
                        137 335 193 485 144 72 -23 150 -94 184 -165 14 -30 34 -59 44 -65 10 -5 114
                        -13 230 -17 211 -7 211 -7 223 15 9 18 8 38 -5 99 -9 42 -23 92 -31 110 -8 18
                        -14 37 -14 43 0 22 -61 132 -105 189 -70 91 -284 260 -328 260 -7 0 -17 4 -23
                        9 -53 52 -360 87 -524 59z"/>
                        <path className='svg-path' d="M3083 6123 c-18 -7 -16 -33 4 -55 49 -54 108 -191 157 -363 8 -27 21
                        -75 30 -106 9 -31 16 -67 16 -80 0 -13 8 -53 18 -89 l19 -65 164 -1 c166 -1
                        205 -7 324 -51 96 -36 130 -56 255 -150 146 -109 305 -281 449 -487 131 -186
                        156 -225 258 -396 57 -96 108 -182 113 -190 5 -8 44 -84 86 -169 76 -150 77
                        -154 64 -189 -15 -42 -93 -172 -151 -252 -22 -30 -54 -75 -71 -100 -35 -49
                        -127 -161 -143 -172 -19 -14 -30 -7 -69 44 -52 69 -196 283 -223 333 -12 22
                        -37 69 -57 105 -63 114 -149 293 -181 380 -9 25 -23 60 -31 78 -8 18 -14 39
                        -14 47 0 8 -6 29 -14 47 -17 42 -46 136 -90 301 -8 28 -22 76 -30 106 -9 29
                        -16 63 -16 74 0 11 -6 43 -14 71 -8 28 -22 87 -31 131 -9 44 -23 106 -31 137
                        -8 32 -14 70 -14 84 0 31 -60 94 -89 94 -10 0 -35 7 -55 15 -48 20 -279 32
                        -319 16 -28 -11 -29 -13 -22 -63 4 -29 16 -71 25 -94 18 -42 18 -42 63 -37 77
                        9 172 -21 220 -69 37 -37 15 -49 -46 -23 -111 46 -439 -16 -607 -115 -8 -5
                        -33 -19 -54 -30 -92 -50 -208 -155 -283 -256 -133 -179 -144 -338 -40 -539 12
                        -22 26 -50 32 -62 12 -27 42 -30 49 -5 3 9 8 40 11 67 9 69 26 120 85 245 39
                        84 80 140 156 215 91 88 131 117 224 162 106 51 142 63 194 66 56 2 49 16 81
                        -138 9 -44 23 -104 31 -132 24 -91 46 -166 59 -208 6 -22 20 -67 30 -100 9
                        -33 22 -71 27 -85 6 -14 14 -38 18 -55 13 -50 68 -196 106 -280 7 -16 25 -57
                        39 -90 82 -185 252 -502 365 -680 56 -88 90 -148 90 -159 0 -18 -90 -89 -178
                        -141 -9 -6 -44 -28 -77 -49 -80 -52 -105 -60 -151 -47 -21 6 -44 7 -53 2 -9
                        -5 -31 -39 -50 -76 -47 -92 -62 -98 -241 -103 -118 -3 -153 -1 -184 12 -21 9
                        -45 16 -53 16 -8 0 -45 15 -82 34 -180 90 -305 185 -402 303 -30 36 -59 71
                        -64 77 -29 31 -107 150 -134 202 -65 128 -127 341 -158 543 -3 20 -29 67 -63
                        111 -48 66 -99 160 -165 305 -12 26 -42 116 -51 153 -7 25 -23 11 -30 -25 -12
                        -63 3 -493 21 -590 30 -166 47 -232 100 -383 22 -60 92 -205 124 -255 14 -22
                        28 -44 31 -50 54 -107 272 -345 415 -452 80 -60 247 -162 318 -196 354 -165
                        665 -219 992 -173 121 17 183 31 233 52 18 8 39 14 46 14 25 0 229 96 316 149
                        19 11 42 24 50 28 8 4 67 45 130 92 148 110 351 313 468 468 51 68 101 127
                        111 132 10 6 58 15 107 22 180 23 358 77 464 139 8 5 33 19 55 31 81 43 147
                        93 218 162 91 90 112 115 197 236 106 152 161 290 178 445 16 145 -3 187 -123
                        270 -67 46 -113 68 -125 61 -5 -3 -6 -59 -3 -124 5 -91 2 -137 -11 -197 -18
                        -80 -69 -227 -90 -254 -6 -8 -20 -31 -30 -50 -26 -47 -105 -147 -153 -191 -83
                        -78 -218 -169 -303 -203 -25 -10 -53 -22 -62 -27 -21 -11 -155 -39 -185 -39
                        -24 0 -50 45 -60 108 -8 44 -35 42 -64 -6 -13 -20 -26 -41 -28 -47 -6 -13
                        -115 -157 -165 -219 -128 -154 -265 -300 -376 -402 -41 -37 -259 -202 -305
                        -231 -149 -93 -350 -203 -374 -203 -6 0 -25 -6 -43 -14 -179 -76 -355 -111
                        -516 -103 -59 3 -123 12 -142 19 -64 25 -100 48 -100 64 0 13 7 15 33 11 226
                        -39 347 -30 582 44 135 42 217 78 330 144 33 19 67 38 75 42 36 19 248 163
                        270 185 14 13 46 40 71 60 94 75 256 234 351 343 125 145 285 381 357 525 12
                        25 26 52 31 60 5 8 23 47 40 85 17 39 37 84 44 100 48 107 119 293 146 380 12
                        39 28 86 35 105 26 74 37 106 45 135 11 40 33 97 43 113 22 33 350 -11 472
                        -63 17 -7 50 -21 75 -31 63 -25 131 -68 225 -138 199 -151 290 -289 340 -521
                        29 -135 13 -366 -36 -505 -36 -105 -90 -223 -130 -285 -10 -16 -22 -37 -26
                        -45 -34 -76 -358 -410 -397 -410 -4 0 -22 -11 -39 -24 -48 -36 -150 -91 -267
                        -144 -70 -31 -96 -41 -155 -56 -237 -60 -354 -72 -530 -52 -151 18 -194 28
                        -292 69 -41 17 -80 27 -89 23 -10 -4 -64 -41 -120 -83 -118 -88 -120 -95 -27
                        -132 32 -12 72 -29 88 -36 85 -36 245 -71 395 -85 253 -24 578 26 815 125 83
                        35 221 104 258 129 21 14 40 26 43 26 8 0 168 123 229 176 68 59 241 256 292
                        332 38 58 153 283 153 301 0 6 6 25 14 43 100 234 101 630 1 863 -30 72 -91
                        185 -133 248 -68 104 -230 259 -337 324 -45 27 -226 113 -238 113 -7 0 -22 7
                        -33 15 -10 8 -27 15 -36 15 -10 0 -32 6 -50 14 -54 23 -316 76 -377 76 -44 0
                        -213 30 -224 39 -15 14 5 42 40 56 40 17 90 19 147 5 49 -11 74 1 82 38 3 15
                        12 45 19 67 7 22 18 56 24 76 6 20 9 44 5 52 -12 33 -194 98 -324 117 -36 5
                        -79 14 -97 20 -40 14 -84 10 -93 -10 -8 -17 -31 -94 -55 -190 -18 -72 -41
                        -155 -60 -215 -7 -22 -21 -69 -30 -105 -10 -36 -23 -85 -30 -110 -8 -25 -21
                        -72 -31 -105 -58 -206 -74 -246 -93 -243 -14 3 -98 112 -100 130 -2 19 -240
                        354 -283 399 -7 8 -54 61 -104 119 -82 94 -142 155 -200 200 -141 112 -346
                        254 -429 298 -59 31 -235 112 -244 112 -17 0 -100 41 -108 53 -19 31 -42 116
                        -43 159 0 43 -3 49 -47 85 -87 71 -118 91 -228 145 -114 57 -217 92 -299 103
                        -27 4 -54 8 -60 10 -6 2 -17 1 -23 -2z"/>
                        <path className='svg-path' d="M3125 5548 c-16 -6 -43 -17 -60 -24 -16 -7 -66 -27 -110 -45 -44 -18
                        -87 -38 -96 -46 -8 -7 -19 -13 -23 -13 -4 0 -45 -25 -91 -56 -103 -68 -257
                        -212 -323 -302 -69 -95 -112 -177 -165 -317 -61 -163 -61 -439 -1 -640 79
                        -259 242 -489 471 -663 89 -67 226 -152 246 -152 7 0 17 -4 22 -9 27 -25 209
                        -90 350 -125 128 -31 167 -36 373 -47 189 -11 215 -10 229 3 14 14 12 22 -19
                        74 -18 33 -45 80 -58 107 -43 81 -53 91 -80 77 -19 -10 -53 -10 -170 -1 -80 7
                        -163 18 -185 23 -22 6 -58 14 -80 18 -56 11 -137 40 -208 76 -16 8 -34 14 -41
                        14 -6 0 -43 20 -80 45 -38 25 -71 45 -73 45 -2 0 -48 33 -101 74 -129 98 -232
                        219 -290 341 -61 129 -74 190 -79 367 -5 163 -3 176 51 324 33 92 136 242 227
                        332 67 66 176 144 254 181 39 19 81 39 95 46 14 7 40 15 59 19 19 3 40 11 48
                        17 17 15 16 62 -2 123 -8 27 -15 64 -15 82 0 18 -7 40 -16 48 -17 18 -17 18
                        -59 4z"/>
                        <path className='svg-path' d="M4381 4638 c-18 -48 -33 -94 -41 -123 -5 -16 -18 -55 -30 -85 -12
                        -30 -26 -68 -30 -85 -12 -42 -39 -114 -51 -137 -26 -48 -13 -103 56 -240 36
                        -73 81 -160 100 -193 18 -33 43 -79 55 -101 12 -23 32 -54 45 -69 l22 -28 20
                        44 c11 24 27 62 35 84 24 61 47 121 62 163 8 20 21 56 30 80 9 23 23 61 32 85
                        8 23 22 55 30 70 19 39 18 64 -7 111 -32 63 -37 70 -154 244 -60 90 -114 173
                        -120 183 -13 26 -44 24 -54 -3z"/>
                        <path className='svg-path' d="M6776 3999 c-3 -17 -6 -63 -6 -101 0 -126 -61 -347 -133 -479 -74
                        -139 -92 -163 -212 -284 -68 -70 -191 -169 -260 -212 -78 -48 -273 -129 -375
                        -156 -65 -17 -190 -34 -318 -43 l-94 -7 -36 -45 c-20 -25 -44 -52 -52 -61 -41
                        -43 -70 -90 -61 -96 6 -3 48 -12 93 -20 177 -32 383 -11 623 63 430 131 847
                        506 952 856 24 79 29 312 8 379 -42 133 -92 237 -115 237 -4 0 -10 -14 -14
                        -31z"/>
                        <path className='svg-path' d="M2756 3281 c-3 -5 5 -28 19 -52 14 -24 28 -51 32 -59 3 -8 27 -49 51
                        -90 104 -172 210 -284 419 -440 l72 -54 -19 -32 c-37 -59 -33 -63 75 -85 56
                        -11 172 -7 209 7 8 3 45 46 82 95 104 140 183 198 335 249 94 32 92 20 25 148
                        -27 50 -30 52 -69 52 -108 0 -283 -78 -407 -181 -32 -27 -63 -49 -68 -49 -45
                        0 -228 156 -305 260 -47 63 -75 89 -97 90 -40 1 -203 70 -295 125 -45 27 -51
                        29 -59 16z"/>
                        <path className='svg-path' d="M4595 2088 c-125 -63 -237 -103 -349 -125 -61 -13 -65 -32 -19 -80
                        63 -65 165 -245 208 -364 30 -84 54 -164 60 -199 3 -19 9 -41 14 -49 12 -19
                        41 -6 41 18 0 50 84 212 169 326 111 149 198 228 335 301 33 17 61 36 63 40 2
                        5 -45 24 -105 43 -118 38 -150 50 -235 92 -71 36 -105 35 -182 -3z"/>
                        </g>
                    </svg>
                </>
                )}
                
                {activeSection === 'about' &&(
                    <>
                        <div className='about-div'>
                                <div className='about-img-div'>
                                    <img className='about-img' src={aboutimg} alt="Logo" />
                                </div>
                                <div className={`about-content-div`}>
                                    <h1>About Me</h1>
                                    <p className='about-me-text'>
                                        
                                    </p>
                                </div>
                        </div>
                    </>
                )}



                {activeSection === 'work' && (
                    <div className={`work-div ${transitioning ? 'animate' : ''}`}>

                        {Object.keys(projectStatus).map(projectName => {
                            const project = projectStatus[projectName];
                            const className = project.status === 'default' ? project.defaultClass
                                            : project.status === 'animating' ? 'project-leftout'
                                            : 'project-leftout';
                            return (
                                <div className={className} onClick={() => handleProjectClick(projectName)} key={projectName}>
                                    <h1 className='project-title'>{projectName}</h1>
                                </div>
                            );
                        })}

                        {selectedProject && (
                            <div className='project-selected'>
                                <h1>{selectedProject}</h1>
                                <div className='project-info'>
                                    <p className='project-info-p'>{projectStatus[selectedProject].languages}</p>
                                    <p className='project-info-p'>{projectStatus[selectedProject].content}</p>
                                </div>
                                <button onClick={handleBackClick}>Back</button>
                            </div>
                        )}

                    </div>
                )}
            </div>
            <Media />
            <FloatingChatCard />
        </div>
        </div>
    
    {transitioning && <div className="overlay"></div>}
    </>
    );
}

export default Home;

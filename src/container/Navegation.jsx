import { useState } from "react";

import '../style/navegation.css'
import '../index.css'

export default function Navegation() {
    const [openBuguer, isOpenBuguer] = useState(false);
    const [expandedOption, isExpandedOption] = useState({
        featureButton: false,
        companyButton: false
    });

    function handleBtn(button){
        if (button == 'features') {
            isExpandedOption({
                ...expandedOption,
                featureButton: !expandedOption.featureButton
            });
        } else  {
            isExpandedOption({
                ...expandedOption,
                companyButton: !expandedOption.companyButton
            });
        }
    }

    return (
        <nav>
            <div className={`container-navegation ${openBuguer ? "overlay" : null}`}>
                <div>
                    <svg className="icon-logo">
                        <use xlinkHref="./svg/icon-logo.svg#logo"></use>
                    </svg>
                </div>

                <ul className="primary-list" aria-expanded={openBuguer ? "true" : "false"}> 
                    <div className="side-left-navegation">
                        <li className="item">
                            <div className="item-side-left" onClick={() => handleBtn('features')}>
                                <a href="#">Features</a>
                                <div>
                                    <svg className="icon-arrow">
                                        <use xlinkHref="./svg/arrows.svg#icon-arrow-down"></use>
                                    </svg>
                                </div>
                            </div>

                            <ul className="menu-expanded" data-menu-features={expandedOption.featureButton ? "true" : "false"}>
                                <li>
                                    <div>
                                        <svg className="icon-expanded">
                                            <use xlinkHref="./svg/icon-todo.svg#icon-todo"></use>
                                        </svg>
                                    </div>
                                    
                                    <a href="#">Todo  List</a>
                                </li>

                                <li>
                                    <div>
                                        <svg className="icon-expanded">
                                            <use xlinkHref="./svg/icon-calendar.svg#icon-calendar"></use>
                                        </svg>
                                    </div>
                                    
                                    <a href="#">Calendar</a>
                                </li>
                                
                                <li>
                                    <div>
                                        <svg className="icon-expanded">
                                            <use xlinkHref="./svg/icon-reminders.svg#icon-reminders"></use>
                                        </svg>
                                    </div>
                                    
                                    <a href="#">Reminders</a>
                                </li>

                                <li>
                                    <div>
                                        <svg className="icon-expanded">
                                            <use xlinkHref="./svg/icon-planning.svg#icon-planning"></use>
                                        </svg>
                                    </div>
                                    
                                    <a href="#">Planning</a>
                                </li>
                            </ul>                                    
                        </li>

                        <li className="item" >
                            <div className="item-side-left" onClick={() => handleBtn('company')}>
                                <a href="#">Company</a>
                                <div>
                                    <svg className="icon-arrow">
                                        <use xlinkHref="./svg/arrows.svg#icon-arrow-down"></use>
                                    </svg>
                                </div>
                            </div>

                            <ul className="menu-expanded" data-menu-company={expandedOption.companyButton ? "true" : "false"}>
                                <li>
                                    <a href="#">History</a>
                                </li>

                                <li>
                                    <a href="#">Our team</a>
                                </li>
                                
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </li>

                        <li className="item">
                            <a href="#">Careers</a>
                        </li>

                        <li className="item">
                            <a href="#">About</a>
                        </li>
                    </div>

                    <div className="side-right-navegation">
                        <li className="item">
                            <a href="#">Login</a>
                        </li>

                        <li className="item button-style">
                            <a href="#">Register</a>
                        </li>
                    </div>
                </ul>

                <button 
                    className={openBuguer ? "icon-buguer-open" : "icon-buguer-closed"}
                    onClick={() => isOpenBuguer(old => !old)}>
                </button>
            </div>
        </nav>
    )
}
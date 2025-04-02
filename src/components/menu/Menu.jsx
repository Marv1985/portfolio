import './Menu.css';
import DarkModeButton from './DarkModeButton';
import { useRef, useState, useEffect } from 'react';
import WebVersionMenu from './WebVersionMenu';
import MobileVersionMenu from './MobileVersionMenu';
import HamburgerButton from './HamburgerButton';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SideMenu from '../projectsPage/SideMenu';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
    const menuContainer = useRef(null);
    const button = useRef(null);
    const menuRef = useRef(null);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 800px)").matches);

    // Check Url to conditionally show/hide the sidemenu for projects page
    const currentPath = location.pathname;
    const pathKey = currentPath.startsWith('/projects') || currentPath.includes('/projects');

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 800px)");

        const handleResize = () => {
            setIsDesktop(mediaQuery.matches);
            if (mediaQuery.matches) {
                setShowMobileMenu(false);
                document.body.classList.remove('no-scroll');
            }
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    // Animation function
    const { contextSafe } = useGSAP();
    const animateButton = contextSafe(() => {
        if (showMobileMenu && button.current) {
            gsap.to(button.current, { rotate: 0, gap: "2px", duration: 0.2, ease: "power1.out" });
            document.body.classList.remove('no-scroll');

            gsap.to(menuRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => setShowMobileMenu(false),
            });
        } else {
            setShowMobileMenu(true);
            document.body.classList.add('no-scroll');
        }
    });

    // Mobile menu animation
    useGSAP(() => {
        if (showMobileMenu && menuRef.current) {
            let buttonTl = gsap.timeline();
            buttonTl.fromTo(button.current, { rotate: 0, gap: "2px" }, { rotate: 45, gap: "4px", duration: 0.2, ease: "power1.out" });
            buttonTl.fromTo(menuRef.current, { opacity: 0, backgroundColor: "rgba(255, 255, 255, 0)" }, { opacity: 1, backgroundColor: "rgba(255, 255, 255, 0.5)", duration: 0.25, ease: "power2.in" }, 0);
        }
    }, [showMobileMenu]);

    return (
        <>
            <div className="menu_container">
                <div ref={menuContainer} className="max_width">
                    <DarkModeButton />
                    {isDesktop ? (
                        <WebVersionMenu menuContainer={menuContainer} />
                    ) : (
                        <HamburgerButton animateButton={animateButton} button={button} />
                    )}
                </div>
            </div>
            {showMobileMenu && <MobileVersionMenu menuRef={menuRef} animateButton={animateButton} />}
            {!isDesktop && pathKey && <SideMenu />}
        </>
    );
};

export default Menu;

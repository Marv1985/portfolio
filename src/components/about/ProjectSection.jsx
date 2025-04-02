import Right_arrow_500 from '../../assets/right_arrow_500.svg?component'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ProjectsSection = () => {

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo('.about_page_projects', {autoAlpha: 0}, {autoAlpha: 1, duration: 1, delay: 1.3, ease: "power1.out"})

    }, { })

    return  (
    <>
    <div className="about_page_projects">
        <h2>Some of my latest sites:</h2>
        <div className="project">
            <h3><a className='h3' href='https://www.naughty-parrot.com/' target='_blank'>NAUGHTY PARROT - <span>Freelance project in the works</span><Right_arrow_500 /></a></h3>
            <div className="image">
                <div className="container">
                    <img src="projectImgs/naughty-parrot.webp" alt="naughty parrot" />
                    <a href='https://www.naughty-parrot.com/' target='_blank' className="overlay"></a>
                </div>
                <Right_arrow_500 />
            </div>
        </div>
        <div className="project">
            <h3><a className='h3' href='https://bistrofranc.co.uk/' target='_blank'>BISTRO FRANC <Right_arrow_500 /></a></h3>
            <div className="image">
                <div className="container">
                    <img src="projectImgs/bistro.webp" alt="bistro" />
                    <a href='https://bistrofranc.co.uk/' target='_blank' className="overlay"></a>
                </div>
                <Right_arrow_500 />
            </div>
        </div>
        <div className="project">
            <h3><a className='h3' href='https://hotelcumberland.co.uk/' target='_blank'>HOTEL CUMBERLAND <Right_arrow_500 /></a></h3>
            <div className="image">
                <div className="container">
                    <img src="projectImgs/cumberland.webp" alt="cumberland" />
                    <a href='https://hotelcumberland.co.uk/' target='_blank' className="overlay"></a>
                </div>
                <Right_arrow_500 />
            </div>
        </div>
        <div className="project">
            <h3><a className='h3' href='https://hlg-testing.co.uk/hlg/' target='_blank'>HLG <Right_arrow_500 /></a></h3>
            <div className="image">
                <div className="container">
                    <img src="projectImgs/hlg.webp" alt="hlg" />
                    <a href='https://hlg-testing.co.uk/hlg/' target='_blank' className="overlay"></a>
                </div>
                <Right_arrow_500 />
            </div>
        </div>
    </div>
    </>
    )
}

export default ProjectsSection
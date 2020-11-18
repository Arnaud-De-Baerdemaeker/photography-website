import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "./../shared/header";
import MyName from "./../shared/name";
import Footer from "./../shared/footer";
import Divider from "./../shared/divider";
import MyPhoto from "./../../images/moi.png";

class About extends Component
{
    render()
    {
        return(
            <>
                <Header />
                <div className={"about"}>
                    <MyName />
                    <Divider
                        dividerContainer={this.props.dividerContainer[1]}
                        dividerImage={this.props.dividerImage[1]}
                    />
                    <div className={"about-me"}>
                        <section className={"about-me__who-i-am"}>
                            <h2 className={"about-me__level-2-title"}>{"Qui suis-je ?"}</h2>
                            <p className={"about-me__paragraph"}>{"Bonjour ! Je m'appelle Arnaud."}</p>
                            <p className={"about-me__paragraph"}>{"Vivant à Liège, en Belgique, je suis développeur web et accessoirement je pratique la photographie comme loisir."}</p>
                            <p className={"about-me__last-paragraph"}>{"Au fil de mon apprentissage des technologies de développement web, s'est imposée l'idée de fusionner ces deux domaines dans le but, d'un côté, de mettre en application ce que j'ai appris, et de l'autre, de pouvoir exposer les fruits de ce loisir."}</p>
                        </section>
                        <Divider
                            dividerContainer={this.props.dividerContainer[0]}
                            dividerImage={this.props.dividerImage[0]}
                        />
                        <section className={"about-me__why-webdesign"}>
                            <h2 className={"about-me__level-2-title"}>{"Pourquoi le développement web ?"}</h2>
                            <p className={"about-me__paragraph"}>{"J'ai découvert ce domaine un peu par hasard et j'ai été rapidement conquis."}</p>
                            <p className={"about-me__paragraph"}>{"Aujourd'hui, bien que touche-à-tout, j'affectionne particulièrement le fait de construire des designs, rédiger des lignes de code, admirer leur logique, et les voir prendre vie dans le navigateur."}</p>
                            <p className={"about-me__last-paragraph"}>{"Réfléchir aux couleurs à utiliser, à la disposition des différents éléments, à l'expérience utilisateur, sont autant de problématiques que j'apprécie de résoudre soigneusement."}</p>
                        </section>
                        <Divider
                            dividerContainer={this.props.dividerContainer[1]}
                            dividerImage={this.props.dividerImage[1]}
                        />
                        <section className={"about-me__why-photography"}>
                            <h2 className={"about-me__level-2-title"}>{"Pourquoi la photographie ?"}</h2>
                            <p className={"about-me__paragraph"}>{"Immortaliser l'instant. Montrer la beauté dans des choses ordinaires. Voilà les choses qui me plaisent dans la photographie."}</p>
                            <p className={"about-me__last-paragraph"}>{"La nature sous toutes ses formes et les architectures sont les types de sujets qui m'inspirent le plus."}</p>
                        </section>
                        <Divider
                            dividerContainer={this.props.dividerContainer[0]}
                            dividerImage={this.props.dividerImage[0]}
                        />
                        <section className={"about-me__what-else"}>
                            <h2 className={"about-me__level-2-title"}>{"Et en dehors de ça ?"}</h2>
                            <p className={"about-me__last-paragraph"}>{"Quand je ne code et ne photographie pas, je prend plaisir à faire du vélo, jouer aux jeux vidéo, lire ou tout simplement me balader entre-autres."}</p>
                        </section>
                        <Divider
                            dividerContainer={this.props.dividerContainer[1]}
                            dividerImage={this.props.dividerImage[1]}
                        />
                        <h2 className={"about-me__discover"}>{"Mettez-vous à l'aise et découvrez..."}</h2>
                        <Divider
                            dividerContainer={this.props.dividerContainer[0]}
                            dividerImage={this.props.dividerImage[0]}
                        />
                        <div className={"about-me__my-photo"}>
                            <figure className={"about-me__image-container"}>
                                <img
                                    src={MyPhoto}
                                    alt={"Photo de moi"}
                                    title={"Oui, c'est moi !"}
                                    loading={"lazy"}
                                    className={"about-me__image"}
                                />
                                <figcaption className={"about-me__image-caption"}>{"C'est moi !"}</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default hot(About);
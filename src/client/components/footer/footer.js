import React from "react";
import {hot} from "react-hot-loader/root";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <div>
                        <img src="" alt="E-mail" title="Contactez-moi" loading="lazy" />
                    </div>
                    <div>
                        <img src="" alt="LinkedIn" title="Mon profil LinkedIn" loading="lazy" />
                    </div>
                    <div>
                        <img src="" alt="GitHub" title="Mon travail sur GitHub" loading="lazy" />
                    </div>
                </div>
                <div>
                    <p>{""}</p>
                </div>
            </footer>
        );
    }
}

export default hot(Footer);
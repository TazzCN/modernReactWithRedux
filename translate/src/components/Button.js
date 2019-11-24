import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {

    renderSubmit = (language) => language === 'english' ? 'Submit' : 'Voorleggen';

    renderButton = (colour) => (
        <button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
                {({ language }) => this.renderSubmit(language) }
            </LanguageContext.Consumer>
        </button>
    );

    render() {
        return(
            <div>
                <ColourContext.Consumer>
                    {(colour) => this.renderButton(colour)}
                </ColourContext.Consumer>
            </div>
        );
    }
}

export default Button;
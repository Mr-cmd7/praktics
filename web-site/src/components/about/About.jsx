import Button from "../common/Button.jsx";
import './About.css'
import aii from '../../assets/images/aboutItemImage.png'

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="common-title">
                    <p>О компании</p>
                </div>
                <div className="about-description">
                    <p>Aliquam augue enim phasellus egestas nisl urna senectus ultricies. Vitae consequat odio faucibus eget suspendisse ultricies. Pharetra diam viverra ut adipiscing aliquam. Massa nulla lobortis nulla tellus ut ut elementum. Viverra fermentum adipiscing cras purus a. Vitae pretium lacus faucibus rhoncus nisi neque. Sagittis odio egestas suspendisse sed imperdiet urna.</p>
                </div>
                <div className="about-tabs">
                    <Button label="Команда"/>
                    <Button label="Наши компетенции"/>
                    <Button label="Профессионалы"/>
                    <Button label="Взаимодействие с органами"/>
                </div>
                <div className="about-item">
                    <div className="about-item-description">
                        <p>Fringilla dignissim lectus velit amet nisi erat sit. Nisi facilisi pretium pharetra amet a mauris amet amet ut. Odio tellus et in imperdiet pellentesque id. Scelerisque et a proin nisi. Ut interdum lobortis porta enim viverra eleifend sodales mollis. Gravida in senectus lacinia eget nec. Mauris eu sed et quisque dignissim. Odio sed eget id vitae sollicitudin sodales augue egestas. Sapien elementum nisi est ornare aliquam viverra nibh amet donec.</p>
                    </div>
                    <div className="about-item-image">
                        <img src={aii} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
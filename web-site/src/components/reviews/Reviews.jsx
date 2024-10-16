import './Reviews.css';
import { reviewItems } from "../../assets/data.js";

export default function Reviews() {
    return (
        <div className="reviews">
            <div className="container">
                <div className="common-title">
                    <p>Отзывы о нашей работе</p>
                </div>
                <div className="slider-container">
                    <div className="slider-items">
                            {reviewItems.map((item, index) => (
                                <div key={index} className="slider-item">
                                    <img className="i-logo" src={item.logo} alt=""/>
                                    <p className="i-title">{item.title}</p>
                                    <p className="i-text">{item.text}</p>
                                    <p className="i-author">{item.author}</p>
                                    <p className="i-position">{item.position}</p>
                                </div>
                            ))}
                    </div>
                    <div className="pagination">
                        <button>&lt;</button>
                        <span>1  /  7</span>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

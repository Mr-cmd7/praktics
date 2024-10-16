import why_graph from '../../assets/images/why_graph.png'
import './Why.css'
import {whyItem} from '../../assets/data.js'

export default function Why(){
    return (
        <section className="why">
            <div className="container">
                <div className="common-title">
                    <p>Почему мы?</p>
                </div>
                <div className="why-adventure">
                    <div className="why-adventure-items">
                        {whyItem.map(item => (
                            <div className="adventure-item">
                                <img src={item.icon} alt={item.text}/>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="why-adventure-right">
                        <div className="adventure-text">
                            <p>Non diam laoreet faucibus amet ut lacus sed convallis viverra. At purus mattis in consectetur vel.</p>
                        </div>
                        <div className="adventure-graph">
                            <img src={why_graph} alt="graph"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
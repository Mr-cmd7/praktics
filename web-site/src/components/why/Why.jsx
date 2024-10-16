import icon_adv from '../../assets/images/icon-adv.png'
import why_graph from '../../assets/images/why_graph.png'
import './Why.css'

export default function Why(){
    const whyItem=[
        {icon:icon_adv,text:'Достижение поставленных клиентом целей'},
        {icon:icon_adv,text:'Нацелены на долгосрочное сотрудничество'},
        {icon:icon_adv,text:'Лояльная ценовая политика'},
        {icon:icon_adv,text:'Всегда готовы идти навстречу клиенту'},
        {icon:icon_adv,text:'Высокая квалификация и практический опыт'},
    ]

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
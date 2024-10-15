import serviceItem1 from '../../assets/images/service-item-1.png';
import serviceItem2 from '../../assets/images/service-item-2.png';
import serviceItem3 from '../../assets/images/service-item-3.png';
import './Home.css'

export default function Home() {
    const menuItems = [
        {imageUrl: serviceItem1,title:'Сопровождение бизнеса',description:'Aliquet ac leo arcu erat id sit rhoncus lectus. Donec pretium cursus pretium scelerisque quis posuere sed aliquet. Nibh convallis mi sodales pretium adipiscing ac. Turpis vitae augue.'},
        {imageUrl: serviceItem2,title: 'Дистанционное обучение', description: 'Enim urna ac nunc consectetur sed donec. Facilisis bibendum suspendisse at pretium amet. Egestas a ultrices odio dignissim varius. Ipsum egestas nisl.',},
        {imageUrl: serviceItem3,title: 'Лицензирование компаний', description: 'Urna arcu suspendisse nibh volutpat. Felis diam odio vitae sit. Eget purus sed tincidunt tortor at. Viverra adipiscing vitae iaculis sapien amet sit morbi tincidunt adipiscing. Sagittis eget.',}
    ];
    return (
        <main className="main">
            <div className="container">
                <div className="main-title">
                    <p>Консалтинговая компания Эксперт-Рос инвест</p>
                </div>
                <div className="service-menu-list">
                    {menuItems.map((item, index) => (
                        <div className="service-menu-item" key={index}>
                            <div className="service-item-title">
                                {item.imageUrl && <img src={item.imageUrl} alt={item.title}/>}
                                <p>{item.title}</p>
                            </div>
                            <div className="service-item-description">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
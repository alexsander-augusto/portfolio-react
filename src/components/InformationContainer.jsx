import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const informationContainer = [
    {
        id: 'phone-icon',
        icon: <AiFillPhone />,
        title: 'Telefone',
        description: '(87) 98866 - 3970'
    },
    {
        id: 'email-icon',
        icon: <AiOutlineMail />,
        title: 'E-mail',
        description: 'alex.morais.pass@gmail.com'
    },
    {
        id: 'pin-icon',
        icon: <AiFillEnvironment />,
        title: 'Localização',
        description: 'Petrolina - PE'
    }
]

const InformationContainer = () => {
  return (
    <section id="information">
        {informationContainer.map((card) => (
            <div className="info-card" key={card.id}>
                    <div className="information-icon" id={card.id}>{card.icon}</div>
                    <div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
            </div>
        ))}        
    </section>    
  )
}

export default InformationContainer
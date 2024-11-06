import './styles/About.css';

function About() {
    return (
        <div className='background2'>
            <img className='logo1' src="luna - logo.png" alt="Luna Logo" />
            <div className='textArea1'>
                Somos um time de mulheres dedicadas a criar soluções que melhoram
                a experiência de treinamento.<br></br> <br></br>Compreendemos a importância de alinhar exercícios
                às fases do ciclo menstrual, promovendo saúde e bem-estar. <br></br><br></br>
                Nosso objetivo é ajudar você a se conectar melhor com o seu corpo,
                evitando lesões e maximizando seus resultados.
                Junte-se a nós nessa jornada de autoconhecimento e empoderamento!

                <div className='buttonsArea'>
                    <button>Sobre nós</button>
                    <button className='buttonBorder'>Registrar</button>
                </div>
            </div>
        </div>
    );
}

export default About;

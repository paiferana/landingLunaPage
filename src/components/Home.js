import './styles/Home.css';

function Home() {
    return (
        <div className='background1'>
            <img className='woman' src="woman.png" alt="Luna Logo" />
            <div className='textArea'>
                Treine de forma inteligente e adequada ao seu ciclo menstrual.<br></br><br></br>

                O Luna é personalizado para ajustar seus exercícios às fases do seu ciclo menstrual. <br></br><br></br>

                Vamos melhorar seu desempenho, evitar lesões e alcançar melhores resultados,
                tudo enquanto se conecta mais com o seu corpo!

                <div className='buttonsArea'>
                    <button>Registre-se agora</button>
                    <button className='buttonBorder'>Sobre nós</button>
                </div>
            </div>
            <svg className='onda' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c0ddd8" fill-opacity="1" d="M0,192L60,160C120,128,240,64,360,74.7C480,85,600,171,720,170.7C840,171,960,85,1080,53.3C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
    );
}

export default Home;

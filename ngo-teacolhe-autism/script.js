const articles = {
    'quetea': {
        title: "O que é o TEA?",
        content: `
            <p>O Transtorno do Espectro Autista (TEA) é uma condição de neurodesenvolvimento caracterizada por desafios na comunicação e interação social, além de padrões de comportamentos restritos e repetitivos. O termo "espectro" reflete a ampla variação nos desafios e pontos fortes de cada pessoa com autismo.</p>
            <h4>Principais Características:</h4>
            <ul>
                <li>Dificuldade em manter contato visual ou interpretar expressões faciais.</li>
                <li>Preferência por rotinas estruturadas e resistência a mudanças.</li>
                <li>Interesses intensos em tópicos específicos (hiperfoco).</li>
                <li>Sensibilidade sensorial (luzes, sons, texturas).</li>
            </ul>
            <p>O autismo não é uma doença, mas sim uma forma diferente de perceber e interagir com o mundo.</p>`
    },
    'sintomas': {
        title: "Sintomas e Intervenções",
        content: `
            <p>Os sinais do TEA geralmente surgem na primeira infância, por volta dos 12 a 24 meses. A intervenção precoce pode fazer uma diferença enorme no desenvolvimento.</p>
            <h4>Abordagens Comuns:</h4>
            <ul>
                <li><strong>ABA (Análise do Comportamento Aplicada):</strong> Focada em incentivar comportamentos positivos.</li>
                <li><strong>Fonoaudiologia:</strong> Para melhorar a comunicação verbal e não-verbal.</li>
                <li><strong>Terapia Ocupacional:</strong> Ajuda na autonomia das atividades diárias e questões sensoriais.</li>
            </ul>`
    },
    'tipos': {
        title: "Níveis de Suporte (DSM-5)",
        content: `
            <p>Antigamente usava-se termos como "Asperger", mas hoje o diagnóstico é único (TEA), classificado por níveis de suporte necessário:</p>
            <ul>
                <li><strong>Nível 1 (Suporte Leve):</strong> Dificuldade em iniciar interações sociais, mas com comunicação verbal preservada. Pode ter problemas de organização.</li>
                <li><strong>Nível 2 (Suporte Substancial):</strong> Déficits marcados na comunicação verbal e não verbal; inflexibilidade de comportamento é óbvia para observadores.</li>
                <li><strong>Nível 3 (Suporte Muito Substancial):</strong> Déficits graves de comunicação, interações sociais muito limitadas e grande dificuldade em lidar com mudanças.</li>
            </ul>`
    },
    'empatia': {
        title: "Empatia e Inclusão Escolar",
        content: `
            <p>Inclusão vai além de matricular o aluno. É adaptar o ambiente e educar os colegas. A empatia se constrói com informação.</p>
            <h4>Dicas para Escolas e Comunidade:</h4>
            <ul>
                <li>Respeite o tempo de resposta da pessoa autista.</li>
                <li>Evite ambientes com excesso de estímulos sonoros quando possível.</li>
                <li>Use comunicação clara e direta, evitando metáforas complexas.</li>
            </ul>`
    },
    'autodefesa': {
        title: "Autodefesa (Self-Advocacy)",
        content: `
            <p>Autodefesa é a habilidade de falar por si mesmo, expressar necessidades e conhecer seus direitos. É fundamental para a vida adulta.</p>
            <p>Incentive a pessoa autista a dizer "não", a explicar como se sente em ambientes barulhentos e a pedir as adaptações previstas em lei (como a Lei Berenice Piana no Brasil).</p>`
    },
    'pais': {
        title: "Acolhimento para Pais",
        content: `
            <p>Receber o diagnóstico pode ser um momento de incertezas. Lembre-se: seu filho continua sendo a mesma criança que você ama.</p>
            <h4>Passos Importantes:</h4>
            <ul>
                <li>Permita-se viver o luto da idealização, mas não estacione nele.</li>
                <li>Busque grupos de apoio de pais (você não está sozinho).</li>
                <li>Cuide da sua saúde mental para poder cuidar bem do seu filho.</li>
                <li>Celebre cada pequena conquista; no TEA, pequenos passos são grandes vitórias.</li>
            </ul>`
    },
    'profissionais': {
        title: "Equipe Multidisciplinar",
        content: `
            <p>O tratamento do TEA é singular para cada indivíduo, mas geralmente envolve uma equipe:</p>
            <ul>
                <li><strong>Neuropediatra/Psiquiatra:</strong> Para acompanhamento médico e comorbidades (ansiedade, TDAH).</li>
                <li><strong>Psicólogo:</strong> Trabalha questões comportamentais e emocionais.</li>
                <li><strong>Psicopedagogo:</strong> Auxilia nas dificuldades de aprendizagem escolar.</li>
            </ul>`
    },
    'materiais': {
        title: "Materiais de Apoio",
        content: `
            <p>O uso de suportes visuais é muito eficaz no TEA.</p>
            <ul>
                <li><strong>Rotinas Visuais:</strong> Quadros com imagens do que vai acontecer no dia reduzem a ansiedade.</li>
                <li><strong>Histórias Sociais:</strong> Pequenos contos que explicam como agir em situações sociais específicas.</li>
                <li><strong>PECS:</strong> Sistema de comunicação por troca de figuras para não-verbais.</li>
            </ul>`
    },
    'entidades': {
        title: "Rede de Apoio e ONGs",
        content: `
            <p>Existem muitas instituições sérias no Brasil. Procure a APAE da sua cidade ou grupos locais como:</p>
            <ul>
                <li><strong>AMA (Associação de Amigos do Autista):</strong> Pioneira no Brasil.</li>
                <li><strong>Revista Autismo:</strong> Ótima fonte de informação jornalística.</li>
                <li><strong>Canal Autismo:</strong> Conteúdo rico e atualizado.</li>
            </ul>`
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('article-modal');
    const modalContainer = document.getElementById('modal-container');
    const cardLinks = document.querySelectorAll('.card-link');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const btnTop = document.querySelector('.btn-top');

    const openModal = (key, theme) => {
        const article = articles[key];
        if (!article) return;

        modalContainer.setAttribute('data-theme', theme || 'azul');
        modalContainer.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title">${article.title}</h2>
                <button class="btn-close" id="close-modal" aria-label="Fechar Modal">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
            <div class="modal-body">
                ${article.content}
            </div>
        `;

        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; 
        
        document.getElementById('close-modal').addEventListener('click', closeModal);
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; 
    };

    cardLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const key = link.getAttribute('data-article');
            const theme = link.getAttribute('data-theme'); 
            openModal(key, theme);
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });

    menuToggle.addEventListener('click', () => {
        navMobile.classList.toggle('active');
        const icon = navMobile.classList.contains('active') ? 'close-outline' : 'menu-outline';
        menuToggle.innerHTML = `<ion-icon name="${icon}"></ion-icon>`;
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
            menuToggle.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTop.classList.add('show');
        } else {
            btnTop.classList.remove('show');
        }
    });
});
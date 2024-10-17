import React from "react";

function Footer() {
    const quotes = [
        "J’ai décidé d’être heureux parce que c’est bon pour la santé. Voltaire",
        "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de vous. Dalaï Lama",
        "Le bonheur, c’est de continuer à désirer ce que l’on possède. Saint Augustin",
        "Il n'est qu'un bonheur au monde, C'est l'amour; tout le reste n'est rien. George Sand",
        "Le bonheur n'est pas toujours dans un ciel éternellement bleu, mais dans les choses les plus simples de la vie. Confucius",
        "N’attendez pas d’être heureux pour sourire. Souriez plutôt afin d’être heureux. Edward Louis Kramer",
        "Le bonheur n'est d'avoir tout ce que l'on désire, mais d'apprécier ce que l'on a. Paulo Coelho",
        "La vie, ce n’est pas d’attendre que les orages passent, c’est d’apprendre à danser sous la pluie. Sénèque",
        "Le bonheur ne vient pas à ceux qui l'attendent assis. Baden-Powell",
        "Quand on ose, on se trompe souvent. Quand on n’ose pas, on se trompe toujours. Romain Rolland",
        "Les gagnants cherchent des moyens, les perdants des excuses. Franklin Roosevelt",
        "On a deux vies. La deuxième commence quand on réalise qu’on en a qu’une. Confucius",
        "La meilleure partie de ta vie se compose de tes amitiés. Abraham Lincoln",
        "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. Albert Einstein",
        "La vie est défi à relever, un bonheur à mériter, une aventure à tenter. Mère Teresa",
        "Fais de ta vie un rêve et d’un rêve une réalité. Antoine de Saint-Exupéry",
        "Le cœur connaît la bonne réponse. Deepak Chopra",
        "Au milieu de toute difficulté se trouve cachée une opportunité. Albert Einstein",
        "Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera. Bouddha",
        "Les grands accomplissements sont réussis non par la force, mais par la persévérance. Samuel Johnson",
        "N’aie pas peur d’avancer lentement. Aie peur de rester immobile. Proverbe chinois",
        "Ce qui ne tue pas renforce. Friedrich Nietzsche",
        "Quoique tu rêves d'entreprendre, commence-le. L'audace a du génie, du pouvoir, de la magie. Johann Wolfgang von Goethe",
        "J’ai appris que le courage n’est pas l’absence de peur, mais la capacité de la vaincre. Nelson Mandela",
        "Aimer, ce n’est point nous regarder l’un l’autre, mais regarder ensemble dans la même direction. Antoine de Saint-Exupéry",
        "Aimer, c'est donner. Plus grand est le don, plus grand est l'amour. Fernando Pessõa",
        "On ne voit bien qu’avec le coeur. L’essentiel est invisible pour les yeux. Antoine de Saint-Exupéry"
    ];

    // Fonction pour générer un nombre aléatoire basé sur la date du jour
    function getRandomIndex(seed, max) {
        let random = Math.sin(seed) * 10000; // Génère un nombre pseudo-aléatoire basé sur la graine
        return Math.floor((random - Math.floor(random)) * max);
    }

    const today = new Date();
    const seed = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate(); // Utilise la date comme graine
    const randomIndex = getRandomIndex(seed, quotes.length);

    const quoteOfTheDay = quotes[randomIndex];

    return (
        <footer className="w-full h-fit text-center py-4 mt-4 pb-10 bg-black text-white">
            <p className="italic">&quot;{quoteOfTheDay}&quot;</p>
        </footer>
    );
}

export default Footer;

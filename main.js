window.onload = () => {

    const btnCharClassSubmit = document.getElementById('charClassSubmit');
    const btnCharRaceBack = document.getElementById('charRaceBack');

    const changeForm = (toHide, toReveal) => {
        let hiding = document.getElementById(toHide);
        let revealing = document.getElementById(toReveal);

        hiding.classList.remove('visible');
        hiding.classList.add('hidden');
        revealing.classList.remove('hidden');
        revealing.classList.add('visible');
    }

    const fetchFromDndAPI = (category,num) => {
        fetch(`http://www.dnd5eapi.co/api/${category}/${num}/`)
            .then(res => {
                return res.json();
            })
            .then(spell => {
                console.log(spell.name);
            })
        }

        let acidArrow = fetchFromDndAPI('spells','1');
        console.log((acidArrow.name));

    btnCharClassSubmit.onclick = () => {
        changeForm('charClassForm', 'charRaceForm');
    }

    btnCharRaceBack.onclick = () => {
        changeForm('charRaceForm', 'charClassForm');
    }
    
}
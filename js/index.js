 function setActiveProfile(name, img) {
        localStorage.setItem('activeProfile', JSON.stringify({ name, img }));
    }
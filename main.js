const shareAuthor = document.querySelector('.share--author');
const shareSocials = document.querySelector('.share--socials');

const authorEl = document.querySelector('.author');
const socialsEl = document.querySelector('.socials');

const handleShareAuthor = () => {
    authorEl.style = 'display:none';
    socialsEl.style = 'display:grid';
};

const handleShareSocials = () => {
    socialsEl.style = 'display:none';
    authorEl.style = 'display:grid';
}

shareAuthor.addEventListener('pointerdown', handleShareAuthor);
shareSocials.addEventListener('pointerdown', handleShareSocials);
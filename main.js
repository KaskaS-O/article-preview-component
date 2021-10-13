const shareAuthor = document.querySelector('.share--author');
const shareSocials = document.querySelector('.share--socials');

const authorEl = document.querySelector('.author');
const socialsEl = document.querySelector('.socials');

const squareEl = document.querySelector('.socials__square');

const handleShareAuthor = () => {
    authorEl.style = 'display:none';
    socialsEl.style = 'display:grid';
    shareSocials.style = 'display:block';
    squareEl.style = 'display:block';
};

const handleShareSocials = () => {
    socialsEl.style = 'display:none';
    authorEl.style = 'display:grid';
    shareSocials.style = 'display:none';
    squareEl.style = 'display:none';
}

shareAuthor.addEventListener('pointerdown', handleShareAuthor);
shareSocials.addEventListener('pointerdown', handleShareSocials);
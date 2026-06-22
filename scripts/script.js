function init() {
    renderHeader();
    renderFooter();
}

function renderHeader() {
    document.getElementById('headerContainer').innerHTML = getHeader();
}

function renderFooter() {
    document.getElementById('footerContainer').innerHTML = getFooter();
}
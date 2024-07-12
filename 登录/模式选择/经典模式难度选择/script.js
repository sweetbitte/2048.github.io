document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        alert(`您选择了 ${item.innerText}`);
    });
});
document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const selectedVersion = item.innerText;
        var baseUrl = '/';

        switch (selectedVersion) {
            case '4×4版本':
                window.location.href = './2048经典版最终版/index.html';
                break;
            case '5×5版本':
                window.location.href = './5乘5最终版/index.html';
                break;
            case '6×6版本':
                window.location.href = './666最终版/index.html';
                break;
            case '7×7版本':
                window.location.href =  './7乘7最终版/index.html';
                break;
            default:
                alert('未知版本');
        }
    });
});
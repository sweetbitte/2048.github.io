
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      const username = localStorage.getItem('username');
      document.getElementById('username').innerText = username;
    } else {
      alert('您尚未登录，请登录后访问此页面。');
    }
  });

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
  
        switch (selectedVersion) {  
            case '经典版':  
                window.location.href = './经典模式难度选择/难度选择.html';  
                break;  
            case '朝代版':  
                window.location.href = './2048朝代版2/2048朝代.html';  
                break;  
            case '后宫版':  
                window.location.href = './2048后宫版2/2048后宫.html';  
                break;  
            case '王者版':  
                window.location.href = './2048王者版2/2048王者版.html';  
                break;  
            default:  
                alert('未知版本');  
        }  
    });  
});
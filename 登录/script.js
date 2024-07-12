
function attemptLogin() {    
  const username = document.getElementById('username').value;    
  
  const loginStatus = document.getElementById('login-status');    
    
  // 清除之前的登录状态消息    
  loginStatus.textContent = '';    
    
  // 检查用户名和密码是否已填写    
  if (username.trim() === '') {    
    loginStatus.textContent = '请先输入用户名和密码！';    
    loginStatus.style.color = 'red';    
    return;    
  }    
    
  // 登录成功  
  localStorage.setItem('isLoggedIn', 'true');    
  localStorage.setItem('username', username);    
    
  // 登录成功后跳转到新页面
  window.location.href = './模式选择/关卡选择.html'; 
}
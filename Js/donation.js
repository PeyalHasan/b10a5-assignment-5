
// Show Home page and Blog page
document.addEventListener('DOMContentLoaded',function(){
    const homeBtn =document.getElementById('home');
    if(homeBtn){
        homeBtn.addEventListener('click',function(){
            console.log('Hi')
            window.location.href='../Blog.html'
        });
    }
    
    
    const blogBtn =document.getElementById('blog')
    if(blogBtn){
        blogBtn.    addEventListener('click', function(){
            console.log('Hi')
            window.location.href='../index.html';
        });
    }

})

// Show Donation and History

function showPage(id){
    const hideDonation = document.getElementById('donation').classList.add('hidden');
    const hideHistory = document.getElementById('history').classList.add('hidden');

    const showPage = document.getElementById(id).classList.remove('hidden');

}
function changeStyle(id){
    const donation = document.getElementById('donationBtn').classList.remove('bg-lime-300');
    const history = document.getElementById('historyBtn').classList.remove('bg-lime-300');
    const style = document.getElementById(id).classList.add('bg-lime-300');

}
// History
document.getElementById('donationBtn').addEventListener('click',function(){
    showPage('donation');
    changeStyle('donationBtn')
})
// Donation
document.getElementById('historyBtn').addEventListener('click',function(){
    showPage('history');
    changeStyle('historyBtn')
})


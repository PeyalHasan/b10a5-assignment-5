
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

// Collect Donation from input 

function DonateNow(inputId, totalId, walletId) {
    const inputValue = parseFloat(document.getElementById(inputId).value) || 0;
    const walletElement = document.getElementById(walletId);
    const totalElement = document.getElementById(totalId);

    const walletAmount = parseFloat(walletElement.innerText);
    const totalDonated = parseFloat(totalElement.innerText);

    if (inputValue <= 0) {
        alert('Invalid Donation Amount');
        return;
    }

    if (walletAmount < inputValue) {
        alert('You do not have enough money');
        return;
    }

    // Update values
    walletElement.innerText = (walletAmount - inputValue);
    totalElement.innerText = (totalDonated + inputValue);

    alert('Donation Successful! Thank you for your generosity.');
    showPopUp();
    new Date()
    
}
    //  Popup
    function showPopUp(){
       const popUp = document.getElementById('popUp')
        popUp.classList.remove('hidden');
        document.getElementById('close').addEventListener('click',function(){
            popUp.classList.add('hidden')
        })
        

    }
    // Card Data
    document.getElementById('nFloodDonate').addEventListener('click', function(event){
        event.preventDefault();
        DonateNow('fdn', 'tN', 'wallet');
        addHistory('titleN', 'fdn');

    });

    document.getElementById('quota').addEventListener('click',function(event){
        event.preventDefault();
        DonateNow('qmb','qdb','wallet' );
        addHistory('titleQ', 'qmb');
    });
    document.getElementById('feni').addEventListener('click',function(event){
        event.preventDefault();
        DonateNow('fdf','ffd','wallet' );
        addHistory('titleF', 'fdf')
    });
    // Add on History 

    function addHistory(name, amount){
        const donateFor = document.getElementById(name).innerText;
        const inputValue = parseFloat(document.getElementById(amount).value) || 0;
        const div = document.createElement('div');
        const date = new Date()
        div.innerHTML =`
        <div class="p-4 container mx-auto border-2 rounded-2xl my-2 bg-slate-300">
          <h4 class="text-xl font-bold py-2">${inputValue}
           ${donateFor}</h4>
          <p class="text-xl font-bold">Date:${date}</p>
        </div>
        `;
        document.getElementById('history').appendChild(div);

    }

})


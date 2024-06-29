// Dummy data for YouTube channel stats
const channelStats = {
    channel1: {
        subscribers: 1000,
        views: 5000,
        videos: 50
    },
    channel2: {
        subscribers: 500,
        views: 2000,
        videos: 20
    }
};

$(document).ready(function() {
    // Login Form Submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        
        // Simulating login validation
        if (username === 'user' && password === 'password') {
            // Display Stats Page
            $('#login').addClass('d-none');
            $('#stats').removeClass('d-none');
            
            // Populate Stats
            let statsHtml = '';
            for (const channel in channelStats) {
                statsHtml += `<div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${channel}</h5>
                                    <p class="card-text">Subscribers: ${channelStats[channel].subscribers}</p>
                                    <p class="card-text">Views: ${channelStats[channel].views}</p>
                                    <p class="card-text">Videos: ${channelStats[channel].videos}</p>
                                </div>
                            </div>`;
            }
            $('#statsContent').html(statsHtml);
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
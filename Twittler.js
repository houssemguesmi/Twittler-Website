var users=[
    {first:'guesmi',last:'houssem',username:'houssem',dateofbirth:'14/08/2000',email:'houssemguesmi14@gmail.com',password:'123456789',tweets:[
        {tweet:'Hello Everyone #morning', created_at:randomDate(new Date(2012, 0, 1), new Date())},{tweet:'Good Morning Guys', created_at:randomDate(new Date(2012, 0, 1), new Date())}]},
    {first:'amir',last:'ben youssef',username:'amirbenyoussef',dateofbirth:'12/01/1993',email:'amirbenyoussef@gmail.com',password:'amiramir',tweets:[
        {tweet:'Hey guys #morning', created_at:randomDate(new Date(2012, 0, 1), new Date())},{tweet:'i think i need to sleep', created_at:randomDate(new Date(2012, 0, 1), new Date())}]},
    {first:'ali',last:'essoudani',username:'aliessoudani',dateofbirth:'10/05/1991',email:'aliessoudani@gmail.com',password:'aliessoudani',tweets:[
        {tweet:'Hey guys #morning', created_at:randomDate(new Date(2012, 0, 1), new Date())},{tweet:'i think i need to sleep', created_at:randomDate(new Date(2012, 0, 1), new Date())}]}
]
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }



$(document).ready(function(){
    $('#main').animate({top:'100px',opacity:'1'},1000)
    $('#log').hide()
    $('#create').hide()
    $('#twittler').hide()

    $('#logging').click(function() {
        $('#main').animate({top:'100px',opacity:'0'},1000)
        $('#main').hide()
        $('#create').hide()
        $('#twittler').hide()
        $('#log').show()
        $('#log').animate({top:'100px',opacity:'1'},1000)  
    })
    $('#creation').click(function() {
        $('#main').animate({top:'100px',opacity:'0'},1000)
        $('#main').hide()
        $('#log').hide()
        $('#twittler').hide()
        $('#create').show()
        $('#create').animate({top:'100px',opacity:'1'},1000)
    })
    $('#homefromlog').click(function() {
        $('#log').animate({top:'100px',opacity:'0'},1000)
        $('#log').hide()
        $('#create').hide()
        $('#twittler').hide()
        $('#main').show()
        $('#main').animate({top:'100px',opacity:'1'},1000)    
    })
    $('#homefromcreate').click(function(){
        $('#create').animate({top:'100px',opacity:'0'},1000)
        $('#create').hide()
        $('#log').hide()
        $('#twittler').hide()
        $('#main').show()
        $('#main').animate({top:'100px',opacity:'1'},1000) 
    })
    $('#loginaccount').click(function() {
        var username=$('#username').val()
        var password=$('#password').val()
        var nb=0;
        if((username !== '')&&(password !== '')){
            for(var i=0; i<users.length; i++){
                if((username === users[i].username) && (password === users[i].password)){
                    $('#log').animate({top:'100px',opacity:'0'},1000)
                    $('#main').hide()
                    $('#log').hide()
                    $('#create').hide()
                    $('#twittler').show()
                    $('#username').val('')
                    $('#password').val('')
                    $('#twittler').animate({top:'100px',opacity:'1'},1000)
                    $('#usinguser').text('@'+username)
                    $('#userTweets').text('')
                    break; 
                }else if((username !== users[i].username) || (password !== users[i].password)){
                    nb++
                }
            }
            if(nb===users.length){
                alert('Invalid username or password')
                $('#username').val('')
                $('#password').val('')
            }
        }
    })
    $('#createButton').click(function() {
        var first=$('#first').val()
        var last=$('#last').val()
        var username=$('#user').val()
        var dateofbirth=$('#dateofbirth').val()
        var email=$('#email').val()
        var password=$('#pass1').val()
        if(first!=='' && last!=='' && username!=='' && dateofbirth!=='' && email!=='' && password!==''){
            if($('#pass1').val()===$('#pass2').val()){
                var password=$('#pass1').val()
            }else{
                $('#error').text('Check that your password matches').append('<br>')
            }
            var tweets=[];
            var userr={first:first, last:last, username:username, dateofbirth:dateofbirth, email:email, password:password, tweets:tweets}
            var nb=0;
            
                if(users.length===1){
                    if(users[0].username === username){
                        $('#error').text('').append('Username already exists').append('<br>');
                    }else if(users[0].username!==username && $('#pass1').val()===$('#pass2').val()){
                            users.push(userr)
                            $('#error').text('')
                            alert('You have successfully signed up!')
                            $('#create').animate({top:'100px',opacity:'0'},1000)
                            $('#create').hide()
                            $('#log').hide()
                            $('#main').hide()
                            $('#twittler').show()
                            $('#twittler').animate({top:'100px',opacity:'1'},1000)
                            $('#usinguser').text('@'+username)
                            $('#userTweets').text('')
                    }
                }else if(users.length !== 1) {
                    for(var i=0; i<users.length; i++){
                        if(users[i].username === username){
                            $('#error').text('').append('Username already exists').append('<br>')
                            break;
                        }else if(users[i].username!==username && $('#pass1').val()===$('#pass2').val()){
                            nb++;
                            if(nb===users.length){
                                users.push(userr)
                                $('#error').text('')
                                alert('You have successfully signed up!')
                                $('#create').animate({top:'100px',opacity:'0'},1000)
                                $('#create').hide()
                                $('#log').hide()
                                $('#main').hide()
                                $('#twittler').show()
                                $('#twittler').animate({top:'100px',opacity:'1'},1000)
                                $('#usinguser').text('@'+username)
                                $('#userTweets').text('')
                                break;
                            }
                        }
                    }
                
                }
        }else if(first==='' || last==='' || username==='' || dateofbirth==='' || email==='' || password===''){
            alert('Please make sure to fill all the inputs.')
        }
    })
    $('#showTweets').click(function() {
        for(var i=0; i<users.length; i++){
            if('@'+users[i].username!==$('#usinguser').text() && !($('.tweeter').text().includes(users[i].username))){
                $('#newTweets').append('<div class="tweeter">@'+users[i].username+'</div>')
                for(var j=0; j<users[i].tweets.length; j++) {
                    $('#newTweets').append('<div class="tweet">- '+users[i].tweets[j].tweet+', posted '+users[i].tweets[j].created_at+'</div>')
                }
            }
        }
    })
    $('#close').click(function() {
        $('#twittler').animate({top:'100px',opacity:'0'},1000)
        $('#usinguser').text('@');
        $('#twittler').hide()
        $('#newTweets').remove()
        $('#haha').append('<div id="newTweets"></div>')
        $('#userTweets').remove()
        $('#ha').append('<div id="userTweets"></div>')
        $('#main').show()
        $('#main').animate({top:'100px',opacity:'1'},1000)
    })
    $('#deleteTweets').click(function() {
        $('#newTweets').remove()
        $('#haha').append('<div id="newTweets"></div>')
    })
    $('#showMy').click(function() {
        for(var i=0; i<users.length; i++){
            if('@'+users[i].username===$('#usinguser').text() && !($('.tweeter').text().includes(users[i].username))){
                $('#userTweets').append('<div class="tweeter">@'+users[i].username+'</div>')
                for(var j=0; j<users[i].tweets.length; j++) {
                    $('#userTweets').append('<div class="tweet">- '+users[i].tweets[j].tweet+', posted '+users[i].tweets[j].created_at+'</div>')
                }
            }
        }
    })
    $('#delMy').click(function() {
        $('#userTweets').remove()
        $('#ha').append('<div id="userTweets"></div>')
    })
    $('#addTweet').click(function() {
        var toadd=$('#toadd').val()
        var hashtag='#'+$('#hashtag').val()
        if(toadd!==''){
            for(var i=0; i<users.length; i++) {
                if('@'+users[i].username === $('#usinguser').text()) {
                    if(hashtag!=='#'){
                        var obj={tweet:toadd+' '+hashtag, created_at:randomDate(new Date(2012, 0, 1), new Date())}
                    }else if(hashtag==='#') {
                        var obj={tweet:toadd, created_at:randomDate(new Date(2012, 0, 1), new Date())}
                    }
                    users[i].tweets.push(obj)
                    if($('#userTweets').text()!==''){
                        $('#userTweets').append('<div class="tweet">- '+obj.tweet+', posted '+obj.created_at+'</div>')
                    }
                    $('#toadd').val('')
                    $('#hashtag').val('')
                }
            }
            
        }else if(toadd===''){
            alert('Please put in a tweet to add.')
        }
    })
    $('#clearInputs').click(function() {
        $('#toadd').val('')
        $('#hashtag').val('')
    })
})
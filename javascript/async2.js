var http = require('http');
var bl = require('bl');
var url = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

// I'm guessing since we need them all to be finished we can try nested callbacks?
// Ahh the problem of order is that the difference urls finish streaming at a diff time
// but we need to print url1 first then url2, url3 (i think). subject to revision
// but isn't the way it's nested w/ the  http.get's sufficient? Or shoud I layer it in
// the responses?

// The correct response was to nest the responses, that is put the next htpp.get inside of the previous response bracket
// and not only the http.get bracket, check the git history for that one


http.get(url, function(response){

    response.pipe( bl(function(err, data)

    {
        console.log(data.toString('utf8') );


        http.get(url2, function(response1)
        {
            response1.pipe( bl(function(err1, data1)
            {
                console.log(data1.toString('utf8'));

                http.get(url3, function(response2)
                {
                    response2.pipe( bl(function( err2, data2)
                    {
                        console.log(data2.toString('utf8'));

                    }))

                });

            }))

        });


    }))
})xp;
